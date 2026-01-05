import React from 'react';
import styles from './Badge.module.css';

/**
 * Badge Component
 * 
 * A badge component with different states (active, inactive, default).
 * Used to display status, labels, or tags.
 * 
 * @param {string} label - Text to display in the badge
 * @param {string} type - Badge type: 'active', 'inactive', 'default' (default: 'default')
 * @param {string} size - Badge size: 'small', 'medium', 'large' (default: 'medium')
 * @param {string} className - Additional CSS classes
 */
const Badge = ({
  label = 'Badge',
  type = 'default',
  size = 'medium',
  className = '',
  ...props
}) => {
  // Normalize type
  const normalizeType = (typeName) => {
    if (!typeName) return 'default';
    const normalized = typeName.toLowerCase();
    if (normalized === 'active') return 'active';
    if (normalized === 'inactive') return 'inactive';
    if (normalized === 'default') return 'default';
    return 'default';
  };

  // Normalize size
  const normalizeSize = (sizeName) => {
    if (!sizeName) return 'medium';
    const normalized = sizeName.toLowerCase();
    if (normalized === 'small') return 'small';
    if (normalized === 'medium') return 'medium';
    if (normalized === 'large') return 'large';
    return 'medium';
  };

  const actualType = normalizeType(type);
  const actualSize = normalizeSize(size);

  const badgeClassNames = [
    styles.badge,
    styles[`type_${actualType}`],
    styles[`size_${actualSize}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={badgeClassNames} {...props}>
      {label}
    </span>
  );
};

export default Badge;
