import React from 'react';
import styles from './Icon.module.css';

/**
 * Icon Component
 * 
 * A flexible icon component that supports variants, sizes, and states.
 * Uses a single SVG file and scales it dynamically - no need for separate size files!
 * 
 * @param {string} name - Name of the icon (e.g., 'star', 'check', 'x', 'archive')
 * @param {string|number} size - Size: 'small' (12px), 'medium' (16px), 'large' (24px), or numeric (14, 16, 20, 24, 32, 40, 48)
 * @param {string} variant - Variant type: 'default', 'hover', 'active', 'disabled', 'filled', 'outlined'
 * @param {string} className - Additional CSS classes
 * @param {object} style - Inline styles
 * @param {string} alt - Alt text for accessibility
 */
const Icon = ({
  name,
  size = 'medium',
  variant = 'default',
  className = '',
  style = {},
  alt = '',
  ...props
}) => {
  // Normalize icon name (remove extension if provided)
  const normalizedName = name?.replace(/\.svg$/, '').toLowerCase();
  
  // Handle size - can be string ('small', 'medium', 'large') or number (14, 16, 20, etc.)
  const getSizeValue = () => {
    if (typeof size === 'number') {
      return `${size}px`;
    }
    const sizeMap = {
      small: '12px',
      medium: '16px',
      large: '24px',
    };
    return sizeMap[size] || sizeMap.medium;
  };

  const sizeValue = getSizeValue();
  
  // Build icon path - use single SVG file (not size-specific)
  const getIconPath = () => {
    // Check if variant-specific icon exists
    const variantPath = `/icons/variants/${normalizedName}/${variant}.svg`;
    // Fallback to base icon (single SVG file, scalable)
    const basePath = `/icons/${normalizedName}.svg`;
    
    // For now, use base path (variants can be added later)
    // In production, you could check if variant exists and use it
    return basePath;
  };

  const iconPath = getIconPath();
  const iconAlt = alt || `${normalizedName} icon`;

  const containerClassNames = [
    styles.icon,
    styles[`variant_${variant}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Combine inline styles with size
  const combinedStyle = {
    width: sizeValue,
    height: sizeValue,
    ...style,
  };

  return (
    <img
      src={iconPath}
      alt={iconAlt}
      className={containerClassNames}
      style={combinedStyle}
      {...props}
    />
  );
};

export default Icon;

