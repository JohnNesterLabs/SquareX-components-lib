import React, { useState } from 'react';
import { ItemRow, Icon } from 'squarex-ui-component-lib';
import styles from './ItemRowTest.module.css';

const ItemRowTest = () => {
    const [checkedItems, setCheckedItems] = useState({
        checkbox1: false,
        checkbox2: true,
        radio1: 'option1',
    });

    const toggleCheckbox = (id) => {
        setCheckedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const setRadio = (value) => {
        setCheckedItems(prev => ({
            ...prev,
            radio1: value
        }));
    };

    return (
        <div className={styles.testContainer}>
            <h2 className={styles.testTitle}>ItemRow Component Test</h2>

            {/* Basic Variants */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Basic Variants</h3>
                <div className={styles.demoGrid}>
                    <div className={styles.demoItem}>
                        <p className={styles.demoLabel}>Default</p>
                        <div className={styles.demoWrapper}>
                            <ItemRow label="Default Item" />
                        </div>
                    </div>
                    <div className={styles.demoItem}>
                        <p className={styles.demoLabel}>With Body</p>
                        <div className={styles.demoWrapper}>
                            <ItemRow
                                label="Item with Description"
                                showBody={true}
                                body="This is a secondary description text"
                            />
                        </div>
                    </div>
                    <div className={styles.demoItem}>
                        <p className={styles.demoLabel}>With Right Icon & Info</p>
                        <div className={styles.demoWrapper}>
                            <ItemRow
                                label="Settings"
                                showInfo={true}
                                showRightIcon={true}
                                chooseRightIcon={<Icon name="Gear" size={14} />}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Types / States */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Types & States</h3>
                <div className={styles.demoGrid}>
                    <div className={styles.demoItem}>
                        <p className={styles.demoLabel}>Hover State</p>
                        <div className={styles.demoWrapper}>
                            <ItemRow label="Hover State" type="hover" />
                        </div>
                    </div>
                    <div className={styles.demoItem}>
                        <p className={styles.demoLabel}>Selected State</p>
                        <div className={styles.demoWrapper}>
                            <ItemRow label="Selected State" type="selected" />
                        </div>
                    </div>
                    <div className={styles.demoItem}>
                        <p className={styles.demoLabel}>Disabled State</p>
                        <div className={styles.demoWrapper}>
                            <ItemRow label="Disabled State" type="disabled" />
                        </div>
                    </div>
                    <div className={styles.demoItem}>
                        <p className={styles.demoLabel}>Danger State</p>
                        <div className={styles.demoWrapper}>
                            <ItemRow label="Danger State" type="danger" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Selection Controls */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Selection Controls (Interactive)</h3>
                <div className={styles.interactiveSection}>
                    <div className={styles.demoGrid}>
                        <div className={styles.demoItem}>
                            <p className={styles.demoLabel}>Checkboxes</p>
                            <div className={styles.demoWrapper}>
                                <ItemRow
                                    label="Option A"
                                    hasCheckbox={true}
                                    checked={checkedItems.checkbox1}
                                    onClick={() => toggleCheckbox('checkbox1')}
                                />
                                <ItemRow
                                    label="Option B"
                                    hasCheckbox={true}
                                    checked={checkedItems.checkbox2}
                                    onClick={() => toggleCheckbox('checkbox2')}
                                />
                            </div>
                        </div>
                        <div className={styles.demoItem}>
                            <p className={styles.demoLabel}>Radio Buttons</p>
                            <div className={styles.demoWrapper}>
                                <ItemRow
                                    label="Radio Option 1"
                                    hasRadio={true}
                                    checked={checkedItems.radio1 === 'option1'}
                                    onClick={() => setRadio('option1')}
                                />
                                <ItemRow
                                    label="Radio Option 2"
                                    hasRadio={true}
                                    checked={checkedItems.radio1 === 'option2'}
                                    onClick={() => setRadio('option2')}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.stateDisplay}>
                        <p className={styles.stateTitle}>Current Selection State:</p>
                        <div className={styles.jsonDisplay}>
                            {JSON.stringify(checkedItems, null, 2)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemRowTest;
