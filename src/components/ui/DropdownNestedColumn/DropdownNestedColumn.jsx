import React, { useState } from 'react';
import Chip from '../Chip/Chip';
import ItemRow from '../ItemRow/ItemRow';
import Icon from '../Icon/Icon';
import styles from './DropdownNestedColumn.module.css';

const DropdownNestedColumn = ({
  title = 'Title',
  expanded = true,
  chips = [],
  items = [],
  onClearAll,
  onChipRemove,
  onItemClick,
  className = '',
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const [searchQuery, setSearchQuery] = useState('');

  const containerClassNames = [
    styles.dropdownNestedColumn,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClearAll = (e) => {
    e.stopPropagation();
    if (onClearAll) {
      onClearAll();
    }
  };

  // Title and CTA section
  const titleAndCta = (
    <div className={styles.titleAndCta}>
      <p className={styles.titleText}>{title}</p>
      <button
        className={styles.clearAllButton}
        onClick={handleClearAll}
        type="button"
      >
        <p className={styles.clearAllText}>Clear all</p>
      </button>
    </div>
  );

  // Render chevron icon
  const renderChevron = () => {
    return (
      <div className={styles.chevronContainer}>
        <div
          className={styles.chevronIcon}
          style={{
            transform: isExpanded ? 'rotate(0deg)' : 'rotate(180deg)',
            transition: 'transform 0.2s ease'
          }}
        >
          <Icon name="CaretUp" size={16} />
        </div>
      </div>
    );
  };

  const filteredItems = items.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={containerClassNames} {...props}>
      <div className={styles.titleFrame}>
        {titleAndCta}
        <button
          className={styles.chevronButton}
          onClick={handleToggle}
          type="button"
        >
          {renderChevron()}
        </button>
      </div>

      {isExpanded && (
        <div className={styles.dropdownWithSearch}>
          <div className={styles.dropdownContent}>
            <div className={styles.chipListSection}>
              {chips.length > 0 ? (
                <div className={styles.chipGrid}>
                  {chips.slice(0, 5).map((chip) => (
                    <Chip
                      key={chip.id || chip.label}
                      label={chip.label}
                      showRightIcon={true}
                      showLeftIcon={false}
                      state="default"
                      size="medium"
                      onRemove={() => {
                        if (onChipRemove) {
                          onChipRemove(chip);
                        }
                      }}
                    />
                  ))}
                  {chips.length > 5 && (
                    <Chip
                      label={`+${chips.length - 5}`}
                      showRightIcon={false}
                      showLeftIcon={false}
                      state="default"
                      size="medium"
                      className={styles.moreChipsChip}
                    />
                  )}
                </div>
              ) : (
                <div className={styles.noChips}>No items selected</div>
              )}
            </div>

            <div className={styles.searchInputSection}>
              <div className={styles.searchInput}>
                <Icon name="MagnifyingGlass" size={16} className={styles.searchIcon} />
                <input
                  type="text"
                  className={styles.searchField}
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.itemsList}>
              <div className={styles.itemsContainer}>
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, index) => (
                    <ItemRow
                      key={item.id || index}
                      label={item.label}
                      showLeftIcon={false}
                      showRightIcon={false}
                      hasCheckbox={true}
                      hasRadio={false}
                      checked={item.checked || false}
                      type={item.type || 'Default'}
                      onClick={() => {
                        if (onItemClick) onItemClick(item);
                      }}
                    />
                  ))
                ) : (
                  <div className={styles.noItems}>No items found</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownNestedColumn;

