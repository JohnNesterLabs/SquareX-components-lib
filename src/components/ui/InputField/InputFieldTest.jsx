import React from 'react';
import { InputField } from 'squarex-ui-component-lib';
import styles from './InputFieldTest.module.css';

/**
 * InputFieldTest Component
 * 
 * A test component to demonstrate all InputField functionality.
 * This is a temporary component for testing purposes.
 */
const InputFieldTest = () => {

    return (
        <div className={styles.testContainer}>
            <h2 className={styles.testTitle}>InputField Functionality Test</h2>

            {/* All 8 States - Matching Image */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>All 8 States</h3>
                <div className={styles.statesGrid}>
                    <div className={styles.stateItem}>
                        <h4>1. Default</h4>
                        <InputField
                            label="Label"
                            description="Description"
                            placeholder="Value"
                            state="default"
                        />
                    </div>

                    <div className={styles.stateItem}>
                        <h4>2. Hover</h4>
                        <InputField
                            label="Label"
                            description="Description"
                            placeholder="Value"
                            state="hover"
                        />
                    </div>

                    <div className={styles.stateItem}>
                        <h4>3. Focus</h4>
                        <InputField
                            label="Label"
                            description="Description"
                            placeholder="Value"
                            state="focused"
                        />
                    </div>

                    <div className={styles.stateItem}>
                        <h4>4. Typing</h4>
                        <InputField
                            label="Label"
                            description="Description"
                            value="Value"
                            state="typing"
                        />
                    </div>

                    <div className={styles.stateItem}>
                        <h4>5. Filled In</h4>
                        <InputField
                            label="Label"
                            description="Description"
                            value="Value"
                            state="filled"
                        />
                    </div>

                    <div className={styles.stateItem}>
                        <h4>6. Filled In Hover</h4>
                        <InputField
                            label="Label"
                            description="Description"
                            value="Value"
                            state="filledHover"
                        />
                    </div>

                    <div className={styles.stateItem}>
                        <h4>7. Error</h4>
                        <InputField
                            label="Label"
                            description="Description"
                            value="Value"
                            state="error"
                            error="Error"
                            hasError={true}
                        />
                    </div>

                    <div className={styles.stateItem}>
                        <h4>8. Disabled</h4>
                        <InputField
                            label="Label"
                            description="Description"
                            placeholder="Value"
                            state="disabled"
                            disabled={true}
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

