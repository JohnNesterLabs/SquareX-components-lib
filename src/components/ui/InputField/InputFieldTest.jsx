import React, { useState } from 'react';
import InputField from './InputField';
import styles from './InputFieldTest.module.css';

/**
 * InputFieldTest Component
 * 
 * A test component to demonstrate all InputField functionality.
 * This is a temporary component for testing purposes.
 */
const InputFieldTest = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');
    const [value6, setValue6] = useState('');

    return (
        <div className={styles.testContainer}>
            <h2 className={styles.testTitle}>InputField Functionality Test</h2>

            {/* Interactive Test Section */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Interactive Testing - Type to Test</h3>
                <div className={styles.testGrid}>
                    <div className={styles.testItem}>
                        <h4>Basic Input (Uncontrolled)</h4>
                        <InputField
                            label="Username"
                            description="Enter your username"
                            placeholder="Type here..."
                            onChange={(e) => {
                                console.log('Input 1 changed:', e.target.value);
                                setValue1(e.target.value);
                            }}
                        />
                        <p className={styles.status}>Value: "{value1}"</p>
                    </div>

                    <div className={styles.testItem}>
                        <h4>Controlled Input</h4>
                        <InputField
                            label="Email"
                            description="Enter your email address"
                            placeholder="email@example.com"
                            value={value2}
                            onChange={(e) => {
                                console.log('Input 2 changed:', e.target.value);
                                setValue2(e.target.value);
                            }}
                        />
                        <p className={styles.status}>Value: "{value2}"</p>
                    </div>

                    <div className={styles.testItem}>
                        <h4>With Error State</h4>
                        <InputField
                            label="Password"
                            description="Must be at least 8 characters"
                            placeholder="Enter password"
                            value={value3}
                            hasError={value3.length > 0 && value3.length < 8}
                            error={value3.length > 0 && value3.length < 8 ? "Password too short" : ""}
                            onChange={(e) => {
                                console.log('Input 3 changed:', e.target.value);
                                setValue3(e.target.value);
                            }}
                        />
                        <p className={styles.status}>
                            Length: {value3.length} {value3.length >= 8 ? '✓' : '✗'}
                        </p>
                    </div>

                    <div className={styles.testItem}>
                        <h4>With Icon</h4>
                        <InputField
                            label="Search"
                            description="Search for items"
                            placeholder="Type to search..."
                            showIcon={true}
                            value={value4}
                            onChange={(e) => {
                                console.log('Input 4 changed:', e.target.value);
                                setValue4(e.target.value);
                            }}
                        />
                        <p className={styles.status}>Value: "{value4}"</p>
                    </div>

                    <div className={styles.testItem}>
                        <h4>No Label/Description</h4>
                        <InputField
                            hasLabel={false}
                            hasDescription={false}
                            placeholder="Minimal input..."
                            value={value5}
                            onChange={(e) => {
                                console.log('Input 5 changed:', e.target.value);
                                setValue5(e.target.value);
                            }}
                        />
                        <p className={styles.status}>Value: "{value5}"</p>
                    </div>

                    <div className={styles.testItem}>
                        <h4>Disabled State</h4>
                        <InputField
                            label="Disabled Input"
                            description="This input is disabled"
                            placeholder="Cannot type here"
                            value="Disabled value"
                            disabled={true}
                            onChange={(e) => console.log('Should not fire')}
                        />
                        <p className={styles.instruction}>This input is disabled</p>
                    </div>
                </div>
            </div>

            {/* Focus and Blur Events */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Focus & Blur Events</h3>
                <div className={styles.testGrid}>
                    <div className={styles.testItem}>
                        <h4>With Focus/Blur Handlers</h4>
                        <InputField
                            label="Interactive Input"
                            description="Click to focus, click outside to blur"
                            placeholder="Focus me..."
                            value={value6}
                            onChange={(e) => setValue6(e.target.value)}
                            onFocus={(e) => console.log('Input focused:', e.target.value)}
                            onBlur={(e) => console.log('Input blurred:', e.target.value)}
                        />
                        <p className={styles.instruction}>Check console for focus/blur events</p>
                    </div>
                </div>
            </div>

            {/* All Visual States */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>All Visual States Overview</h3>
                <div className={styles.statesGrid}>
                    <div className={styles.stateItem}>
                        <h4>Default (Empty)</h4>
                        <InputField
                            label="Label"
                            description="Description"
                            placeholder="Value"
                            hasError={false}
                        />
                    </div>

                    <div className={styles.stateItem}>
                        <h4>Filled</h4>
                        <InputField
                            label="Label"
                            description="Description"
                            value="Filled value"
                            hasError={false}
                        />
                    </div>

                    <div className={styles.stateItem}>
                        <h4>With Icon</h4>
                        <InputField
                            label="Label"
                            description="Description"
                            placeholder="Value"
                            showIcon={true}
                            hasError={false}
                        />
                    </div>

                    <div className={styles.stateItem}>
                        <h4>Error State</h4>
                        <InputField
                            label="Label"
                            description="Description"
                            value="Invalid"
                            error="Error message"
                            hasError={true}
                        />
                    </div>

                    <div className={styles.stateItem}>
                        <h4>Disabled Empty</h4>
                        <InputField
                            label="Label"
                            description="Description"
                            placeholder="Value"
                            disabled={true}
                        />
                    </div>

                    <div className={styles.stateItem}>
                        <h4>Disabled Filled</h4>
                        <InputField
                            label="Label"
                            description="Description"
                            value="Disabled value"
                            disabled={true}
                        />
                    </div>
                </div>
            </div>

            {/* Different Configurations */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Different Configurations</h3>
                <div className={styles.statesGrid}>
                    <div className={styles.stateItem}>
                        <h4>Label Only</h4>
                        <InputField
                            label="Label"
                            hasDescription={false}
                            placeholder="Value"
                        />
                    </div>

                    <div className={styles.stateItem}>
                        <h4>Description Only</h4>
                        <InputField
                            hasLabel={false}
                            description="Description"
                            placeholder="Value"
                        />
                    </div>

                    <div className={styles.stateItem}>
                        <h4>Minimal (No Label/Desc)</h4>
                        <InputField
                            hasLabel={false}
                            hasDescription={false}
                            placeholder="Value"
                        />
                    </div>

                    <div className={styles.stateItem}>
                        <h4>Error Without Message</h4>
                        <InputField
                            label="Label"
                            description="Description"
                            value="Value"
                            hasError={true}
                            error=""
                        />
                    </div>

                    <div className={styles.stateItem}>
                        <h4>Long Label & Description</h4>
                        <InputField
                            label="This is a very long label for testing"
                            description="This is a very long description to see how it wraps and displays in the component"
                            placeholder="Value"
                        />
                    </div>

                    <div className={styles.stateItem}>
                        <h4>Custom Placeholder</h4>
                        <InputField
                            label="Custom"
                            description="Custom placeholder text"
                            placeholder="Enter your custom value here..."
                        />
                    </div>
                </div>
            </div>

            {/* Console Log Section */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Console Logs</h3>
                <p className={styles.instruction}>
                    Open your browser's developer console to see onChange, onFocus, and onBlur events when you interact with the inputs.
                </p>
            </div>
        </div>
    );
};

export default InputFieldTest;
