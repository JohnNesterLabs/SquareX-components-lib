import React from 'react';
import styles from './Radio.module.css';

/**
 * Radio Component
 * 
 * A generic radio button component with multiple states and sizes.
 * Radio buttons should be used in groups with the same name attribute.
 * 
 * @param {boolean} checked - Whether the radio is selected
 * @param {boolean} disabled - Whether the radio is disabled
 * @param {string} state - State: 'default', 'hover', 'focus', 'pressed'
 * @param {string} size - Size: 'small', 'medium', 'large'
 * @param {string} label - Optional label text
 * @param {string} name - Name attribute for radio group (required for grouping)
 * @param {string} value - Value attribute for the radio
 * @param {function} onChange - Callback when radio state changes
 * @param {string} className - Additional CSS classes
 * @param {object} ...props - Additional props
 */
const Radio = ({
  checked = false,
  disabled = false,
  state = 'default',
  size = 'medium',
  label = '',
  name,
  value,
  onChange,
  className = '',
  id,
  ...props
}) => {
  // Normalize state
  const normalizeState = (stateName) => {
    if (!stateName) return 'default';
    const normalized = stateName.toLowerCase();
    if (normalized === 'hover') return 'hover';
    if (normalized === 'focus') return 'focus';
    if (normalized === 'pressed') return 'pressed';
    return 'default';
  };

  const actualState = normalizeState(state);
  const isNumericSize = typeof size === 'number';
  const normalizedSize = isNumericSize ? 'custom' : size.toLowerCase();
  const isDisabled = disabled || actualState === 'disabled';

  const getSizeStyle = () => {
    if (isNumericSize) {
      return {
        width: `${size}px`,
        height: `${size}px`,
      };
    }
    return {};
  };


  // Handle change
  const handleChange = (e) => {
    if (!isDisabled && onChange) {
      onChange(e);
    }
  };

  const containerClassNames = [
    styles.radioContainer,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const radioClassNames = [
    styles.radio,
    styles[`size_${normalizedSize}`],
    checked && styles.radioChecked,
    isDisabled && styles.radioDisabled,
    !isDisabled && styles[`state_${actualState}`],
  ]
    .filter(Boolean)
    .join(' ');

  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={containerClassNames}>
      <div className={styles.radioWrapper}>
        <input
          type="radio"
          id={radioId}
          name={name}
          value={value}
          checked={checked}
          disabled={isDisabled}
          onChange={handleChange}
          className={styles.radioInput}
          aria-checked={checked}
          aria-disabled={isDisabled}
          {...props}
        />
        <label
          htmlFor={radioId}
          className={radioClassNames}
          style={getSizeStyle()}
        >
          {checked && (
            <div className={styles.radioDot}></div>
          )}
        </label>
      </div>
      {label && (
        <label htmlFor={radioId} className={styles.label}>
          {label}
        </label>
      )}
    </div>
  );
};

export default Radio;

