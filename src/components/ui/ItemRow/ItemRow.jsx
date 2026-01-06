import React from 'react';
import styles from './ItemRow.module.css';
import Icon from '../Icon/Icon';
import Checkbox from '../Checkbox/Checkbox';
import Radio from '../Radio/Radio';

const ItemRow = ({
  showLeftIcon = true,
  hasCheckbox = false,
  hasRadio = false,
  checked = false,
  chooseLeftIcon = null,
  label = 'Item',
  showBody = false,
  body = 'Body',
  showInfo = false,
  showRightIcon = false,
  chooseRightIcon = null,
  type = 'Default',
  onClick,
  className = '',
  ...props
}) => {
  const normalizeType = (typeName) => {
    if (!typeName) return 'default';
    const normalized = typeName.toLowerCase();
    if (normalized === 'hover') return 'hover';
    if (normalized === 'disabled') return 'disabled';
    if (normalized === 'selected') return 'selected';
    if (normalized === 'danger') return 'danger';
    return 'default';
  };

  const actualType = normalizeType(type);
  const isDisabled = actualType === 'disabled';
  const Component = isDisabled ? 'div' : 'button';

  const containerClassNames = [
    styles.itemRow,
    styles[`type_${actualType}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Determine if the control should be checked
  const isChecked = checked || actualType === 'selected';

  return (
    <Component
      className={containerClassNames}
      onClick={onClick}
      disabled={isDisabled}
      type={Component === 'button' ? 'button' : undefined}
      {...props}
    >
      {showInfo && (
        <div className={styles.infoIcon}>
          <Icon name="Info" size={14} className={styles.infoIconImg} />
        </div>
      )}
      <div className={styles.content}>
        {showLeftIcon && (
          <div className={styles.iconWrapper}>
            {chooseLeftIcon || (
              <div className={styles.fileIcon}>
                <Icon name="File" size={14} className={styles.fileIconImg} />
              </div>
            )}
          </div>
        )}
        <div className={styles.text}>
          <p className={styles.label}>{label}</p>
          {showBody && (
            <p className={styles.body}>{body}</p>
          )}
        </div>
        {showRightIcon && (
          <div className={styles.iconWrapper}>
            {chooseRightIcon || (
              <div className={styles.starIcon}>
                <Icon name="Star" size={14} className={styles.starIconImg} />
              </div>
            )}
          </div>
        )}
      </div>
      {hasCheckbox && (
        <div className={styles.checkboxField}>
          <Checkbox
            checked={isChecked}
            disabled={isDisabled}
            size={16}
            readOnly={!onClick}
          />
        </div>
      )}
      {hasRadio && (
        <div className={styles.radioField}>
          <Radio
            checked={isChecked}
            disabled={isDisabled}
            size={16}
            readOnly={!onClick}
          />
        </div>
      )}
    </Component>
  );
};

export default ItemRow;

