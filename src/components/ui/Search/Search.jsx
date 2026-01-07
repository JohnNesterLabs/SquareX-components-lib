import React from 'react';
import styles from './Search.module.css';

const Search = ({
  value = '',
  error = '',
  hasError = false,
  state = 'default',
  placeholder = 'Search',
  onChange,
  onFocus,
  onBlur,
  disabled,
  className = '',
  title = '',
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  // Normalize state name
  const normalizeState = (stateName) => {
    if (!stateName || stateName === 'default') return null; // Return null if default to allow internal state
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
  const getActualState = () => {
    if (disabled) return 'disabled';

    const propState = normalizeState(state);
    if (propState) return propState;

    if (hasError) return 'error';
    if (isFocused) return value ? 'typing' : 'focused';
    if (isHovered) return value ? 'filledHover' : 'hover';
    if (value) return 'filled';

    return 'default';
  };

  const actualState = getActualState();


  // Get search icon
  const getSearchIcon = () => {
    return (
      <div className={styles.searchIcon}>
        <img src="/icons/search.svg" alt="Search" className={styles.searchIconImage} />
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

  const inputClassNames = [
    styles.input,
    styles[`input_state_${actualState}`],
  ]
    .filter(Boolean)
    .join(' ');

  const inputInnerClassNames = [
    styles.inputInner,
    styles[`inputInner_state_${actualState}`],
  ]
    .filter(Boolean)
    .join(' ');

  // Determine if input should be disabled
  const isDisabled = disabled || actualState === 'disabled';

  // Determine input value/placeholder
  const displayValue = value || '';
  const showPlaceholder = !value && placeholder;
  const isTyping = actualState === 'typing' && displayValue !== '';

  // Render content
  return (
    <div
      className={containerClassNames}
      title={title}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={inputClassNames}>
        <div className={inputInnerClassNames}>
          {getSearchIcon()}
          <input
            type="text"
            className={styles.realInput}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onFocus={(e) => {
              setIsFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur?.(e);
            }}
            disabled={isDisabled}
            {...props}
          />
          {(actualState === 'focused' || actualState === 'typing') && !value && (
            <span className={styles.cursor}>|</span>
          )}
        </div>
      </div>
      {hasError && error && (
        <p className={styles.error}>{error}</p>
      )}
    </div>
  );
};

export default Search;
