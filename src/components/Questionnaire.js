import React, { useState } from 'react';
import './Questionnaire.css';
import FormSection from './FormSection';
import ProgressBar from './ProgressBar';
import { questionnaireData } from '../data/questionnaireData';

const Questionnaire = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSections = questionnaireData.sections.length;

  const updateFormData = (sectionId, data) => {
    setFormData(prev => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        ...data
      }
    }));
  };

  // Get value from any section for conditional logic
  const getFormValue = (sectionId, fieldId) => {
    return formData[sectionId]?.[fieldId];
  };

  const validateSection = (section) => {
    const sectionErrors = {};
    const sectionData = formData[section.id] || {};

    // Skip validation for evaluation sections if user hasn't participated
    if (['konteks', 'masukan', 'proses', 'dampak'].includes(section.id)) {
      const pernahMengikuti = getFormValue('keterlibatan', 'pernah_mengikuti');
      if (pernahMengikuti !== 'ya') {
        return sectionErrors; // Return empty errors, section will be skipped
      }
    }

    section.questions.forEach(question => {
      // Skip info type questions
      if (question.type === 'info') return;

      // Check if question should be shown
      let shouldValidate = true;
      if (question.conditional) {
        const conditionField = question.conditional.field;
        const conditionValue = question.conditional.value;
        let conditionData = sectionData[conditionField];
        
        // Check cross-section conditions
        if (conditionData === undefined) {
          if (conditionField === 'kecamatan') {
            conditionData = getFormValue('identitas', conditionField);
          } else if (conditionField === 'pernah_mengikuti') {
            conditionData = getFormValue('keterlibatan', conditionField);
          } else if (conditionField === 'alasan_tidak_ikut' || 
                     conditionField === 'jenis_kegiatan' || 
                     conditionField === 'sumber_informasi' ||
                     conditionField === 'alasan_mengikuti') {
            conditionData = getFormValue('keterlibatan', conditionField) || 
                           getFormValue('partisipasi', conditionField);
          } else if (conditionField === 'tingkat_pendidikan') {
            conditionData = getFormValue('identitas', conditionField);
          }
        }
        
        shouldValidate = conditionData === conditionValue;
      }

      // Special handling for Puskesmas - only validate the one that should be shown
      if (question.id && question.id.startsWith('puskesmas_')) {
        const kecamatan = getFormValue('identitas', 'kecamatan');
        const kecamatanToPuskesmas = {
          'sawangan': 'puskesmas',
          'bojongsari': 'puskesmas_bojongsari',
          'pancoran_mas': 'puskesmas_pancoran_mas',
          'cipayung': 'puskesmas_cipayung',
          'sukmajaya': 'puskesmas_sukmajaya',
          'cilodong': 'puskesmas_cilodong',
          'cimanggis': 'puskesmas_cimanggis',
          'tapos': 'puskesmas_tapos',
          'beji': 'puskesmas_beji',
          'limo': 'puskesmas_limo',
          'cinere': 'puskesmas_cinere'
        };
        if (kecamatan && question.id !== kecamatanToPuskesmas[kecamatan]) {
          shouldValidate = false;
        }
      }

      if (shouldValidate && question.required) {
        const value = sectionData[question.id];
        if (!value || (Array.isArray(value) && value.length === 0)) {
          sectionErrors[question.id] = `${question.label} wajib diisi`;
        }
      }
    });

    return sectionErrors;
  };

  const handleNext = () => {
    const currentSectionData = questionnaireData.sections[currentSection];
    
    // Skip evaluation sections if user hasn't participated
    if (['konteks', 'masukan', 'proses', 'dampak'].includes(currentSectionData.id)) {
      const pernahMengikuti = getFormValue('keterlibatan', 'pernah_mengikuti');
      if (pernahMengikuti !== 'ya') {
        // Skip to next section
        if (currentSection < totalSections - 1) {
          setCurrentSection(currentSection + 1);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }
    }

    const sectionErrors = validateSection(currentSectionData);
    
    if (Object.keys(sectionErrors).length > 0) {
      setErrors(prev => ({
        ...prev,
        [currentSectionData.id]: sectionErrors
      }));
      return;
    }

    // Check consent - if they don't agree, show error and don't proceed
    if (currentSectionData.id === 'informed_consent') {
      const consent = getFormValue('informed_consent', 'consent_agreement');
      if (consent !== 'setuju') {
        setErrors(prev => ({
          ...prev,
          informed_consent: {
            consent_agreement: 'Anda harus menyetujui untuk berpartisipasi dalam penelitian ini untuk melanjutkan.'
          }
        }));
        return;
      }
    }

    if (currentSection < totalSections - 1) {
      setCurrentSection(currentSection + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    const currentSectionData = questionnaireData.sections[currentSection];
    const sectionErrors = validateSection(currentSectionData);
    
    if (Object.keys(sectionErrors).length > 0) {
      setErrors(prev => ({
        ...prev,
        [currentSectionData.id]: sectionErrors
      }));
      return;
    }

    // Validate all sections
    let allErrors = {};
    questionnaireData.sections.forEach(section => {
      const sectionErrors = validateSection(section);
      if (Object.keys(sectionErrors).length > 0) {
        allErrors[section.id] = sectionErrors;
      }
    });

    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      // Go to first section with errors
      const firstErrorSection = questionnaireData.sections.findIndex(
        section => allErrors[section.id]
      );
      if (firstErrorSection !== -1) {
        setCurrentSection(firstErrorSection);
      }
      return;
    }

    // Submit form
    const finalData = {
      timestamp: new Date().toISOString(),
      responses: formData
    };

    // Export as JSON
    const dataStr = JSON.stringify(finalData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `kuesioner-posyandu-${Date.now()}.json`;
    link.click();

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({});
    setErrors({});
    setCurrentSection(0);
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="questionnaire-container">
        <div className="submission-success">
          <div className="success-icon">✓</div>
          <h2>Terima Kasih!</h2>
          <p>Kuesioner Anda telah berhasil dikirim.</p>
          <p>Data telah diunduh sebagai file JSON.</p>
          <button onClick={handleReset} className="btn btn-primary">
            Isi Kuesioner Baru
          </button>
        </div>
      </div>
    );
  }

  const currentSectionData = questionnaireData.sections[currentSection];
  const sectionData = formData[currentSectionData.id] || {};
  const sectionErrors = errors[currentSectionData.id] || {};

  return (
    <div className="questionnaire-container">
      <div className="questionnaire-header">
        <h1>{questionnaireData.title}</h1>
        {questionnaireData.subtitle && (
          <h2 className="subtitle-main">{questionnaireData.subtitle}</h2>
        )}
        {questionnaireData.description && (
          <p className="subtitle">{questionnaireData.description}</p>
        )}
      </div>

      <ProgressBar 
        current={currentSection + 1} 
        total={totalSections} 
      />

      <div className="section-header">
        <h2>
          {currentSectionData.title}
          <span className="section-number">
            ({currentSection + 1} dari {totalSections})
          </span>
        </h2>
        {currentSectionData.description && (
          <p className="section-description">{currentSectionData.description}</p>
        )}
      </div>

      {/* Hide evaluation sections if user hasn't participated */}
      {(['konteks', 'masukan', 'proses', 'dampak'].includes(currentSectionData.id) && 
        getFormValue('keterlibatan', 'pernah_mengikuti') !== 'ya') ? (
        <div className="skip-section-message">
          <p>Bagian ini hanya untuk responden yang pernah mengikuti kegiatan Posyandu Remaja.</p>
          <p>Silakan lanjutkan ke bagian berikutnya.</p>
        </div>
      ) : (
        <FormSection
          section={currentSectionData}
          data={sectionData}
          errors={sectionErrors}
          allFormData={formData}
          onChange={(data) => updateFormData(currentSectionData.id, data)}
        />
      )}

      <div className="navigation-buttons">
        <button
          onClick={handlePrevious}
          disabled={currentSection === 0}
          className="btn btn-secondary"
        >
          ← Sebelumnya
        </button>
        {currentSection < totalSections - 1 ? (
          <button onClick={handleNext} className="btn btn-primary">
            Selanjutnya →
          </button>
        ) : (
          <button onClick={handleSubmit} className="btn btn-submit">
            Kirim Kuesioner
          </button>
        )}
      </div>
    </div>
  );
};

export default Questionnaire;

