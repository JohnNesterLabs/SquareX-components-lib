import React, { useState } from 'react';
import styles from './Categories.module.css';
import ItemRow from '../ItemRow/ItemRow';

const Categories = ({
  variant = 'single', // 'single' (Categories=1) or 'multiple' (Categories=2)
  chips = [],
  categories = [],
  onChipRemove,
  onCategoryToggle,
  onItemClick,
  onCancel,
  onApply,
  cancelLabel = 'Cancel',
  applyLabel = 'Apply',
  className = '',
  ...props
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState(
    categories.reduce((acc, cat, index) => {
      acc[index] = cat.expanded !== undefined ? cat.expanded : true;
      return acc;
    }, {})
  );

  const handleCategoryToggle = (index) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
    if (onCategoryToggle) {
      onCategoryToggle(index, !expandedCategories[index]);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCategories = React.useMemo(() => {
    if (!searchQuery) return categories;
    const lowerQuery = searchQuery.toLowerCase();

    return categories
      .map((cat) => {
        const titleMatches = (cat.title || '').toLowerCase().includes(lowerQuery);
        // If title matches, return the whole category
        if (titleMatches) return cat;

        // Otherwise filter items
        const matchingItems = (cat.items || []).filter((item) =>
          (item.label || '').toLowerCase().includes(lowerQuery)
        );

        if (matchingItems.length > 0) {
          return { ...cat, items: matchingItems };
        }
        return null;
      })
      .filter(Boolean);
  }, [categories, searchQuery]);

  // Auto-expand when searching
  React.useEffect(() => {
    if (searchQuery) {
      const allExpanded = filteredCategories.reduce((acc, _, index) => {
        acc[index] = true;
        return acc;
      }, {});
      setExpandedCategories(allExpanded);
    }
  }, [searchQuery, filteredCategories.length]); // Depend on length to avoid deep dependency issues, though ideally should be smarter

  const getSearchIcon = () => {
    return (
      <div className={styles.searchIcon}>
        <img src="/icons/search.svg" alt="Search" className={styles.searchIconImage} />
      </div>
    );
  };

  const renderChipList = () => {
    if (!chips || chips.length === 0) return null;

    const maxVisibleChips = 5;
    const visibleChips = chips.slice(0, maxVisibleChips);
    const remainingCount = chips.length - maxVisibleChips;

    // Create a list of items to render (chips + optional "more" indicator)
    const itemsToRender = [...visibleChips];
    if (remainingCount > 0) {
      itemsToRender.push({ isMore: true, label: `+${remainingCount}` });
    }

    // Split items into rows (3 per row)
    const rows = [];
    for (let i = 0; i < itemsToRender.length; i += 3) {
      rows.push(itemsToRender.slice(i, i + 3));
    }

    return (
      <div className={styles.chipListContainer}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.chipListRow}>
            {row.map((item, itemIndex) => (
              <div key={itemIndex} className={styles.chip}>
                <p className={styles.chipLabel}>{item.label || 'Label'}</p>
                {!item.isMore && (
                  <button
                    type="button"
                    className={styles.chipRemove}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onChipRemove) {
                        onChipRemove(item);
                      }
                    }}
                    aria-label="Remove chip"
                  >
                    <img src="/icons/X.svg" alt="Remove" className={styles.chipIcon} />
                  </button>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const renderCategoryList = (category, categoryIndex) => {
    // If searching, always expand, otherwise use state
    const isExpanded = searchQuery ? true : (expandedCategories[categoryIndex] !== false);

    return (
      <div key={categoryIndex} className={styles.categoryList}>
        <button
          type="button"
          className={styles.categoryTitle}
          onClick={() => handleCategoryToggle(categoryIndex)}
        >
          <p className={styles.categoryTitleText}>{category.title || 'Category'}</p>
          <div className={styles.chevronIcon}>
            <img
              src="/icons/chevron.svg"
              alt={isExpanded ? 'Collapse' : 'Expand'}
              className={`${styles.chevronImg} ${isExpanded ? styles.chevronUp : ''}`}
            />
          </div>
        </button>
        {isExpanded && (
          <div className={styles.categoryItems}>
            {(category.items || []).map((item, itemIndex) => (
              <div key={item.id || itemIndex} className={styles.categoryItemWrapper}>
                <ItemRow
                  label={item.label || 'Item'}
                  showLeftIcon={true}
                  showRightIcon={false}
                  hasCheckbox={variant === 'multiple'}
                  hasRadio={variant !== 'multiple'}
                  checked={item.checked || false}
                  type={item.type || 'default'}
                  onClick={() => {
                    if (onItemClick) {
                      onItemClick(item, categoryIndex);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const containerClassNames = [
    styles.container,
    styles[`variant_${variant}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClassNames} {...props}>
      <div className={styles.searchSection}>
        <div className={styles.searchInput}>
          {getSearchIcon()}
          <input
            type="text"
            className={styles.realSearchInput}
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        {renderChipList()}
      </div>

      <div className={styles.listsContainer}>
        {filteredCategories.map((category, index) => renderCategoryList(category, index))}
      </div>

      <div className={styles.actionsContainer}>
        <button
          type="button"
          className={styles.cancelButton}
          onClick={onCancel}
        >
          <p className={styles.cancelButtonText}>{cancelLabel}</p>
        </button>
        <button
          type="button"
          className={styles.applyButton}
          onClick={onApply}
        >
          <p className={styles.applyButtonText}>{applyLabel}</p>
        </button>
      </div>
    </div>
  );
};

export default Categories;

