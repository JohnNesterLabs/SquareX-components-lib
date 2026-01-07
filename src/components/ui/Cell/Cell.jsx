import React from 'react';
import styles from './Cell.module.css';
import Icon from '../Icon/Icon';
import Checkbox from '../Checkbox/Checkbox';
import Toggle from '../Toggle/Toggle';

const Cell = ({
    variant = 'default',
    label = '',
    icon = null,
    badge = null,
    avatar = null,
    status = null,
    checked = false,
    onChange,
    count = null,
    actions = [],
    className = '',
    ...props
}) => {
    const renderContent = () => {
        switch (variant) {
            case 'avatar':
                return (
                    <div className={styles.avatarContent}>
                        {avatar ? (
                            <img src={avatar} alt={label} className={styles.avatar} />
                        ) : (
                            <div className={styles.avatarPlaceholder}>
                                <Icon name="User" size={16} />
                            </div>
                        )}
                        <span className={styles.label}>{label}</span>
                    </div>
                );
            case 'status':
                return (
                    <div className={styles.statusContent}>
                        <div className={`${styles.statusDot} ${styles[`status_${status?.toLowerCase()}`]}`} />
                        <span className={styles.label}>{label}</span>
                        {badge && <span className={styles.badge}>{badge}</span>}
                    </div>
                );
            case 'social':
                return (
                    <div className={styles.socialContent}>
                        {icon && <Icon name={icon} size={16} className={styles.socialIcon} />}
                        <span className={styles.label}>{label}</span>
                    </div>
                );
            case 'actions':
                return (
                    <div className={styles.actionsContent}>
                        {actions.map((action, index) => (
                            <button
                                key={index}
                                className={styles.actionButton}
                                onClick={action.onClick}
                                title={action.label}
                            >
                                <Icon name={action.icon} size={14} />
                            </button>
                        ))}
                    </div>
                );
            case 'checkbox':
                return (
                    <div className={styles.checkboxContent}>
                        <Checkbox checked={checked} onChange={onChange} size="small" />
                        <span className={styles.label}>{label}</span>
                    </div>
                );
            case 'toggle':
                return (
                    <div className={styles.toggleContent}>
                        <Toggle checked={checked} onChange={onChange} size="small" />
                    </div>
                );
            case 'userCount':
                return (
                    <div className={styles.userCountContent}>
                        <div className={styles.userIconWrapper}>
                            <Icon name="User" size={14} />
                            <span className={styles.count}>{count}</span>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className={styles.defaultContent}>
                        {icon && <Icon name={icon} size={16} className={styles.leadingIcon} />}
                        <span className={styles.label}>{label}</span>
                        {badge && <span className={styles.badge}>{badge}</span>}
                        <Icon name="Globe" size={14} className={styles.trailingIcon} />
                    </div>
                );
        }
    };

    return (
        <div className={`${styles.cell} ${styles[`variant_${variant}`]} ${className}`} {...props}>
            {renderContent()}
        </div>
    );
};

export default Cell;
