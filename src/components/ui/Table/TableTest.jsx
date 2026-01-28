import React, { useState } from 'react';
import Table from './Table'; // Custom Table with drag-and-drop functionality
import { Toggle, Icon } from 'squarex-ui-component-lib';
import styles from './TableTest.module.css';

/**
 * TableTest Component
 * 
 * Test component to demonstrate all Table functionality:
 * - Drag and drop row reordering
 * - Column sorting
 * - Row selection (select all + individual)
 * - Fixed header with scrollable body
 */
const TableTest = () => {
  // Sample data matching the image design
  const [tableData, setTableData] = useState([
    {
      id: '1',
      priority: 1,
      policy: 'Block all malicious site visits',
      assignedTo: 1,
      action: true,
      status: true,
      createdAt: '14th December, 2025',
      lastEdited: '2 Days Ago',
    },
    {
      id: '2',
      priority: 2,
      policy: 'Block google site visits',
      assignedTo: 1,
      action: false,
      status: false,
      createdAt: '14th December, 2025',
      lastEdited: '2 Days Ago',
    },
    {
      id: '3',
      priority: 3,
      policy: 'Block Malicious websites',
      assignedTo: 1,
      action: false,
      status: false,
      createdAt: '14th December, 2025',
      lastEdited: '2 Days Ago',
    },
    {
      id: '4',
      priority: 4,
      policy: 'Isolate all Sites',
      assignedTo: 1,
      action: true,
      status: true,
      createdAt: '14th December, 2025',
      lastEdited: '2 Days Ago',
    },
    {
      id: '5',
      priority: 5,
      policy: 'Monitor all websites',
      assignedTo: 1,
      action: true,
      status: true,
      createdAt: '14th December, 2025',
      lastEdited: '2 Days Ago',
    },
    {
      id: '6',
      priority: 6,
      policy: 'Block all malicious site visits',
      assignedTo: 1,
      action: true,
      status: true,
      createdAt: '14th December, 2025',
      lastEdited: '2 Days Ago',
    },
    {
      id: '7',
      priority: 7,
      policy: 'Block google site visits',
      assignedTo: 1,
      action: false,
      status: false,
      createdAt: '14th December, 2025',
      lastEdited: '2 Days Ago',
    },
    {
      id: '8',
      priority: 8,
      policy: 'Block Malicious websites',
      assignedTo: 1,
      action: true,
      status: true,
      createdAt: '14th December, 2025',
      lastEdited: '2 Days Ago',
    },
    {
      id: '9',
      priority: 9,
      policy: 'Isolate all Sites',
      assignedTo: 1,
      action: true,
      status: true,
      createdAt: '14th December, 2025',
      lastEdited: '2 Days Ago',
    },
    {
      id: '10',
      priority: 10,
      policy: 'Monitor all websites',
      assignedTo: 1,
      action: true,
      status: true,
      createdAt: '14th December, 2025',
      lastEdited: '2 Days Ago',
    },
    {
      id: '11',
      priority: 11,
      policy: 'Block all malicious site visits',
      assignedTo: 1,
      action: true,
      status: true,
      createdAt: '14th December, 2025',
      lastEdited: '2 Days Ago',
    },
    {
      id: '12',
      priority: 12,
      policy: 'Block google site visits',
      assignedTo: 1,
      action: true,
      status: true,
      createdAt: '14th December, 2025',
      lastEdited: '2 Days Ago',
    },
    {
      id: '13',
      priority: 13,
      policy: 'Block Malicious websites',
      assignedTo: 1,
      action: true,
      status: true,
      createdAt: '14th December, 2025',
      lastEdited: '2 Days Ago',
    },
    {
      id: '14',
      priority: 14,
      policy: 'Isolate all Sites',
      assignedTo: 1,
      action: true,
      status: true,
      createdAt: '14th December, 2025',
      lastEdited: '2 Days Ago',
    },
    {
      id: '15',
      priority: 15,
      policy: 'Monitor all websites',
      assignedTo: 1,
      action: true,
      status: true,
      createdAt: '14th December, 2025',
      lastEdited: '2 Days Ago',
    },
  ]);

  const [selectedRows, setSelectedRows] = useState([]);

  // Handle row reorder
  const handleRowReorder = (newData) => {
    setTableData(newData);
    console.log('Rows reordered:', newData);
  };

  // Handle row selection
  const handleRowSelect = (selectedIds) => {
    setSelectedRows(selectedIds);
    console.log('Selected rows:', selectedIds);
  };

  // Handle column sort
  const handleSort = (columnKey, direction) => {
    console.log('Sorting by:', columnKey, direction);
    
    if (!direction) {
      // Reset to original order (you might want to store original order)
      return;
    }

    const sortedData = [...tableData].sort((a, b) => {
      let aVal = a[columnKey];
      let bVal = b[columnKey];

      // Handle different data types
      if (typeof aVal === 'string') {
        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
      }

      if (aVal < bVal) return direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setTableData(sortedData);
  };

  // Handle action toggle
  const handleActionToggle = (rowId, checked) => {
    setTableData((prevData) =>
      prevData.map((row) =>
        row.id === rowId ? { ...row, action: checked } : row
      )
    );
  };

  // Render assigned to cell with person icon using Icon component
  const renderAssignedTo = (value) => {
    return (
      <div className={styles.assignedToCell}>
        <Icon name="User" size={16} className={styles.personIcon} />
        <span>{value}</span>
      </div>
    );
  };

  // Render action cell with toggle only (no text)
  const renderAction = (value, row) => {
    return (
      <div className={styles.actionCell}>
        <Toggle
          checked={value}
          onChange={(e) => handleActionToggle(row.id, e.target.checked)}
          size="small"
        />
      </div>
    );
  };

  // Render status cell with badge-style tag containing colored dot and text
  const renderStatus = (value, row) => {
    return (
      <div className={styles.statusCell}>
        <div className={styles.statusTag}>
          <div 
            className={value ? styles.statusDotActive : styles.statusDotInactive}
          />
          <span className={styles.statusText}>
            {value ? 'Active' : 'Inactive'}
          </span>
        </div>
      </div>
    );
  };

  // Column definitions - matching image order
  const columns = [
    {
      key: 'priority',
      label: 'Priority',
      sortable: true,
    },
    {
      key: 'policy',
      label: 'Policy Name',
      sortable: true,
    },
    {
      key: 'assignedTo',
      label: 'Assigned To',
      sortable: true,
      render: (value) => renderAssignedTo(value),
    },
    {
      key: 'action',
      label: 'Action',
      sortable: false,
      align: 'left',
      render: (value, row) => renderAction(value, row),
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (value, row) => renderStatus(value, row),
    },
    {
      key: 'createdAt',
      label: 'Created At',
      sortable: true,
    },
    {
      key: 'lastEdited',
      label: 'Last Edited',
      sortable: true,
    },
  ];

  return (
    <div className={styles.tableTestContainer}>
      <div className={styles.tableTestHeader}>
        <div className={styles.tableTestInfo}>
          <p>
            <strong>Features:</strong> Drag rows to reorder • Click column headers to sort • Use checkboxes to select rows
          </p>
          <p>
            <strong>Selected:</strong> {selectedRows.length} of {tableData.length} rows
          </p>
        </div>
      </div>
      
      <Table
        columns={columns}
        data={tableData}
        rowKey="id"
        onRowReorder={handleRowReorder}
        onRowSelect={handleRowSelect}
        onSort={handleSort}
      />
      {/* <PolicyTable /> */}
    </div>
  );
};

export default TableTest;

