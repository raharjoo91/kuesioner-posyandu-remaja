import React from 'react';
import './FormSection.css';
import QuestionField from './QuestionField';

const FormSection = ({ section, data, errors, allFormData, onChange }) => {
  const handleFieldChange = (questionId, value) => {
    onChange({
      [questionId]: value
    });
  };

  const shouldShowQuestion = (question) => {
    if (!question.conditional) {
      // Special handling for Puskesmas questions - only show one based on kecamatan
      if (question.id && question.id.startsWith('puskesmas_')) {
        const kecamatan = allFormData?.identitas?.kecamatan;
        if (!kecamatan) return false;
        
        // Map kecamatan to puskesmas question id
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
        
        return question.id === kecamatanToPuskesmas[kecamatan];
      }
      return true;
    }
    
    const conditionField = question.conditional.field;
    const conditionValue = question.conditional.value;
    
    // Check in current section first
    let conditionData = data[conditionField];
    
    // If not found in current section, check other sections
    if (conditionData === undefined && allFormData) {
      // Check common cross-section fields
      if (conditionField === 'kecamatan') {
        conditionData = allFormData.identitas?.[conditionField];
      } else if (conditionField === 'pernah_mengikuti') {
        conditionData = allFormData.keterlibatan?.[conditionField];
      } else if (conditionField === 'alasan_tidak_ikut' || 
                 conditionField === 'jenis_kegiatan' || 
                 conditionField === 'sumber_informasi' ||
                 conditionField === 'alasan_mengikuti') {
        // These are in the same section (keterlibatan or partisipasi)
        conditionData = allFormData.keterlibatan?.[conditionField] || 
                       allFormData.partisipasi?.[conditionField];
      } else if (conditionField === 'tingkat_pendidikan') {
        conditionData = allFormData.identitas?.[conditionField];
      }
    }
    
    return conditionData === conditionValue;
  };

  return (
    <div className="form-section">
      {section.questions.map((question) => {
        if (!shouldShowQuestion(question)) {
          return null;
        }

        return (
          <div key={question.id} className="question-group">
            <QuestionField
              question={question}
              value={data[question.id]}
              error={errors[question.id]}
              onChange={(value) => handleFieldChange(question.id, value)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FormSection;

