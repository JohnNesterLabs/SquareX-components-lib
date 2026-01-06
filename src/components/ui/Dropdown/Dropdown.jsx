import styles from './Dropdown.module.css';
import Icon from '../Icon/Icon';

const Dropdown = ({
  value = '',
  description = '',
  label = '',
  error = '',
  hasLabel = true,
  hasDescription = true,
  hasError = false,
  hasChips = false,
  state = 'default',
  type = 'medium',
  placeholder = 'Value',
  chips = [],
  onChange,
  onFocus,
  onBlur,
  onClick,
  disabled,
  className = '',
  children,
  ...props
}) => {
  // Normalize state name
  const normalizeState = (stateName) => {
    if (!stateName) return 'default';
    const normalized = stateName.toLowerCase().replace(/\s+/g, '').replace(/-/g, '');
    if (normalized === 'selected') return 'selected';
    if (normalized === 'focused') return 'focused';
    if (normalized === 'hover') return 'hover';
    if (normalized === 'error') return 'error';
    if (normalized === 'disabled') return 'disabled';
    return normalized;
  };

  // Normalize type
  const normalizedType = type.toLowerCase();

  // Determine actual state (disabled takes precedence)
  const actualState = disabled ? 'disabled' : normalizeState(state);

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

  // Build class names
  const containerClassNames = [
    styles.container,
    styles[`type_${normalizedType}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const dropdownWrapperClassNames = [
    styles.dropdownWrapper,
    styles[`dropdownWrapper_type_${normalizedType}`],
    styles[`dropdownWrapper_state_${actualState}`],
    styles[`dropdownWrapper_type_${normalizedType}_state_${actualState}`],
  ]
    .filter(Boolean)
    .join(' ');

  const chevronWrapperClassNames = [
    styles.chevronWrapper,
    actualState === 'focused' ? styles.chevronRotated : '',
  ]
    .filter(Boolean)
    .join(' ');

  // Determine if dropdown should be disabled
  const isDisabled = disabled || actualState === 'disabled';

  const fieldContent = (
    <div className={styles.fieldWrapper}>
      <button
        type="button"
        className={dropdownWrapperClassNames}
        onClick={onClick || onFocus}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        {...props}
      >
        <div className={styles.dropdownInner}>
          {getChips()}
          {value ? (
            <span className={styles.value}>{value}</span>
          ) : (
            <span className={styles.placeholder}>{placeholder}</span>
          )}
          <div className={styles.chevronWrapper}>
            <Icon name={children ? "CaretUp" : "CaretDown"} size={12} className={styles.chevronIcon} />
          </div>
        </div>
      </button>
      {children}
    </div>
  );

  return (
    <div className={containerClassNames}>
      {hasLabel && label && <p className={styles.label}>{label}</p>}
      {hasDescription && description && <p className={styles.description}>{description}</p>}

      {fieldContent}

      {hasError && error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Dropdown;
