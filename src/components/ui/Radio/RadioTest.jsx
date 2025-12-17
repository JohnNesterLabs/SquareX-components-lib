import React, { useState } from 'react';
import Radio from './Radio';
import styles from './RadioTest.module.css';

/**
 * RadioTest Component
 * 
 * A test component to demonstrate all Radio functionality.
 * This is a temporary component for testing purposes.
 */
const RadioTest = () => {
  const [selectedOption1, setSelectedOption1] = useState('option1');
  const [selectedOption2, setSelectedOption2] = useState('option2');
  const [selectedOption3, setSelectedOption3] = useState('option3');
  const [selectedSize, setSelectedSize] = useState('small');

  return (
    <div className={styles.testContainer}>
      <h2 className={styles.testTitle}>Radio Functionality Test</h2>
      
      {/* Interactive Test Section - Radio Groups */}
      <div className={styles.testSection}>
        <h3 className={styles.sectionTitle}>Interactive Testing - Radio Groups</h3>
        <div className={styles.testGrid}>
          <div className={styles.testItem}>
            <h4>Basic Radio Group</h4>
            <div className={styles.radioGroup}>
              <Radio
                checked={selectedOption1 === 'option1'}
                name="test-group-1"
                value="option1"
                label="Option 1"
                onChange={(e) => {
                  console.log('Radio changed:', e.target.value);
                  setSelectedOption1(e.target.value);
                }}
              />
              <Radio
                checked={selectedOption1 === 'option2'}
                name="test-group-1"
                value="option2"
                label="Option 2"
                onChange={(e) => {
                  console.log('Radio changed:', e.target.value);
                  setSelectedOption1(e.target.value);
                }}
              />
              <Radio
                checked={selectedOption1 === 'option3'}
                name="test-group-1"
                value="option3"
                label="Option 3"
                onChange={(e) => {
                  console.log('Radio changed:', e.target.value);
                  setSelectedOption1(e.target.value);
                }}
              />
            </div>
            <p className={styles.status}>Selected: {selectedOption1}</p>
          </div>

          <div className={styles.testItem}>
            <h4>Radio Group with Different Sizes</h4>
            <div className={styles.radioGroup}>
              <Radio
                checked={selectedSize === 'small'}
                name="size-group"
                value="small"
                size="small"
                label="Small"
                onChange={(e) => {
                  console.log('Size changed:', e.target.value);
                  setSelectedSize(e.target.value);
                }}
              />
              <Radio
                checked={selectedSize === 'medium'}
                name="size-group"
                value="medium"
                size="medium"
                label="Medium"
                onChange={(e) => {
                  console.log('Size changed:', e.target.value);
                  setSelectedSize(e.target.value);
                }}
              />
              <Radio
                checked={selectedSize === 'large'}
                name="size-group"
                value="large"
                size="large"
                label="Large"
                onChange={(e) => {
                  console.log('Size changed:', e.target.value);
                  setSelectedSize(e.target.value);
                }}
              />
            </div>
            <p className={styles.status}>Selected: {selectedSize}</p>
          </div>

          <div className={styles.testItem}>
            <h4>Radio Group with States</h4>
            <div className={styles.radioGroup}>
              <Radio
                checked={selectedOption2 === 'default'}
                name="state-group"
                value="default"
                state="default"
                label="Default (hover me)"
                onChange={(e) => {
                  console.log('Radio changed:', e.target.value);
                  setSelectedOption2(e.target.value);
                }}
              />
              <Radio
                checked={selectedOption2 === 'focus'}
                name="state-group"
                value="focus"
                state="focus"
                label="Focus state"
                onChange={(e) => {
                  console.log('Radio changed:', e.target.value);
                  setSelectedOption2(e.target.value);
                }}
              />
              <Radio
                checked={selectedOption2 === 'hover'}
                name="state-group"
                value="hover"
                state="hover"
                label="Hover state"
                onChange={(e) => {
                  console.log('Radio changed:', e.target.value);
                  setSelectedOption2(e.target.value);
                }}
              />
            </div>
            <p className={styles.status}>Selected: {selectedOption2}</p>
          </div>
        </div>
      </div>

      {/* State Testing Section */}
      <div className={styles.testSection}>
        <h3 className={styles.sectionTitle}>State Testing - Hover and Focus</h3>
        <div className={styles.testGrid}>
          <div className={styles.testItem}>
            <h4>Default State</h4>
            <Radio
              checked={selectedOption3 === 'default'}
              name="test-default"
              value="default"
              state="default"
              label="Default state (hover me)"
              onChange={(e) => {
                console.log('Radio changed:', e.target.value);
                setSelectedOption3(e.target.value);
              }}
            />
            <p className={styles.instruction}>Hover over the radio to see hover state</p>
          </div>

          <div className={styles.testItem}>
            <h4>Focus State</h4>
            <Radio
              checked={selectedOption3 === 'focus'}
              name="test-focus"
              value="focus"
              state="focus"
              label="Focus state (click to focus)"
              onChange={(e) => {
                console.log('Radio changed:', e.target.value);
                setSelectedOption3(e.target.value);
              }}
            />
            <p className={styles.instruction}>Click or tab to focus</p>
          </div>

          <div className={styles.testItem}>
            <h4>Hover State</h4>
            <Radio
              checked={selectedOption3 === 'hover'}
              name="test-hover"
              value="hover"
              state="hover"
              label="Hover state"
              onChange={(e) => {
                console.log('Radio changed:', e.target.value);
                setSelectedOption3(e.target.value);
              }}
            />
            <p className={styles.instruction}>Hover state is active</p>
          </div>

          <div className={styles.testItem}>
            <h4>Pressed State</h4>
            <Radio
              checked={selectedOption3 === 'pressed'}
              name="test-pressed"
              value="pressed"
              state="pressed"
              label="Pressed state"
              onChange={(e) => {
                console.log('Radio changed:', e.target.value);
                setSelectedOption3(e.target.value);
              }}
            />
            <p className={styles.instruction}>Pressed state is active</p>
          </div>
        </div>
      </div>

      {/* Disabled State Testing */}
      <div className={styles.testSection}>
        <h3 className={styles.sectionTitle}>Disabled State Testing</h3>
        <div className={styles.testGrid}>
          <div className={styles.testItem}>
            <h4>Disabled Unselected</h4>
            <Radio
              checked={false}
              disabled={true}
              name="disabled-group"
              value="disabled1"
              label="Disabled unselected"
              onChange={(e) => console.log('Should not fire')}
            />
            <p className={styles.instruction}>This radio is disabled</p>
          </div>

          <div className={styles.testItem}>
            <h4>Disabled Selected</h4>
            <Radio
              checked={true}
              disabled={true}
              name="disabled-group"
              value="disabled2"
              label="Disabled selected"
              onChange={(e) => console.log('Should not fire')}
            />
            <p className={styles.instruction}>This radio is disabled</p>
          </div>
        </div>
      </div>

      {/* All States Grid */}
      <div className={styles.testSection}>
        <h3 className={styles.sectionTitle}>All States Overview</h3>
        <div className={styles.statesGrid}>
          <div className={styles.stateItem}>
            <h4>Unselected - Default</h4>
            <Radio checked={false} state="default" name="overview" value="1" />
          </div>
          <div className={styles.stateItem}>
            <h4>Unselected - Hover</h4>
            <Radio checked={false} state="hover" name="overview" value="2" />
          </div>
          <div className={styles.stateItem}>
            <h4>Unselected - Focus</h4>
            <Radio checked={false} state="focus" name="overview" value="3" />
          </div>
          <div className={styles.stateItem}>
            <h4>Unselected - Pressed</h4>
            <Radio checked={false} state="pressed" name="overview" value="4" />
          </div>
          <div className={styles.stateItem}>
            <h4>Unselected - Disabled</h4>
            <Radio checked={false} disabled={true} name="overview" value="5" />
          </div>
          <div className={styles.stateItem}>
            <h4>Selected - Default</h4>
            <Radio checked={true} state="default" name="overview" value="6" />
          </div>
          <div className={styles.stateItem}>
            <h4>Selected - Hover</h4>
            <Radio checked={true} state="hover" name="overview" value="7" />
          </div>
          <div className={styles.stateItem}>
            <h4>Selected - Focus</h4>
            <Radio checked={true} state="focus" name="overview" value="8" />
          </div>
          <div className={styles.stateItem}>
            <h4>Selected - Pressed</h4>
            <Radio checked={true} state="pressed" name="overview" value="9" />
          </div>
          <div className={styles.stateItem}>
            <h4>Selected - Disabled</h4>
            <Radio checked={true} disabled={true} name="overview" value="10" />
          </div>
        </div>
      </div>

      {/* Console Log Section */}
      <div className={styles.testSection}>
        <h3 className={styles.sectionTitle}>Console Logs</h3>
        <p className={styles.instruction}>
          Open your browser's developer console to see onChange events when you select radio buttons.
        </p>
      </div>
    </div>
  );
};

export default RadioTest;

