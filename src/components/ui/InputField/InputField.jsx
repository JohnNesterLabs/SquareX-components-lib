import React, { useState } from 'react';
import styles from './InputField.module.css';

const InputField = ({
  value: controlledValue,
  description = '',
  label = '',
  error = '',
  hasLabel = true,
  hasDescription = true,
  hasError = false,
  hasChips = false,
  showIcon = false,
  chooseIcon = null,
  state = 'default',
  placeholder = 'Value',
  chips = [],
  onChange,
  onFocus,
  onBlur,
  disabled,
  className = '',
  ...props
}) => {
  // Internal state for uncontrolled mode
  const [internalValue, setInternalValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // Use controlled value if provided, otherwise use internal state
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  // Normalize state name
  const normalizeState = (stateName) => {
    if (!stateName) return 'default';
    const normalized = stateName.toLowerCase().replace(/\s+/g, '').replace(/-/g, '');
    if (normalized === 'filledin' || normalized === 'filled') return 'filled';
    if (normalized === 'filledinhover' || normalized === 'filledhover' || normalized === 'filled-hover') return 'filledHover';
    if (normalized === 'focused') return 'focused';
    if (normalized === 'typing') return 'typing';
    if (normalized === 'hover') return 'hover';
    if (normalized === 'error') return 'error';
    if (normalized === 'disabled') return 'disabled';
    return normalized;
  };

  // Determine actual state
  const actualState = disabled ? 'disabled' : normalizeState(state);

  // Get icon element
  const getIcon = () => {
    if (!showIcon) return null;
    if (chooseIcon) return chooseIcon;
    return (
      <div className={styles.iconWrapper}>
        <img src="/icons/Icon.svg" alt="Icon" className={styles.icon} />
      </div>
    );
  };

  // Get chips element
  const getChips = () => {
    if (!hasChips || chips.length === 0) return null;
    return (
      <div className={styles.chipList}>
        {chips.map((chip, index) => (
          <div key={index} className={styles.chip}>
            <span className={styles.chipLabel}>{chip.label || 'Label'}</span>
            {chip.onRemove && (
              <button
                type="button"
                className={styles.chipRemove}
                onClick={(e) => {
                  e.stopPropagation();
                  chip.onRemove();
                }}
                aria-label="Remove chip"
              >
                <img src="/icons/Vector.svg" alt="Remove" className={styles.chipIcon} />
              </button>
            )}
          </div>
        ))}
      </div>
    );
  };

  // Handle change
  const handleChange = (e) => {
    if (!disabled) {
      // Update internal state if uncontrolled
      if (controlledValue === undefined) {
        setInternalValue(e.target.value);
      }
      // Call onChange callback if provided
      if (onChange) {
        onChange(e);
      }
    }
  };

  // Handle focus
  const handleFocus = (e) => {
    if (!disabled) {
      setIsFocused(true);
      if (onFocus) {
        onFocus(e);
      }
    }
  };

  // Handle blur
  const handleBlur = (e) => {
    if (!disabled) {
      setIsFocused(false);
      if (onBlur) {
        onBlur(e);
      }
    }
  };

  // Build class names
  const containerClassNames = [
    styles.container,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const inputClassNames = [
    styles.input,
    styles[`state_${actualState}`],
  ]
    .filter(Boolean)
    .join(' ');

  const inputWrapperClassNames = [
    styles.inputWrapper,
    styles[`inputWrapper_state_${actualState}`],
  ]
    .filter(Boolean)
    .join(' ');

  // Determine if input should be disabled
  const isDisabled = disabled || actualState === 'disabled';

  // Generate unique ID for input
  const inputId = props.id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={containerClassNames}>
      {hasLabel && label && (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      )}
      {hasDescription && description && (
        <p className={styles.description}>{description}</p>
      )}
      <div className={inputWrapperClassNames}>
        <div className={styles.inputInner}>
          <input
            type="text"
            id={inputId}
            className={inputClassNames}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isDisabled}
            aria-invalid={hasError}
            aria-describedby={hasError ? `${inputId}-error` : undefined}
            {...props}
          />
          {getIcon()}
          {getChips()}
        </div>
      </div>
      {hasError && error && (
        <p className={styles.error} id={`${inputId}-error`}>
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;
