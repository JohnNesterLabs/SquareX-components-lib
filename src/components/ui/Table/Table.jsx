import React, { useState, useMemo, createContext, useContext, useRef, useCallback } from 'react';
import { Table as AntTable, Checkbox } from 'antd';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Icon from '../Icon/Icon';
import styles from './Table.module.css';
import './Table.antd.css';

// Context to share sortable props
const SortableRowContext = createContext(null);

/**
 * Sortable Row Component
 */
const SortableRow = ({ children, id, rowKey, row }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <SortableRowContext.Provider value={{ attributes, listeners }}>
      <tr
        ref={setNodeRef}
        style={style}
        className={`${isDragging ? styles.rowDragging : ''}`}
      >
        {children}
      </tr>
    </SortableRowContext.Provider>
  );
};

/**
 * Drag Handle Cell Component
 */
const DragHandleCell = () => {
  const context = useContext(SortableRowContext);
  if (!context) return null;

  const { attributes, listeners } = context;

  return (
    <td className={styles.dragHandleCell}>
      <div className={styles.dragHandle} {...listeners} {...attributes}>
        <Icon name="DotsSixVertical" size={12} />
      </div>
    </td>
  );
};

/**
 * Column Resize Handle Component
 */
const ResizeHandle = ({ columnKey, onResizeStart, onResize, onResizeEnd }) => {
  const handleRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    
    const startX = e.clientX;
    const startWidth = handleRef.current?.parentElement?.offsetWidth || 0;

    const handleMouseMove = (moveEvent) => {
      const diff = moveEvent.clientX - startX;
      const newWidth = Math.max(50, startWidth + diff); // Minimum width of 50px
      if (onResize) {
        onResize(columnKey, newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      if (onResizeEnd) {
        onResizeEnd(columnKey);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };

    if (onResizeStart) {
      onResizeStart(columnKey);
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, [columnKey, onResize, onResizeStart, onResizeEnd]);

  return (
    <div
      ref={handleRef}
      className={`${styles.resizeHandle} ${isResizing ? styles.resizing : ''}`}
      onMouseDown={handleMouseDown}
      title="Drag to resize column"
    >
      <div className={styles.resizeHandleLine} />
    </div>
  );
};

/**
 * Table Component (Ant Design with Drag and Drop)
 * 
 * A feature-rich table component built on Ant Design with:
 * - Row selection with checkboxes
 * - Column sorting
 * - Drag and drop row reordering
 * - Fixed header with scrollable body
 * - Custom styling to match design system
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
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [sortedInfo, setSortedInfo] = useState({});
  const [items, setItems] = useState(data);
  const [columnWidths, setColumnWidths] = useState({});

  // Update items when data prop changes
  React.useEffect(() => {
    setItems(data);
  }, [data]);

  // Remove default Ant Design sort icons from the right side
  React.useEffect(() => {
    const removeRightSortIcons = () => {
      const tableContainer = document.querySelector(`.${styles.tableContainer}`);
      if (!tableContainer) return;

      // Find all sort icon elements on the right side
      const sortIcons = tableContainer.querySelectorAll(
        '.ant-table-column-sorter, .ant-table-column-sorter-full, .ant-table-column-sorter-inner'
      );
      
      sortIcons.forEach((icon) => {
        // Only remove if it's not our custom left icon
        const isLeftIcon = icon.closest(`.${styles.sortIconLeft}`);
        if (!isLeftIcon) {
          icon.style.display = 'none';
          icon.style.visibility = 'hidden';
          icon.style.opacity = '0';
          icon.style.width = '0';
          icon.style.height = '0';
          icon.style.margin = '0';
          icon.style.padding = '0';
        }
      });
    };

    // Remove immediately
    removeRightSortIcons();

    // Also remove after a short delay to catch any delayed renders
    const timeout = setTimeout(removeRightSortIcons, 100);

    // Use MutationObserver to catch dynamic additions
    const observer = new MutationObserver(removeRightSortIcons);
    const tableContainer = document.querySelector(`.${styles.tableContainer}`);
    if (tableContainer) {
      observer.observe(tableContainer, {
        childList: true,
        subtree: true,
        attributes: true,
      });
    }

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [items, columns, sortedInfo]);

  // Configure sensors for drag and drop
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Handle row selection
  const handleRowSelect = (selectedKeys) => {
    setSelectedRowKeys(selectedKeys);
    if (onRowSelect) {
      onRowSelect(selectedKeys);
    }
  };

  // Handle column sorting
  const handleTableChange = (pagination, filters, sorter) => {
    if (sorter && sorter.columnKey) {
      const direction = sorter.order === 'ascend' ? 'asc' : sorter.order === 'descend' ? 'desc' : null;
      setSortedInfo({
        order: sorter.order,
        columnKey: sorter.columnKey,
      });
      
      if (onSort) {
        onSort(sorter.columnKey, direction);
      }
    } else {
      setSortedInfo({});
      if (onSort) {
        onSort(null, null);
      }
    }
  };

  // Handle drag end
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item[rowKey] === active.id);
        const newIndex = items.findIndex((item) => item[rowKey] === over.id);

        const newItems = arrayMove(items, oldIndex, newIndex);

        // Call callback with new order
        if (onRowReorder) {
          onRowReorder(newItems);
        }

        return newItems;
      });
    }
  };

  // Handle column resize
  const handleColumnResize = useCallback((columnKey, newWidth) => {
    setColumnWidths((prev) => ({
      ...prev,
      [columnKey]: newWidth,
    }));
  }, []);

  const handleResizeStart = useCallback((columnKey) => {
    // Optional: Add any visual feedback on resize start
  }, []);

  const handleResizeEnd = useCallback((columnKey) => {
    // Optional: Add any cleanup or persistence logic
  }, []);

  // Custom sort icon renderer
  const renderSorterIcon = ({ sortOrder }) => {
    if (sortOrder === 'ascend') {
      return <Icon name="SortAscending" size={14} />;
    }
    if (sortOrder === 'descend') {
      return <Icon name="SortDescending" size={14} />;
    }
    // Unsorted state
    return <Icon name="CaretUpDown" size={14} />;
  };

  // Convert columns to Ant Design format
  const antdColumns = useMemo(() => {
    // Add drag handle column (after selection column)
    const dragHandleColumn = {
      title: '',
      key: 'drag-handle',
      width: 40,
      className: styles.dragHandleHeader,
      render: () => <DragHandleCell />,
      resizable: false,
    };

    const dataColumns = columns.map((column) => {
      // Get width from state or use default/column-defined width
      const columnWidth = columnWidths[column.key] || column.width || undefined;

      // Determine sort order for this column
      const sortOrder = column.sortable && sortedInfo.columnKey === column.key 
        ? sortedInfo.order 
        : null;

      // Render sort icon on the left
      const sortIcon = column.sortable ? (
        <span className={styles.sortIconLeft}>
          {renderSorterIcon({ sortOrder })}
        </span>
      ) : null;

      const columnConfig = {
        title: (
          <div className={styles.columnHeaderContent}>
            {sortIcon}
            <span className={styles.columnHeaderLabel}>{column.label}</span>
            <ResizeHandle
              columnKey={column.key}
              onResizeStart={handleResizeStart}
              onResize={handleColumnResize}
              onResizeEnd={handleResizeEnd}
            />
          </div>
        ),
        dataIndex: column.key,
        key: column.key,
        width: columnWidth,
        sorter: column.sortable ? true : false,
        render: column.render || ((text) => text),
        className: styles.tableCell,
        // Completely hide default sort icon since we're using custom one on left
        sorterIcon: () => null,
        showSorterTooltip: false,
      };

      // Add sorted state
      if (column.sortable && sortedInfo.columnKey === column.key) {
        columnConfig.sortOrder = sortedInfo.order;
      }

      return columnConfig;
    });

    return [dragHandleColumn, ...dataColumns];
  }, [columns, sortedInfo, columnWidths, handleColumnResize, handleResizeStart, handleResizeEnd]);

  // Add selection column
  const rowSelection = {
    selectedRowKeys,
    onChange: handleRowSelect,
    onSelectAll: (selected, selectedRows, changeRows) => {
      handleRowSelect(selected ? items.map((row) => row[rowKey]) : []);
    },
    columnTitle: (
      <div className={styles.checkboxHeader}>
        <Checkbox
          checked={selectedRowKeys.length === items.length && items.length > 0}
          indeterminate={
            selectedRowKeys.length > 0 && selectedRowKeys.length < items.length
          }
          onChange={(e) => {
            handleRowSelect(e.target.checked ? items.map((row) => row[rowKey]) : []);
          }}
        />
      </div>
    ),
    columnWidth: 48,
    fixed: 'left',
  };

  const containerClassNames = [
    styles.tableContainer,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Get row IDs for sortable context
  const rowIds = useMemo(() => items.map((item) => item[rowKey]), [items, rowKey]);

  // Custom row renderer for drag and drop
  const components = {
    body: {
      row: (props) => {
        // Extract row ID from props - Ant Design passes it in different ways
        let rowId = props['data-row-key'];
        
        // Fallback: try to get from record in children
        if (!rowId && props.children) {
          const childrenArray = React.Children.toArray(props.children);
          for (const child of childrenArray) {
            if (child?.props?.record?.[rowKey]) {
              rowId = child.props.record[rowKey];
              break;
            }
          }
        }

        // Another fallback: try to find in items by index
        if (!rowId && props['data-row-index'] !== undefined) {
          const index = props['data-row-index'];
          if (items[index] && items[index][rowKey]) {
            rowId = items[index][rowKey];
          }
        }

        if (!rowId) {
          // Last resort: return regular row
          return <tr {...props}>{props.children}</tr>;
        }

        return (
          <SortableRow id={rowId} rowKey={rowKey} row={props}>
            {props.children}
          </SortableRow>
        );
      },
    },
  };

  return (
    <div className={containerClassNames} {...props}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={rowIds}
          strategy={verticalListSortingStrategy}
        >
          <AntTable
            className={styles.antTable}
            columns={antdColumns}
            dataSource={items}
            rowKey={rowKey}
            rowSelection={rowSelection}
            onChange={handleTableChange}
            pagination={false}
            scroll={{ y: 600, x: 'max-content' }}
            size="middle"
            components={components}
          />
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default Table;
