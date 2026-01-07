import React, { useState } from 'react';
import TextArea from './TextArea';
import styles from './TextAreaTest.module.css';

/**
 * TextAreaTest Component
 * 
 * A test component to demonstrate all TextArea functionality.
 */
const TextAreaTest = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('Initial content');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');

    return (
        <div className={styles.testContainer}>
            <h2 className={styles.testTitle}>TextArea Functionality Test</h2>

            {/* Interactive Test Section */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Interactive Testing - Type to Test</h3>
                <div className={styles.testGrid}>
                    <div className={styles.testItem}>
                        <h4>Basic TextArea</h4>
                        <TextArea
                            label="Comments"
                            description="Enter your comments here"
                            placeholder="Type something..."
                            value={value1}
                            onChange={(e) => setValue1(e.target.value)}
                        />
                        <p className={styles.status}>Value: "{value1}"</p>
                    </div>

                    <div className={styles.testItem}>
                        <h4>Controlled TextArea</h4>
                        <TextArea
                            label="Bio"
                            description="Tell us about yourself"
                            value={value2}
                            onChange={(e) => setValue2(e.target.value)}
                        />
                        <p className={styles.status}>Value: "{value2}"</p>
                    </div>

                    <div className={styles.testItem}>
                        <h4>With Error State</h4>
                        <TextArea
                            label="Feedback"
                            description="Must be at least 10 characters"
                            placeholder="Your feedback..."
                            value={value3}
                            hasError={value3.length > 0 && value3.length < 10}
                            error={value3.length > 0 && value3.length < 10 ? "Feedback too short" : ""}
                            onChange={(e) => setValue3(e.target.value)}
                        />
                        <p className={styles.status}>
                            Length: {value3.length} {value3.length >= 10 ? '✓' : '✗'}
                        </p>
                    </div>

                    <div className={styles.testItem}>
                        <h4>With Icon & Title</h4>
                        <TextArea
                            label="Notes"
                            description="Personal notes"
                            title="Quick Note"
                            showTitle={true}
                            showIcon={true}
                            value={value4}
                            onChange={(e) => setValue4(e.target.value)}
                        />
                        <p className={styles.status}>Value: "{value4}"</p>
                    </div>

                    <div className={styles.testItem}>
                        <h4>Drag TextArea</h4>
                        <TextArea
                            label="Resizable"
                            description="Drag the bottom right corner to resize"
                            placeholder="Try dragging me..."
                            showDragIcon={true}
                        />
                        <p className={styles.instruction}>Custom drag icon is visible and functional</p>
                    </div>

                    <div className={styles.testItem}>
                        <h4>Disabled State</h4>
                        <TextArea
                            label="Read Only"
                            description="This textarea is disabled"
                            value="You cannot edit this content"
                            disabled={true}
                        />
                        <p className={styles.instruction}>This textarea is disabled</p>
                    </div>
                </div>
            </div>

            {/* All Visual States */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>All Visual States Overview</h3>
                <div className={styles.statesGrid}>
                    <div className={styles.stateItem}>
                        <h4>Default</h4>
                        <TextArea label="Label" description="Description" placeholder="Body" state="default" />
                    </div>
                    <div className={styles.stateItem}>
                        <h4>Hover</h4>
                        <TextArea label="Label" description="Description" placeholder="Body" state="hover" />
                    </div>
                    <div className={styles.stateItem}>
                        <h4>Focused</h4>
                        <TextArea label="Label" description="Description" placeholder="Body" state="focused" />
                    </div>
                    <div className={styles.stateItem}>
                        <h4>Typing</h4>
                        <TextArea label="Label" description="Description" value="Typing..." state="typing" />
                    </div>
                    <div className={styles.stateItem}>
                        <h4>Filled</h4>
                        <TextArea label="Label" description="Description" value="Filled content" state="filled" />
                    </div>
                    <div className={styles.stateItem}>
                        <h4>Error</h4>
                        <TextArea label="Label" description="Description" placeholder="Body" hasError={true} error="Error message" state="error" />
                    </div>
                    <div className={styles.stateItem}>
                        <h4>Disabled</h4>
                        <TextArea label="Label" description="Description" placeholder="Body" disabled={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextAreaTest;
