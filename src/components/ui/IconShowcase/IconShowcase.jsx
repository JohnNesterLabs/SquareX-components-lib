import React from 'react';
import styles from './IconShowcase.module.css';
import Icon from '../Icon/Icon';

/**
 * IconShowcase Component
 * Displays icons in a grid or list format with variants
 * 
 * @param {Array} icons - Array of icon objects: { name, variant, size, label }
 * @param {string} layout - 'grid' or 'list'
 * @param {boolean} showLabels - Show icon labels
 * @param {string} className - Additional CSS classes
 */
const IconShowcase = ({
  icons = [],
  layout = 'grid',
  showLabels = true,
  className = '',
  ...props
}) => {
  const containerClassNames = [
    styles.container,
    styles[`layout_${layout}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (icons.length === 0) {
    return (
      <div className={containerClassNames} {...props}>
        <p className={styles.emptyState}>No icons to display</p>
      </div>
    );
  }

  return (
    <div className={containerClassNames} {...props}>
      {icons.map((icon, index) => (
        <div key={index} className={styles.iconItem}>
          <div className={styles.iconWrapper}>
            <Icon
              name={icon.name}
              variant={icon.variant || 'default'}
              size={icon.size || 'medium'}
              className={styles.icon}
            />
          </div>
          {showLabels && icon.label && (
            <span className={styles.label}>{icon.label}</span>
          )}
          {icon.variant && (
            <span className={styles.variantLabel}>{icon.variant}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default IconShowcase;

