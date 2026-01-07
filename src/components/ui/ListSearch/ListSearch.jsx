import React from 'react';
import styles from './ListSearch.module.css';

const ListSearch = ({
  label = 'Search',
  chipList = true,
  state = 'default',
  type = 'type1',
  chips = [],
  onChipRemove,
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
    if (!stateName || stateName === 'default') return null;
    const normalized = stateName.toLowerCase().replace(/\s+/g, '').replace(/-/g, '');
    if (normalized === 'focused') return 'focused';
    if (normalized === 'typing') return 'typing';
    if (normalized === 'hover') return 'hover';
    return normalized;
  };

  // Normalize type
  const normalizeType = (typeName) => {
    if (!typeName) return 'type1';
    const normalized = typeName.toLowerCase().replace(/\s+/g, '').replace(/-/g, '');
    if (normalized === 'type2' || normalized === 'type2') return 'type2';
    return 'type1';
  };

  // Determine actual state and type
  const getActualState = () => {
    if (disabled) return 'disabled';

    const propState = normalizeState(state);
    if (propState) return propState;

    if (isFocused) return (label && label !== 'Search') ? 'typing' : 'focused';
    if (isHovered) return 'hover';

    return 'default';
  };

  const actualState = getActualState();
  const actualType = normalizeType(type);


  // Get search icon
  const getSearchIcon = () => {
    return (
      <div className={styles.searchIcon}>
        <img src="/icons/search.svg" alt="Search" className={styles.searchIconImage} />
      </div>
    );
  };

  // Get chips
  const getChips = () => {
    if (!chipList || chips.length === 0) return null;
    return (
      <div className={styles.chipList}>
        {chips.map((chip, index) => (
          <div key={index} className={styles.chip}>
            <span className={styles.chipLabel}>{chip.label || 'Label'}</span>
            <button
              type="button"
              className={styles.chipRemove}
              onClick={(e) => {
                e.stopPropagation();
                if (onChipRemove) {
                  onChipRemove(index);
                }
              }}
              aria-label="Remove chip"
            >
              <img src="/icons/X.svg" alt="Remove" className={styles.chipIcon} />
            </button>
          </div>
        ))}
      </div>
    );
  };

  // Build class names
  const containerClassNames = [
    styles.container,
    styles[`container_type_${actualType}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const inputClassNames = [
    styles.input,
    styles[`input_state_${actualState}`],
    styles[`input_type_${actualType}`],
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
  const showPlaceholder = !label || label === 'Search';
  const displayLabel = label || 'Search';
  const isTyping = actualState === 'typing' && displayLabel !== 'Search' && displayLabel !== '';

  // Render chips based on type
  const renderChipsAbove = () => {
    if (actualType === 'type2' && chipList && chips.length > 0) {
      return getChips();
    }
    return null;
  };

  const renderChipsBelow = () => {
    if (actualType === 'type1' && chipList && chips.length > 0) {
      return getChips();
    }
    return null;
  };

  // Render content
  const renderContent = () => {
    return (
      <div
        className={containerClassNames}
        title={title}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {renderChipsAbove()}
        <div className={inputClassNames}>
          <div className={inputInnerClassNames}>
            {getSearchIcon()}
            <input
              type="text"
              className={styles.realInput}
              value={label === 'Search' ? '' : label}
              placeholder="Search"
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
            {(actualState === 'focused' || actualState === 'typing') && !label && (
              <span className={styles.cursor}>|</span>
            )}
          </div>
        </div>
        {renderChipsBelow()}
      </div>
    );
  };


  return renderContent();
};

export default ListSearch;

