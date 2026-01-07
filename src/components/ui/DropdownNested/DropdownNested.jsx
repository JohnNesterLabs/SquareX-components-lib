import React from 'react';
import DropdownNestedColumn from '../DropdownNestedColumn/DropdownNestedColumn';
import Button from '../Button/Button';
import ButtonDanger from '../ButtonDanger/ButtonDanger';
import styles from './DropdownNested.module.css';

const DropdownNested = ({
  leftColumn = {
    title: 'Select a Member',
    chips: [],
    items: [],
  },
  rightColumn = {
    title: 'Select a Group',
    chips: [],
    items: [],
  },
  onLeftClearAll,
  onRightClearAll,
  onLeftChipRemove,
  onRightChipRemove,
  onLeftItemClick,
  onRightItemClick,
  onCancel,
  onApply,
  className = '',
  ...props
}) => {
  const leftChips = leftColumn.chips;
  const rightChips = rightColumn.chips;
  const leftItems = leftColumn.items;
  const rightItems = rightColumn.items;

  const containerClassNames = [
    styles.dropdownNested,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClassNames} {...props}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <DropdownNestedColumn
            title={leftColumn.title}
            expanded={true}
            chips={leftChips}
            items={leftItems}
            onClearAll={onLeftClearAll}
            onChipRemove={onLeftChipRemove}
            onItemClick={onLeftItemClick}
          />
        </div>
        <div className={styles.column}>
          <DropdownNestedColumn
            title={rightColumn.title}
            expanded={true}
            chips={rightChips}
            items={rightItems}
            onClearAll={onRightClearAll}
            onChipRemove={onRightChipRemove}
            onItemClick={onRightItemClick}
          />
        </div>
      </div>
      <div className={styles.ctas}>
        <ButtonDanger
          label="Cancel"
          style="neutral"
          size="medium"
          showLeadingIcon={false}
          onClick={onCancel}
          className={styles.cancelButton}
        />
        <Button
          label="Apply"
          style="primary"
          size="medium"
          showLeadingIcon={false}
          onClick={onApply}
          className={styles.applyButton}
        />
      </div>
    </div>
  );
};

export default DropdownNested;

