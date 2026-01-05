import React, { useState } from 'react';
import Categories from './Categories';
import styles from './CategoriesTest.module.css';

const MOCK_CATEGORIES = [
    {
        title: 'Development',
        items: [
            { id: 'd1', label: 'Frontend', type: 'default' },
            { id: 'd2', label: 'Backend', type: 'default' },
            { id: 'd3', label: 'DevOps', type: 'default' },
        ],
    },
    {
        title: 'Design',
        items: [
            { id: 'g1', label: 'UI Design', type: 'default' },
            { id: 'g2', label: 'UX Research', type: 'default' },
            { id: 'g3', label: 'Graphic Design', type: 'default' },
        ],
    },
    {
        title: 'Marketing',
        items: [
            { id: 'm1', label: 'SEO', type: 'default' },
            { id: 'm2', label: 'Content', type: 'default' },
            { id: 'm3', label: 'Email', type: 'default' },
        ],
    },
];

const CategoriesTest = () => {
    const [singleSelectionData, setSingleSelectionData] = useState(MOCK_CATEGORIES);
    const [singleChips, setSingleChips] = useState([]);

    const handleSingleItemClick = (item, categoryIndex) => {
        // Toggle selection for single select demo
        const newData = [...singleSelectionData];
        // Uncheck all others in this category (or globally if strict single)
        // For this demo, let's assume single select per category for simplicity or just toggle
        newData[categoryIndex].items = newData[categoryIndex].items.map(i => ({
            ...i,
            checked: i.id === item.id ? !i.checked : false
        }));
        setSingleSelectionData(newData);

        // Update chips
        if (!item.checked) { // If we just checked it
            setSingleChips([{ label: item.label, id: item.id }]);
        } else {
            setSingleChips([]);
        }
    };

    const handleChipRemove = (chip) => {
        setSingleChips(singleChips.filter(c => c.id !== chip.id));
        // Also uncheck the item
        const newData = [...singleSelectionData];
        newData.forEach(cat => {
            cat.items.forEach(item => {
                if (item.label === chip.label) item.checked = false;
            });
        });
        setSingleSelectionData(newData);
    };

    // Multi Selection Logic
    const [multiSelectionData, setMultiSelectionData] = useState(JSON.parse(JSON.stringify(MOCK_CATEGORIES)));
    const [multiChips, setMultiChips] = useState([]);

    const handleMultiItemClick = (item, categoryIndex) => {
        const newData = [...multiSelectionData];
        // Toggle the clicked item
        newData[categoryIndex].items = newData[categoryIndex].items.map(i => ({
            ...i,
            checked: i.id === item.id ? !i.checked : i.checked
        }));
        setMultiSelectionData(newData);

        // Update chips based on all checked items across all categories
        const newChips = [];
        newData.forEach(cat => {
            cat.items.forEach(i => {
                if (i.checked) {
                    newChips.push({ label: i.label, id: i.id });
                }
            });
        });
        setMultiChips(newChips);
    };

    const handleMultiChipRemove = (chip) => {
        // Uncheck the item
        const newData = [...multiSelectionData];
        newData.forEach(cat => {
            cat.items.forEach(item => {
                if (item.id === chip.id) item.checked = false;
            });
        });
        setMultiSelectionData(newData);

        // Update chips
        setMultiChips(multiChips.filter(c => c.id !== chip.id));
    };

    return (
        <div className={styles.testContainer}>
            <h2 className={styles.testTitle}>Categories Component Test</h2>

            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Interactive Demo</h3>
                <div className={styles.demoContainer}>

                    <div className={styles.demoWrapper}>
                        <p className={styles.demoLabel}>Single Selection</p>
                        <Categories
                            categories={singleSelectionData}
                            chips={singleChips}
                            onItemClick={handleSingleItemClick}
                            onChipRemove={handleChipRemove}
                            onCancel={() => console.log('Cancel clicked')}
                            onApply={() => console.log('Apply clicked')}
                        />
                        <div className={styles.stateDisplay}>
                            <p className={styles.stateTitle}>Selected Chips:</p>
                            <div className={styles.jsonDisplay}>
                                {JSON.stringify(singleChips, null, 2)}
                            </div>
                        </div>
                    </div>

                    <div className={styles.demoWrapper}>
                        <p className={styles.demoLabel}>Multi Selection</p>
                        <Categories
                            variant="multiple"
                            categories={multiSelectionData}
                            chips={multiChips}
                            onItemClick={handleMultiItemClick}
                            onChipRemove={handleMultiChipRemove}
                            onCancel={() => console.log('Cancel clicked')}
                            onApply={() => console.log('Apply clicked')}
                        />
                        <div className={styles.stateDisplay}>
                            <p className={styles.stateTitle}>Selected Chips:</p>
                            <div className={styles.jsonDisplay}>
                                {JSON.stringify(multiChips, null, 2)}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CategoriesTest;
