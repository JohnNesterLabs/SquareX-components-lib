import React, { useState } from 'react';
import styles from './TextArea.module.css';

const TextArea = ({
  value,
  defaultValue,
  body, // Alias for value for backward compatibility
  title = '',
  description = '',
  label = '',
  error = '',
  hasLabel = true,
  hasDescription = true,
  hasError = false,
  showIcon = false,
  chooseIcon = null,
  showTitle = false,
  showDragIcon = true,
  state = 'default',
  placeholder = 'Body',
  onChange,
  onFocus,
  onBlur,
  disabled,
  className = '',
  rows = 4,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

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

  // Determine actual state (disabled takes precedence)
  let actualState = disabled ? 'disabled' : normalizeState(state);

  // If no explicit state is provided and it's focused, show focused state
  if (actualState === 'default' && isFocused) {
    actualState = 'focused';
  }

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

  // Get drag icon
  const getDragIcon = () => {
    if (!showDragIcon) return null;
    return (
      <div className={styles.dragIcon}>
        <img src="/icons/Vector.svg" alt="Drag" className={styles.dragIconImage} />
      </div>
    );
  };

  // Build class names
  const containerClassNames = [
    styles.container,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const textareaWrapperClassNames = [
    styles.textareaWrapper,
    styles[`textareaWrapper_state_${actualState}`],
    hasError ? styles.textareaWrapper_state_error : '',
  ]
    .filter(Boolean)
    .join(' ');

  // Determine if textarea should be disabled
  const isDisabled = disabled || actualState === 'disabled';

  const handleFocus = (e) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  return (
    <div className={containerClassNames}>
      {hasLabel && label && (
        <label className={styles.label}>
          {label}
        </label>
      )}
      {hasDescription && description && (
        <p className={styles.description}>{description}</p>
      )}
      <div className={textareaWrapperClassNames}>
        <div className={styles.textareaInner}>
          <div className={styles.textContent}>
            {showTitle && title && (
              <p className={styles.title}>{title}</p>
            )}
            <textarea
              className={styles.nativeTextarea}
              value={value !== undefined ? value : body}
              defaultValue={defaultValue}
              placeholder={placeholder}
              onChange={onChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={isDisabled}
              rows={rows}
              {...props}
            />
          </div>
          {getIcon()}
          {getDragIcon()}
        </div>
      </div>
      {(hasError || actualState === 'error') && error && (
        <p className={styles.error}>{error}</p>
      )}
    </div>
  );
};

export default TextArea;
