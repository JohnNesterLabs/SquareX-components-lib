import React from 'react';
import styles from './Checkbox.module.css';

/**
 * Checkbox Component
 * 
 * A generic checkbox component with multiple states and sizes.
 * 
 * @param {boolean} checked - Whether the checkbox is checked
 * @param {boolean} disabled - Whether the checkbox is disabled
 * @param {string} state - State: 'default', 'hover', 'focus', 'pressed'
 * @param {string} size - Size: 'small', 'medium', 'large'
 * @param {string} label - Optional label text
 * @param {function} onChange - Callback when checkbox state changes
 * @param {string} className - Additional CSS classes
 * @param {object} ...props - Additional props
 */
const Checkbox = ({
  checked = false,
  indeterminate = false,
  disabled = false,
  state = 'default',
  size = 'medium',
  label = '',
  onChange,
  className = '',
  id,
  name,
  value,
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
  const normalizedSize = size.toLowerCase();
  const isDisabled = disabled || actualState === 'disabled';

  // Handle change
  const handleChange = (e) => {
    if (!isDisabled && onChange) {
      onChange(e);
    }
  };

  const containerClassNames = [
    styles.checkboxContainer,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const checkboxClassNames = [
    styles.checkbox,
    styles[`size_${normalizedSize}`],
    checked && styles.checkboxChecked,
    !checked && indeterminate && styles.checkboxIndeterminateState,
    isDisabled && styles.checkboxDisabled,
    !isDisabled && styles[`state_${actualState}`],
  ]
    .filter(Boolean)
    .join(' ');

  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={containerClassNames}>
      <div className={styles.checkboxWrapper}>
        <input
          type="checkbox"
          id={checkboxId}
          name={name}
          value={value}
          checked={checked}
          disabled={isDisabled}
          onChange={handleChange}
          className={styles.checkboxInput}
          aria-checked={indeterminate ? 'mixed' : checked}
          aria-disabled={isDisabled}
          {...props}
        />
        <label
          htmlFor={checkboxId}
          className={checkboxClassNames}
        >
          {checked && (
            <div className={styles.checkboxCheck}>
              <div className={styles.checkIconWrapper}>
                <div className={styles.checkIconInner}>
                  <img
                    src="/icons/check.svg"
                    alt="Check"
                    className={styles.checkIcon}
                  />
                </div>
              </div>
            </div>
          )}
          {!checked && indeterminate && (
            <div className={styles.checkboxIndeterminate}>
              <div className={styles.indeterminateBar} />
            </div>
          )}
        </label>
      </div>
      {label && (
        <label htmlFor={checkboxId} className={styles.label}>
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;

