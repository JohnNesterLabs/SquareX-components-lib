import React, { useState } from 'react';
import Checkbox from './Checkbox';
import styles from './CheckboxTest.module.css';

/**
 * CheckboxTest Component
 * 
 * A test component to demonstrate all Checkbox functionality.
 * This is a temporary component for testing purposes.
 */
const CheckboxTest = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);
  const [checked8, setChecked8] = useState(false);

  return (
    <div className={styles.testContainer}>
      <h2 className={styles.testTitle}>Checkbox Functionality Test</h2>

      {/* Interactive Test Section */}
      <div className={styles.testSection}>
        <h3 className={styles.sectionTitle}>Interactive Testing - Click to Toggle</h3>
        <div className={styles.testGrid}>
          <div className={styles.testItem}>
            <h4>Basic Checkbox (Uncontrolled)</h4>
            <Checkbox
              checked={checked1}
              label="Click me to toggle"
              onChange={(e) => {
                console.log('Checkbox 1 changed:', e.target.checked);
                setChecked1(e.target.checked);
              }}
            />
            <p className={styles.status}>Status: {checked1 ? 'Checked ✓' : 'Unchecked'}</p>
          </div>

          <div className={styles.testItem}>
            <h4>Checkbox with Label</h4>
            <Checkbox
              checked={checked2}
              label="I agree to the terms"
              onChange={(e) => {
                console.log('Checkbox 2 changed:', e.target.checked);
                setChecked2(e.target.checked);
              }}
            />
            <p className={styles.status}>Status: {checked2 ? 'Checked ✓' : 'Unchecked'}</p>
          </div>

          <div className={styles.testItem}>
            <h4>Small Size</h4>
            <Checkbox
              checked={checked3}
              size="small"
              label="Small checkbox"
              onChange={(e) => {
                console.log('Checkbox 3 changed:', e.target.checked);
                setChecked3(e.target.checked);
              }}
            />
            <p className={styles.status}>Status: {checked3 ? 'Checked ✓' : 'Unchecked'}</p>
          </div>

          <div className={styles.testItem}>
            <h4>Large Size</h4>
            <Checkbox
              checked={checked4}
              size="large"
              label="Large checkbox"
              onChange={(e) => {
                console.log('Checkbox 4 changed:', e.target.checked);
                setChecked4(e.target.checked);
              }}
            />
            <p className={styles.status}>Status: {checked4 ? 'Checked ✓' : 'Unchecked'}</p>
          </div>
        </div>
      </div>

      {/* State Testing Section */}
      <div className={styles.testSection}>
        <h3 className={styles.sectionTitle}>State Testing - Hover and Focus</h3>
        <div className={styles.testGrid}>
          <div className={styles.testItem}>
            <h4>Default State</h4>
            <Checkbox
              checked={checked5}
              state="default"
              label="Default state (hover me)"
              onChange={(e) => {
                console.log('Checkbox 5 changed:', e.target.checked);
                setChecked5(e.target.checked);
              }}
            />
            <p className={styles.instruction}>Hover over the checkbox to see hover state</p>
          </div>

          <div className={styles.testItem}>
            <h4>Focus State</h4>
            <Checkbox
              checked={checked6}
              state="focus"
              label="Focus state (click to focus)"
              onChange={(e) => {
                console.log('Checkbox 6 changed:', e.target.checked);
                setChecked6(e.target.checked);
              }}
            />
            <p className={styles.instruction}>Click or tab to focus</p>
          </div>

          <div className={styles.testItem}>
            <h4>Hover State</h4>
            <Checkbox
              checked={checked7}
              state="hover"
              label="Hover state"
              onChange={(e) => {
                console.log('Checkbox 7 changed:', e.target.checked);
                setChecked7(e.target.checked);
              }}
            />
            <p className={styles.instruction}>Hover state is active</p>
          </div>

          <div className={styles.testItem}>
            <h4>Pressed State</h4>
            <Checkbox
              checked={checked8}
              state="pressed"
              label="Pressed state"
              onChange={(e) => {
                console.log('Checkbox 8 changed:', e.target.checked);
                setChecked8(e.target.checked);
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
            <h4>Disabled Unchecked</h4>
            <Checkbox
              checked={false}
              disabled={true}
              label="Disabled unchecked"
              onChange={(e) => console.log('Should not fire')}
            />
            <p className={styles.instruction}>This checkbox is disabled</p>
          </div>

          <div className={styles.testItem}>
            <h4>Disabled Checked</h4>
            <Checkbox
              checked={true}
              disabled={true}
              label="Disabled checked"
              onChange={(e) => console.log('Should not fire')}
            />
            <p className={styles.instruction}>This checkbox is disabled</p>
          </div>
        </div>
      </div>

      {/* Indeterminate State Testing */}
      <div className={styles.testSection}>
        <h3 className={styles.sectionTitle}>Indeterminate/Neutral State Testing</h3>
        <div className={styles.testGrid}>
          <div className={styles.testItem}>
            <h4>Indeterminate State</h4>
            <Checkbox
              checked={false}
              indeterminate={true}
              label="Indeterminate checkbox"
              onChange={(e) => console.log('Indeterminate changed:', e.target.checked)}
            />
            <p className={styles.instruction}>Used for "select all" when some items are selected</p>
          </div>

          <div className={styles.testItem}>
            <h4>Indeterminate Disabled</h4>
            <Checkbox
              checked={false}
              indeterminate={true}
              disabled={true}
              label="Disabled indeterminate"
              onChange={(e) => console.log('Should not fire')}
            />
            <p className={styles.instruction}>Disabled indeterminate state</p>
          </div>
        </div>
      </div>

      {/* Checkbox Field - Three States Side by Side */}
      <div className={styles.testSection}>
        <h3 className={styles.sectionTitle}>🔹 Checkbox Field</h3>
        <div className={styles.checkboxFieldGrid}>
          {/* Checked */}
          <div className={styles.checkboxFieldColumn}>
            <div className={styles.checkboxFieldItem}>
              <Checkbox
                checked={true}
                label="Label"
              />
              <p className={styles.description}>Description</p>
            </div>
            <div className={styles.checkboxFieldItem}>
              <Checkbox
                checked={true}
                disabled={true}
                label="Label"
              />
              <p className={styles.description}>Description</p>
            </div>
          </div>

          {/* Unchecked */}
          <div className={styles.checkboxFieldColumn}>
            <div className={styles.checkboxFieldItem}>
              <Checkbox
                checked={false}
                label="Label"
              />
              <p className={styles.description}>Description</p>
            </div>
            <div className={styles.checkboxFieldItem}>
              <Checkbox
                checked={false}
                disabled={true}
                label="Label"
              />
              <p className={styles.description}>Description</p>
            </div>
          </div>

          {/* Indeterminate */}
          <div className={styles.checkboxFieldColumn}>
            <div className={styles.checkboxFieldItem}>
              <Checkbox
                checked={false}
                indeterminate={true}
                label="Label"
              />
              <p className={styles.description}>Description</p>
            </div>
            <div className={styles.checkboxFieldItem}>
              <Checkbox
                checked={false}
                indeterminate={true}
                disabled={true}
                label="Label"
              />
              <p className={styles.description}>Description</p>
            </div>
          </div>
        </div>
      </div>

      {/* All States Grid */}
      <div className={styles.testSection}>
        <h3 className={styles.sectionTitle}>All States Overview</h3>
        <div className={styles.statesGrid}>
          <div className={styles.stateItem}>
            <h4>Unchecked - Default</h4>
            <Checkbox checked={false} state="default" />
          </div>
          <div className={styles.stateItem}>
            <h4>Unchecked - Hover</h4>
            <Checkbox checked={false} state="hover" />
          </div>
          <div className={styles.stateItem}>
            <h4>Unchecked - Focus</h4>
            <Checkbox checked={false} state="focus" />
          </div>
          <div className={styles.stateItem}>
            <h4>Unchecked - Pressed</h4>
            <Checkbox checked={false} state="pressed" />
          </div>
          <div className={styles.stateItem}>
            <h4>Unchecked - Disabled</h4>
            <Checkbox checked={false} disabled={true} />
          </div>
          <div className={styles.stateItem}>
            <h4>Checked - Default</h4>
            <Checkbox checked={true} state="default" />
          </div>
          <div className={styles.stateItem}>
            <h4>Checked - Hover</h4>
            <Checkbox checked={true} state="hover" />
          </div>
          <div className={styles.stateItem}>
            <h4>Checked - Focus</h4>
            <Checkbox checked={true} state="focus" />
          </div>
          <div className={styles.stateItem}>
            <h4>Checked - Pressed</h4>
            <Checkbox checked={true} state="pressed" />
          </div>
          <div className={styles.stateItem}>
            <h4>Checked - Disabled</h4>
            <Checkbox checked={true} disabled={true} />
          </div>
          <div className={styles.stateItem}>
            <h4>Indeterminate - Default</h4>
            <Checkbox checked={false} indeterminate={true} state="default" />
          </div>
          <div className={styles.stateItem}>
            <h4>Indeterminate - Hover</h4>
            <Checkbox checked={false} indeterminate={true} state="hover" />
          </div>
          <div className={styles.stateItem}>
            <h4>Indeterminate - Focus</h4>
            <Checkbox checked={false} indeterminate={true} state="focus" />
          </div>
          <div className={styles.stateItem}>
            <h4>Indeterminate - Pressed</h4>
            <Checkbox checked={false} indeterminate={true} state="pressed" />
          </div>
          <div className={styles.stateItem}>
            <h4>Indeterminate - Disabled</h4>
            <Checkbox checked={false} indeterminate={true} disabled={true} />
          </div>
        </div>
      </div>

      {/* Console Log Section */}
      <div className={styles.testSection}>
        <h3 className={styles.sectionTitle}>Console Logs</h3>
        <p className={styles.instruction}>
          Open your browser's developer console to see onChange events when you click checkboxes.
        </p>
      </div>
    </div>
  );
};

export default CheckboxTest;

