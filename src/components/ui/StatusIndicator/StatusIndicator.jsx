import React from 'react';
import styles from './StatusIndicator.module.css';

const StatusIndicator = ({
  label = 'Status',
  state = 'default',
  size = 'medium',
  color = 'green',
  onClick,
  className = '',
  ...props
}) => {
  // Normalize state
  const normalizeState = (stateName) => {
    if (!stateName) return 'default';
    const normalized = stateName.toLowerCase();
    if (normalized === 'hover') return 'hover';
    if (normalized === 'pressed') return 'pressed';
    if (normalized === 'active') return 'active';
    if (normalized === 'disabled') return 'disabled';
    return 'default';
  };

  // Normalize color
  const normalizeColor = (colorName) => {
    if (!colorName) return 'green';
    const normalized = colorName.toLowerCase();
    if (normalized === 'red') return 'red';
    if (normalized === 'yellow') return 'yellow';
    if (normalized === 'blue') return 'blue';
    return 'green';
  };

  const actualState = normalizeState(state);
  const actualColor = normalizeColor(color);
  const normalizedSize = size.toLowerCase();

  // Get indicator dot color
  const getIndicatorColor = () => {
    switch (actualColor) {
      case 'red':
        return 'var(--color-red-500)';
      case 'yellow':
        return 'var(--color-yellow-500)';
      case 'blue':
        return 'var(--color-violet-500)';
      case 'green':
      default:
        return 'var(--color-green-500)';
    }
  };

  // Get indicator dot
  const getIndicator = () => {
    const colorValue = getIndicatorColor();
    return (
      <div
        className={styles.indicator}
        style={{ backgroundColor: colorValue }}
      />
    );
  };

  const containerClassNames = [
    styles.statusIndicator,
    styles[`size_${normalizedSize}`],
    styles[`state_${actualState}`],
    styles[`color_${actualColor}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      className={containerClassNames}
      onClick={onClick}
      disabled={actualState === 'disabled'}
      type={onClick ? 'button' : undefined}
      {...props}
    >
      {getIndicator()}
      <span className={styles.label}>{label}</span>
    </Component>
  );
};

export default StatusIndicator;

