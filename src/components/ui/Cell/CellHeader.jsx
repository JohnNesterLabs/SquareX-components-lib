import React from 'react';
import styles from './CellHeader.module.css';
import Icon from '../Icon/Icon';
import Checkbox from '../Checkbox/Checkbox';

const CellHeader = ({
    label = '',
    sortable = false,
    sortOrder = null, // 'asc', 'desc', null
    hasCheckbox = false,
    checked = false,
    onSort,
    onCheckboxChange,
    className = '',
    ...props
}) => {
    return (
        <div
            className={`${styles.cellHeader} ${sortable ? styles.sortable : ''} ${className}`}
            onClick={sortable ? onSort : undefined}
            {...props}
        >
            <div className={styles.content}>
                {hasCheckbox && (
                    <div className={styles.checkboxWrapper} onClick={(e) => e.stopPropagation()}>
                        <Checkbox checked={checked} onChange={onCheckboxChange} size="small" />
                    </div>
                )}

                {sortable && (
                    <div className={styles.sortIcon}>
                        <Icon
                            name={sortOrder === 'asc' ? 'SortAscending' : sortOrder === 'desc' ? 'SortDescending' : 'CaretUpDown'}
                            size={14}
                        />
                    </div>
                )}

                <span className={styles.label}>{label}</span>
            </div>
        </div>
    );
};

export default CellHeader;
