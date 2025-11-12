import React from 'react';
import './QuestionField.css';

const QuestionField = ({ question, value, error, onChange }) => {
  const renderField = () => {
    switch (question.type) {
      case 'text':
        return (
          <input
            type="text"
            id={question.id}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            className={`form-input ${error ? 'error' : ''}`}
            placeholder={question.placeholder || 'Masukkan jawaban...'}
          />
        );

      case 'textarea':
        return (
          <textarea
            id={question.id}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            className={`form-textarea ${error ? 'error' : ''}`}
            rows={question.rows || 4}
            placeholder={question.placeholder || 'Masukkan jawaban...'}
          />
        );

      case 'number':
        return (
          <input
            type="number"
            id={question.id}
            value={value || ''}
            onChange={(e) => onChange(e.target.value ? parseFloat(e.target.value) : '')}
            className={`form-input ${error ? 'error' : ''}`}
            placeholder={question.placeholder || 'Masukkan angka...'}
            min={question.min}
            max={question.max}
          />
        );

      case 'date':
        return (
          <input
            type="date"
            id={question.id}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            className={`form-input ${error ? 'error' : ''}`}
          />
        );

      case 'radio':
        return (
          <div className="radio-group">
            {question.options.map((option) => (
              <label key={option.value} className="radio-label">
                <input
                  type="radio"
                  name={question.id}
                  value={option.value}
                  checked={value === option.value}
                  onChange={(e) => onChange(e.target.value)}
                />
                <span className="radio-text">{option.label}</span>
              </label>
            ))}
          </div>
        );

      case 'checkbox':
        return (
          <div className="checkbox-group">
            {question.options.map((option) => (
              <label key={option.value} className="checkbox-label">
                <input
                  type="checkbox"
                  value={option.value}
                  checked={Array.isArray(value) && value.includes(option.value)}
                  onChange={(e) => {
                    const currentValues = Array.isArray(value) ? value : [];
                    if (e.target.checked) {
                      onChange([...currentValues, option.value]);
                    } else {
                      onChange(currentValues.filter(v => v !== option.value));
                    }
                  }}
                />
                <span className="checkbox-text">{option.label}</span>
              </label>
            ))}
          </div>
        );

      case 'select':
        return (
          <select
            id={question.id}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            className={`form-select ${error ? 'error' : ''}`}
          >
            <option value="">Pilih...</option>
            {question.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'scale':
        return (
          <div className="scale-group">
            <div className="scale-labels">
              <span>{question.scaleLabels?.min || 'Sangat Tidak Setuju'}</span>
              <span>{question.scaleLabels?.max || 'Sangat Setuju'}</span>
            </div>
            <div className="scale-options">
              {Array.from({ length: question.scale || 5 }, (_, i) => i + 1).map((num) => (
                <label key={num} className="scale-label">
                  <input
                    type="radio"
                    name={question.id}
                    value={num}
                    checked={value === num.toString()}
                    onChange={(e) => onChange(e.target.value)}
                  />
                  <span className="scale-number">{num}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 'info':
        return (
          <div className="info-box">
            <pre className="info-content">{question.content}</pre>
          </div>
        );

      default:
        return null;
    }
  };

  if (question.type === 'info') {
    return (
      <div className="question-field info-field">
        {question.label && (
          <label className="question-label">
            {question.label}
          </label>
        )}
        {renderField()}
      </div>
    );
  }

  return (
    <div className="question-field">
      <label htmlFor={question.id} className="question-label">
        {question.label}
        {question.required && <span className="required">*</span>}
      </label>
      {question.helpText && (
        <p className="question-help">{question.helpText}</p>
      )}
      {renderField()}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default QuestionField;

