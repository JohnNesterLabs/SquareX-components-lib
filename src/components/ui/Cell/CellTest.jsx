import React, { useState } from 'react';
import Cell from './Cell';
import CellHeader from './CellHeader';
import styles from './CellTest.module.css';

const CellTest = () => {
    const [checkedCells, setCheckedCells] = useState({});
    const [sortOrders, setSortOrders] = useState({ col1: null, col2: 'asc' });

    const toggleCheckbox = (id) => {
        setCheckedCells(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleSort = (col) => {
        setSortOrders(prev => {
            const current = prev[col];
            let next = 'asc';
            if (current === 'asc') next = 'desc';
            else if (current === 'desc') next = null;
            return { ...prev, [col]: next };
        });
    };

    return (
        <div className={styles.testContainer}>
            <h2 className={styles.testTitle}>Cell & CellHeader Components</h2>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Cell Variants</h3>
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Standard Cells</h4>
                        <Cell label="Label" icon="Star" badge="99+" />
                        <Cell variant="avatar" label="Label" avatar="https://i.pravatar.cc/150?u=1" />
                        <Cell variant="status" label="Status" status="active" badge="99+" />
                        <Cell variant="social" label="Label" icon="Globe" />
                        <Cell variant="actions" actions={[
                            { icon: 'DotsThreeOutline', label: 'More' },
                            { icon: 'PencilSimple', label: 'Edit' },
                            { icon: 'Trash', label: 'Delete' },
                            { icon: 'Gear', label: 'Settings' },
                            { icon: 'ArrowsClockwise', label: 'Refresh' }
                        ]} />
                        <Cell variant="checkbox" label="Label" checked={checkedCells['c1']} onChange={() => toggleCheckbox('c1')} />
                        <Cell variant="toggle" checked={checkedCells['t1']} onChange={() => toggleCheckbox('t1')} />
                        <Cell variant="userCount" count={1} />
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Cell Headers</h4>
                        <CellHeader
                            label="Label"
                            sortable={true}
                            sortOrder={sortOrders.col1}
                            onSort={() => handleSort('col1')}
                        />
                        <CellHeader
                            label="Label"
                            hasCheckbox={true}
                            checked={checkedCells['h1']}
                            onCheckboxChange={() => toggleCheckbox('h1')}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Interactive Table Example</h3>
                <div className={styles.tablePreview}>
                    <div className={styles.tableHeaderRow}>
                        <CellHeader hasCheckbox={true} checked={checkedCells['all']} onCheckboxChange={() => toggleCheckbox('all')} className={styles.headerCell} />
                        <CellHeader label="User" sortable={true} sortOrder={sortOrders.user} onSort={() => handleSort('user')} className={styles.headerCell} />
                        <CellHeader label="Status" className={styles.headerCell} />
                        <CellHeader label="Actions" className={styles.headerCell} />
                    </div>
                    {[1, 2, 3].map(i => (
                        <div key={i} className={styles.tableRow}>
                            <Cell variant="checkbox" checked={checkedCells[`row${i}`]} onChange={() => toggleCheckbox(`row${i}`)} className={styles.bodyCell} />
                            <Cell variant="avatar" label={`User ${i}`} avatar={`https://i.pravatar.cc/150?u=${i}`} className={styles.bodyCell} />
                            <Cell variant="status" label={i % 2 === 0 ? 'Online' : 'Offline'} status={i % 2 === 0 ? 'online' : 'offline'} className={styles.bodyCell} />
                            <Cell variant="actions" actions={[
                                { icon: 'PencilSimple', label: 'Edit' },
                                { icon: 'Trash', label: 'Delete' }
                            ]} className={styles.bodyCell} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CellTest;
