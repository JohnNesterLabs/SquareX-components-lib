import React, { useState, useRef, useCallback, useEffect } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import Icon from '../Icon/Icon';
import styles from './Table.module.css';

/**
 * Table Component
 * 
 * A feature-rich table component with:
 * - Drag and drop row reordering
 * - Fixed header with scrollable body
 * - Column sorting
 * - Select all checkbox
 * - Individual row checkboxes
 * 
 * @param {Array} columns - Array of column definitions: { key, label, sortable, render }
 * @param {Array} data - Array of row data objects
 * @param {string} rowKey - Key to use as unique identifier for rows (default: 'id')
 * @param {function} onRowReorder - Callback when rows are reordered: (newData) => {}
 * @param {function} onRowSelect - Callback when row selection changes: (selectedRows) => {}
 * @param {function} onSort - Callback when column is sorted: (columnKey, direction) => {}
 * @param {string} className - Additional CSS classes
 * @param {object} ...props - Additional props
 */
const Table = ({
  columns = [],
  data = [],
  rowKey = 'id',
  onRowReorder,
  onRowSelect,
  onSort,
  className = '',
  ...props
}) => {
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [draggedRowIndex, setDraggedRowIndex] = useState(null);
  const [dragOverRowIndex, setDragOverRowIndex] = useState(null);
  const dragStartY = useRef(null);
  const selectAllCheckboxRef = useRef(null);

  // Handle select all checkbox
  const handleSelectAll = useCallback((checked) => {
    if (checked) {
      const allRowIds = new Set(data.map((row) => row[rowKey]));
      setSelectedRows(allRowIds);
      if (onRowSelect) {
        onRowSelect(Array.from(allRowIds));
      }
    } else {
      setSelectedRows(new Set());
      if (onRowSelect) {
        onRowSelect([]);
      }
    }
  }, [data, rowKey, onRowSelect]);

  // Handle individual row checkbox
  const handleRowSelect = useCallback((rowId, checked) => {
    const newSelected = new Set(selectedRows);
    if (checked) {
      newSelected.add(rowId);
    } else {
      newSelected.delete(rowId);
    }
    setSelectedRows(newSelected);
    if (onRowSelect) {
      onRowSelect(Array.from(newSelected));
    }
  }, [selectedRows, onRowSelect]);

  // Check if all rows are selected
  const isAllSelected = data.length > 0 && selectedRows.size === data.length;
  const isIndeterminate = selectedRows.size > 0 && selectedRows.size < data.length;

  // Set indeterminate state on select all checkbox
  useEffect(() => {
    if (selectAllCheckboxRef.current) {
      const input = selectAllCheckboxRef.current.querySelector('input[type="checkbox"]');
      if (input) {
        input.indeterminate = isIndeterminate;
      }
    }
  }, [isIndeterminate]);

  // Handle column sorting
  const handleSort = useCallback((columnKey) => {
    const column = columns.find((col) => col.key === columnKey);
    if (!column || !column.sortable) return;

    let newDirection = 'asc';
    if (sortConfig.key === columnKey && sortConfig.direction === 'asc') {
      newDirection = 'desc';
    } else if (sortConfig.key === columnKey && sortConfig.direction === 'desc') {
      newDirection = null;
    }

    const newSortConfig = newDirection
      ? { key: columnKey, direction: newDirection }
      : { key: null, direction: null };

    setSortConfig(newSortConfig);

    if (onSort) {
      onSort(columnKey, newDirection);
    }
  }, [columns, sortConfig, onSort]);

  // Drag and drop handlers
  const handleDragStart = useCallback((e, index) => {
    setDraggedRowIndex(index);
    dragStartY.current = e.clientY;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', '');
    
    // Add visual feedback
    e.currentTarget.style.opacity = '0.5';
  }, []);

  const handleDragEnd = useCallback((e) => {
    e.currentTarget.style.opacity = '';
    setDraggedRowIndex(null);
    setDragOverRowIndex(null);
    dragStartY.current = null;
  }, []);

  const handleDragOver = useCallback((e, index) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    
    if (draggedRowIndex !== null && draggedRowIndex !== index) {
      setDragOverRowIndex(index);
    }
  }, [draggedRowIndex]);

  const handleDragLeave = useCallback(() => {
    setDragOverRowIndex(null);
  }, []);

  const handleDrop = useCallback((e, dropIndex) => {
    e.preventDefault();
    
    if (draggedRowIndex === null || draggedRowIndex === dropIndex) {
      setDraggedRowIndex(null);
      setDragOverRowIndex(null);
      return;
    }

    // Reorder data
    const newData = [...data];
    const [draggedItem] = newData.splice(draggedRowIndex, 1);
    newData.splice(dropIndex, 0, draggedItem);

    // Update selected rows to maintain selection
    const newSelectedRows = new Set(selectedRows);
    setSelectedRows(newSelectedRows);

    // Call callback
    if (onRowReorder) {
      onRowReorder(newData);
    }

    setDraggedRowIndex(null);
    setDragOverRowIndex(null);
  }, [data, draggedRowIndex, selectedRows, onRowReorder]);

  // Render sort icon using Icon component
  const renderSortIcon = (columnKey) => {
    if (sortConfig.key !== columnKey) {
      // Unsorted state - show CaretUpDown icon
      return (
        <span className={styles.sortIcon}>
          <Icon name="CaretUpDown" size={14} />
        </span>
      );
    }

    if (sortConfig.direction === 'asc') {
      // Ascending sort - show SortAscending icon
      return (
        <span className={styles.sortIcon}>
          <Icon name="SortAscending" size={14} />
        </span>
      );
    }

    if (sortConfig.direction === 'desc') {
      // Descending sort - show SortDescending icon
      return (
        <span className={styles.sortIcon}>
          <Icon name="SortDescending" size={14} />
        </span>
      );
    }

    return null;
  };

  const containerClassNames = [
    styles.tableContainer,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClassNames} {...props}>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              {/* Select all checkbox column */}
              <th className={styles.thCheckbox}>
                <div ref={selectAllCheckboxRef}>
                  <Checkbox
                    checked={isAllSelected}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    size="small"
                  />
                </div>
              </th>
              
              {/* Drag handle column */}
              <th className={styles.thDragHandle}></th>
              
              {/* Data columns */}
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`${styles.th} ${column.sortable ? styles.thSortable : ''}`}
                  onClick={() => column.sortable && handleSort(column.key)}
                  style={{ cursor: column.sortable ? 'pointer' : 'default' }}
                >
                  <div className={styles.thContent}>
                    {column.sortable && renderSortIcon(column.key)}
                    <span>{column.label}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {data.map((row, index) => {
              const rowId = row[rowKey];
              const isSelected = selectedRows.has(rowId);
              const isDragged = draggedRowIndex === index;
              const isDragOver = dragOverRowIndex === index;

              return (
                <tr
                  key={rowId}
                  className={`
                    ${styles.tr}
                    ${isSelected ? styles.trSelected : ''}
                    ${isDragged ? styles.trDragging : ''}
                    ${isDragOver ? styles.trDragOver : ''}
                  `}
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragEnd={handleDragEnd}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, index)}
                >
                  {/* Checkbox cell */}
                  <td className={styles.tdCheckbox}>
                    <Checkbox
                      checked={isSelected}
                      onChange={(e) => handleRowSelect(rowId, e.target.checked)}
                      size="small"
                    />
                  </td>
                  
                  {/* Drag handle cell */}
                  <td className={styles.tdDragHandle}>
                    <div className={styles.dragHandle}>
                      <Icon name="DotsSixVertical" size={12} />
                    </div>
                  </td>
                  
                  {/* Data cells */}
                  {columns.map((column) => (
                    <td key={column.key} className={styles.td}>
                      {column.render
                        ? column.render(row[column.key], row, index)
                        : row[column.key]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

