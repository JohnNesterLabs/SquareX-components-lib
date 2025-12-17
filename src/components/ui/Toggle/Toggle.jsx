import React from 'react';
import styles from './Toggle.module.css';

/**
 * Toggle Component
 * 
 * A generic toggle/switch component with multiple states and sizes.
 * 
 * @param {boolean} checked - Whether the toggle is on/checked
 * @param {boolean} disabled - Whether the toggle is disabled
 * @param {string} state - State: 'default', 'hover', 'focus', 'pressed'
 * @param {string} size - Size: 'small', 'medium', 'large'
 * @param {string} label - Optional label text
 * @param {function} onChange - Callback when toggle state changes
 * @param {string} className - Additional CSS classes
 * @param {object} ...props - Additional props
 */
const Toggle = ({
  checked = false,
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
    styles.toggleContainer,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const toggleClassNames = [
    styles.toggle,
    styles[`size_${normalizedSize}`],
    checked && styles.toggleChecked,
    isDisabled && styles.toggleDisabled,
    !isDisabled && styles[`state_${actualState}`],
  ]
    .filter(Boolean)
    .join(' ');

  const toggleId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={containerClassNames}>
      <div className={styles.toggleWrapper}>
        <input
          type="checkbox"
          id={toggleId}
          name={name}
          value={value}
          checked={checked}
          disabled={isDisabled}
          onChange={handleChange}
          className={styles.toggleInput}
          aria-checked={checked}
          aria-disabled={isDisabled}
          role="switch"
          {...props}
        />
        <label
          htmlFor={toggleId}
          className={toggleClassNames}
        >
          <span className={styles.toggleThumb}></span>
        </label>
      </div>
      {label && (
        <label htmlFor={toggleId} className={styles.label}>
          {label}
        </label>
      )}
    </div>
  );
};

export default Toggle;

