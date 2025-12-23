import React, { useState } from 'react';
import Table from './Table';
import Toggle from '../Toggle/Toggle';
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
  // Sample data matching the Figma design
  const [tableData, setTableData] = useState([
    {
      id: '1',
      policy: '[SAMPLE] Block Malicious Websites',
      priority: 26,
      assignedTo: 1,
      status: false,
      createdAt: '11th Dec 2025 10:44 AM',
      lastEdited: '7 days ago',
    },
    {
      id: '2',
      policy: 'Block Google Site Visit',
      priority: 2,
      assignedTo: 2,
      status: false,
      createdAt: '3rd Dec 2025 03:54 PM',
      lastEdited: '19 days ago',
    },
    {
      id: '3',
      policy: 'TC_02',
      priority: 25,
      assignedTo: 1,
      status: false,
      createdAt: '2nd Dec 2025 03:48 PM',
      lastEdited: '20 days ago',
    },
    {
      id: '4',
      policy: 'KAran_block',
      priority: 3,
      assignedTo: 1,
      status: false,
      createdAt: '2nd Dec 2025 03:45 PM',
      lastEdited: '20 days ago',
    },
    {
      id: '5',
      policy: 'Block Social Media and Gen AI Sites',
      priority: 6,
      assignedTo: 1,
      status: false,
      createdAt: '2nd Dec 2025 03:43 PM',
      lastEdited: '20 days ago',
    },
    {
      id: '6',
      policy: 'SiteVisit_Karan_Edge',
      priority: 24,
      assignedTo: 1,
      status: false,
      createdAt: '2nd Dec 2025 03:33 PM',
      lastEdited: '20 days ago',
    },
    {
      id: '7',
      policy: 'Isolate All Sites',
      priority: 8,
      assignedTo: 1,
      status: false,
      createdAt: '1st Dec 2025 05:28 PM',
      lastEdited: '20 days ago',
    },
    {
      id: '8',
      policy: 'Block site visit',
      priority: 1,
      assignedTo: 1,
      status: false,
      createdAt: '1st Dec 2025 05:13 PM',
      lastEdited: '13 days ago',
    },
    {
      id: '9',
      policy: 'Monitor WHOIS Properties',
      priority: 9,
      assignedTo: 1,
      status: false,
      createdAt: '1st Dec 2025 05:10 PM',
      lastEdited: '21 days ago',
    },
    {
      id: '10',
      policy: 'Block Malicious Websites',
      priority: 7,
      assignedTo: 2,
      status: true,
      createdAt: '25th Nov 2025 10:00 AM',
      lastEdited: '18 days ago',
    },
    {
      id: '11',
      policy: 'Monitor All Site Visit Proper',
      priority: 4,
      assignedTo: 1,
      status: true,
      createdAt: '1st Dec 2025 05:00 PM',
      lastEdited: '20 days ago',
    },
    {
      id: '12',
      policy: 'Block Sites Violating Respoi',
      priority: 5,
      assignedTo: 1,
      status: true,
      createdAt: '24th Nov 2025 02:30 PM',
      lastEdited: '7 days ago',
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

  // Handle status toggle
  const handleStatusToggle = (rowId, checked) => {
    setTableData((prevData) =>
      prevData.map((row) =>
        row.id === rowId ? { ...row, status: checked } : row
      )
    );
  };

  // Render assigned to cell with person icon
  const renderAssignedTo = (value) => {
    return (
      <div className={styles.assignedToCell}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.personIcon}
        >
          <path
            d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z"
            fill="currentColor"
          />
          <path
            d="M8 10C4.68629 10 2 12.6863 2 16H14C14 12.6863 11.3137 10 8 10Z"
            fill="currentColor"
          />
        </svg>
        <span>{value}</span>
      </div>
    );
  };

  // Render status cell with toggle
  const renderStatus = (value, row) => {
    return (
      <div className={styles.statusCell}>
        <Toggle
          checked={value}
          onChange={(e) => handleStatusToggle(row.id, e.target.checked)}
          size="small"
        />
        <span className={value ? styles.statusActive : styles.statusInactive}>
          {value ? 'ACTIVE' : 'INACTIVE'}
        </span>
      </div>
    );
  };

  // Column definitions
  const columns = [
    {
      key: 'policy',
      label: 'Policy',
      sortable: true,
    },
    {
      key: 'priority',
      label: 'Priority',
      sortable: true,
    },
    {
      key: 'assignedTo',
      label: 'Assigned to',
      sortable: true,
      render: (value) => renderAssignedTo(value),
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (value, row) => renderStatus(value, row),
    },
    {
      key: 'createdAt',
      label: 'Created at',
      sortable: true,
    },
    {
      key: 'lastEdited',
      label: 'Last edited',
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
    </div>
  );
};

export default TableTest;

