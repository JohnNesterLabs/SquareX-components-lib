import React, { useState } from 'react';
import Dropdown from './Dropdown';
import ListOfItems from '../ListOfItems/ListOfItems';
import Icon from '../Icon/Icon';
import styles from './DropdownTest.module.css';

/**
 * DropdownTest Component
 * 
 * A test component to demonstrate all Dropdown functionality.
 */
const DropdownTest = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('Selected Value');
    const [value3, setValue3] = useState('');
    const [valueSmall, setValueSmall] = useState('is');
    const [valueOperator, setValueOperator] = useState('Operator');
    const [openDropdown, setOpenDropdown] = useState(null); // 'basic', 'controlled', 'error', 'chips', 'small', 'operator'
    const [availableChips] = useState([
        { label: 'React', id: '1' },
        { label: 'Vue', id: '2' },
        { label: 'Angular', id: '3' },
        { label: 'Svelte', id: '4' },
        { label: 'Next.js', id: '5' },
        { label: 'TypeScript', id: '6' },
        { label: 'Node.js', id: '7' },
        { label: 'GraphQL', id: '8' }
    ]);
    const [chips, setChips] = useState([
        { label: 'React', id: '1' },
        { label: 'Vue', id: '2' }
    ]);

    const handleRemoveChip = (id) => {
        setChips(chips.filter(chip => chip.id !== id));
    };

    const chipsWithHandlers = chips.map(chip => ({
        ...chip,
        onRemove: () => handleRemoveChip(chip.id)
    }));

    return (
        <div className={styles.testContainer}>
            <h2 className={styles.testTitle}>Dropdown Functionality Test</h2>

            {/* Interactive Test Section */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Interactive Testing</h3>
                <div className={styles.testGrid}>
                    <div className={styles.testItem}>
                        <h4>Basic Dropdown</h4>
                        <Dropdown
                            label="Category"
                            description="Select a category"
                            placeholder="Choose..."
                            value={value1}
                            onClick={() => setOpenDropdown(openDropdown === 'basic' ? null : 'basic')}
                        >
                            {openDropdown === 'basic' && (
                                <div className={styles.dropdownPopup}>
                                    <ListOfItems
                                        items={[
                                            { label: 'Option 1', id: '1', type: value1 === 'Option 1' ? 'selected' : 'default' },
                                            { label: 'Option 2', id: '2', type: value1 === 'Option 2' ? 'selected' : 'default' },
                                            { label: 'Option 3', id: '3', type: value1 === 'Option 3' ? 'selected' : 'default' },
                                        ]}
                                        onItemClick={(item) => {
                                            setValue1(item.label);
                                            setOpenDropdown(null);
                                        }}
                                    />
                                </div>
                            )}
                        </Dropdown>
                        <p className={styles.status}>Value: "{value1}"</p>
                    </div>

                    <div className={styles.testItem}>
                        <h4>Controlled Dropdown</h4>
                        <Dropdown
                            label="Status"
                            description="Current status of the item"
                            value={value2}
                            onClick={() => setOpenDropdown(openDropdown === 'controlled' ? null : 'controlled')}
                        >
                            {openDropdown === 'controlled' && (
                                <div className={styles.dropdownPopup}>
                                    <ListOfItems
                                        items={[
                                            { label: 'Active', id: '1', type: value2 === 'Active' ? 'selected' : 'default' },
                                            { label: 'Inactive', id: '2', type: value2 === 'Inactive' ? 'selected' : 'default' },
                                            { label: 'Pending', id: '3', type: value2 === 'Pending' ? 'selected' : 'default' },
                                        ]}
                                        onItemClick={(item) => {
                                            setValue2(item.label);
                                            setOpenDropdown(null);
                                        }}
                                    />
                                </div>
                            )}
                        </Dropdown>
                        <p className={styles.status}>Value: "{value2}"</p>
                    </div>

                    <div className={styles.testItem}>
                        <h4>With Error State</h4>
                        <Dropdown
                            label="Priority"
                            description="Set item priority"
                            placeholder="Select priority"
                            value={value3}
                            hasError={!value3}
                            error="Please select a priority"
                            onClick={() => setOpenDropdown(openDropdown === 'error' ? null : 'error')}
                        >
                            {openDropdown === 'error' && (
                                <div className={styles.dropdownPopup}>
                                    <ListOfItems
                                        items={[
                                            { label: 'High', id: '1', type: value3 === 'High' ? 'selected' : 'default' },
                                            { label: 'Medium', id: '2', type: value3 === 'Medium' ? 'selected' : 'default' },
                                            { label: 'Low', id: '3', type: value3 === 'Low' ? 'selected' : 'default' },
                                        ]}
                                        onItemClick={(item) => {
                                            setValue3(item.label);
                                            setOpenDropdown(null);
                                        }}
                                    />
                                </div>
                            )}
                        </Dropdown>
                        <p className={styles.status}>Value: "{value3 || 'EMPTY'}"</p>
                    </div>

                    <div className={styles.testItem}>
                        <h4>Small Type Variants</h4>
                        <div className={styles.smallDropdownRow}>
                            <Dropdown
                                type="small"
                                value={valueSmall}
                                hasLabel={false}
                                hasDescription={false}
                                onClick={() => setOpenDropdown(openDropdown === 'small' ? null : 'small')}
                            >
                                {openDropdown === 'small' && (
                                    <div className={styles.dropdownPopup}>
                                        <ListOfItems
                                            items={[
                                                { label: 'is', id: 'is', leftIcon: <Icon name="FileArchive" size={14} />, type: valueSmall === 'is' ? 'selected' : 'default' },
                                                { label: 'and', id: 'and', leftIcon: <Icon name="FileText" size={14} />, type: valueSmall === 'and' ? 'selected' : 'default' },
                                                { label: 'Item 1', id: 'item1', type: valueSmall === 'Item 1' ? 'selected' : 'default' },
                                                { label: 'Item 2', id: 'item2', leftIcon: <Icon name="Fingerprint" size={14} />, type: valueSmall === 'Item 2' ? 'selected' : 'default' },
                                                { label: 'Item 3', id: 'item3', type: valueSmall === 'Item 3' ? 'selected' : 'default' },
                                            ]}
                                            onItemClick={(item) => {
                                                setValueSmall(item.label);
                                                setOpenDropdown(null);
                                            }}
                                        />
                                    </div>
                                )}
                            </Dropdown>

                            <Dropdown
                                type="small"
                                value={valueOperator}
                                hasLabel={false}
                                hasDescription={false}
                                onClick={() => setOpenDropdown(openDropdown === 'operator' ? null : 'operator')}
                            >
                                {openDropdown === 'operator' && (
                                    <div className={styles.dropdownPopup}>
                                        <ListOfItems
                                            items={[
                                                { label: 'Operator', id: 'op1', type: valueOperator === 'Operator' ? 'selected' : 'default' },
                                                { label: 'Value', id: 'op2', type: valueOperator === 'Value' ? 'selected' : 'default' },
                                            ]}
                                            onItemClick={(item) => {
                                                setValueOperator(item.label);
                                                setOpenDropdown(null);
                                            }}
                                        />
                                    </div>
                                )}
                            </Dropdown>
                        </div>
                        <p className={styles.instruction}>Small variants side-by-side</p>
                    </div>

                    <div className={styles.testItem}>
                        <h4>With Chips</h4>
                        <Dropdown
                            label="Tags"
                            description="Selected tags"
                            hasChips={true}
                            chips={chipsWithHandlers}
                            placeholder="Select tags..."
                            onClick={() => setOpenDropdown(openDropdown === 'chips' ? null : 'chips')}
                        >
                            {openDropdown === 'chips' && (
                                <div className={styles.dropdownPopup}>
                                    <ListOfItems
                                        items={availableChips.map(ac => ({
                                            ...ac,
                                            checked: chips.some(c => c.id === ac.id)
                                        }))}
                                        onItemClick={(item) => {
                                            if (chips.some(c => c.id === item.id)) {
                                                setChips(chips.filter(c => c.id !== item.id));
                                            } else {
                                                setChips([...chips, { label: item.label, id: item.id }]);
                                            }
                                        }}
                                    />
                                </div>
                            )}
                        </Dropdown>
                        <p className={styles.instruction}>Click 'x' to remove or select from list</p>
                    </div>

                    <div className={styles.testItem}>
                        <h4>Disabled State</h4>
                        <Dropdown
                            label="Disabled Dropdown"
                            description="This cannot be interacted with"
                            value="Locked Value"
                            disabled={true}
                        />
                        <p className={styles.instruction}>This dropdown is disabled</p>
                    </div>
                </div>
            </div>

            {/* All Visual States */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>All Visual States Overview</h3>
                <div className={styles.statesGrid}>
                    <div className={styles.stateItem}>
                        <h4>Default</h4>
                        <Dropdown label="Label" description="Description" placeholder="Value" state="default" />
                    </div>
                    <div className={styles.stateItem}>
                        <h4>Hover</h4>
                        <Dropdown label="Label" description="Description" placeholder="Value" state="hover" />
                    </div>
                    <div className={styles.stateItem}>
                        <h4>Focused</h4>
                        <Dropdown label="Label" description="Description" placeholder="Value" state="focused" />
                    </div>
                    <div className={styles.stateItem}>
                        <h4>Selected</h4>
                        <Dropdown label="Label" description="Description" value="Selected Value" state="selected" />
                    </div>
                    <div className={styles.stateItem}>
                        <h4>Error</h4>
                        <Dropdown label="Label" description="Description" placeholder="Value" hasError={true} error="Error message" state="error" />
                    </div>
                    <div className={styles.stateItem}>
                        <h4>Disabled</h4>
                        <Dropdown label="Label" description="Description" placeholder="Value" disabled={true} />
                    </div>
                </div>
            </div>

            {/* Small Variant States */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Small Variant States</h3>
                <div className={styles.statesGrid}>
                    <div className={styles.stateItem}>
                        <h4>Small Default</h4>
                        <Dropdown type="small" label="Label" placeholder="Value" state="default" />
                    </div>
                    <div className={styles.stateItem}>
                        <h4>Small Hover</h4>
                        <Dropdown type="small" label="Label" placeholder="Value" state="hover" />
                    </div>
                    <div className={styles.stateItem}>
                        <h4>Small Focused</h4>
                        <Dropdown type="small" label="Label" placeholder="Value" state="focused" />
                    </div>
                    <div className={styles.stateItem}>
                        <h4>Small Selected</h4>
                        <Dropdown type="small" label="Label" value="Value" state="selected" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropdownTest;
