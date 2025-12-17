import React, { useState } from 'react';
import Toggle from './Toggle';
import styles from './ToggleTest.module.css';

/**
 * ToggleTest Component
 * 
 * A test component to demonstrate all Toggle functionality.
 * This is a temporary component for testing purposes.
 */
const ToggleTest = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(false);
  const [selectedSize, setSelectedSize] = useState('small');

  return (
    <div className={styles.testContainer}>
      <h2 className={styles.testTitle}>Toggle Functionality Test</h2>
      
      {/* Interactive Test Section */}
      <div className={styles.testSection}>
        <h3 className={styles.sectionTitle}>Interactive Testing - Click to Toggle</h3>
        <div className={styles.testGrid}>
          <div className={styles.testItem}>
            <h4>Basic Toggle</h4>
            <Toggle
              checked={toggle1}
              label="Toggle me"
              onChange={(e) => {
                console.log('Toggle changed:', e.target.checked);
                setToggle1(e.target.checked);
              }}
            />
            <p className={styles.status}>State: {toggle1 ? 'ON' : 'OFF'}</p>
          </div>

          <div className={styles.testItem}>
            <h4>Pre-checked Toggle</h4>
            <Toggle
              checked={toggle2}
              label="Already checked"
              onChange={(e) => {
                console.log('Toggle changed:', e.target.checked);
                setToggle2(e.target.checked);
              }}
            />
            <p className={styles.status}>State: {toggle2 ? 'ON' : 'OFF'}</p>
          </div>

          <div className={styles.testItem}>
            <h4>Toggle with Different Sizes</h4>
            <div className={styles.toggleGroup}>
              <Toggle
                checked={selectedSize === 'small'}
                size="small"
                name="size-group"
                value="small"
                label="Small"
                onChange={(e) => {
                  if (e.target.checked) {
                    console.log('Size changed:', 'small');
                    setSelectedSize('small');
                  }
                }}
              />
              <Toggle
                checked={selectedSize === 'medium'}
                size="medium"
                name="size-group"
                value="medium"
                label="Medium"
                onChange={(e) => {
                  if (e.target.checked) {
                    console.log('Size changed:', 'medium');
                    setSelectedSize('medium');
                  }
                }}
              />
              <Toggle
                checked={selectedSize === 'large'}
                size="large"
                name="size-group"
                value="large"
                label="Large"
                onChange={(e) => {
                  if (e.target.checked) {
                    console.log('Size changed:', 'large');
                    setSelectedSize('large');
                  }
                }}
              />
            </div>
            <p className={styles.status}>Selected: {selectedSize}</p>
          </div>

          <div className={styles.testItem}>
            <h4>Toggle with States</h4>
            <div className={styles.toggleGroup}>
              <Toggle
                checked={toggle3}
                state="default"
                label="Default (hover me)"
                onChange={(e) => {
                  console.log('Toggle changed:', e.target.checked);
                  setToggle3(e.target.checked);
                }}
              />
              <Toggle
                checked={toggle3}
                state="focus"
                label="Focus state"
                onChange={(e) => {
                  console.log('Toggle changed:', e.target.checked);
                  setToggle3(e.target.checked);
                }}
              />
              <Toggle
                checked={toggle3}
                state="hover"
                label="Hover state"
                onChange={(e) => {
                  console.log('Toggle changed:', e.target.checked);
                  setToggle3(e.target.checked);
                }}
              />
            </div>
            <p className={styles.status}>State: {toggle3 ? 'ON' : 'OFF'}</p>
          </div>
        </div>
      </div>

      {/* State Testing Section */}
      <div className={styles.testSection}>
        <h3 className={styles.sectionTitle}>State Testing - Hover and Focus</h3>
        <div className={styles.testGrid}>
          <div className={styles.testItem}>
            <h4>Default State - OFF</h4>
            <Toggle
              checked={false}
              state="default"
              label="Default state (hover me)"
              onChange={(e) => console.log('Toggle changed:', e.target.checked)}
            />
            <p className={styles.instruction}>Hover over the toggle to see hover state</p>
          </div>

          <div className={styles.testItem}>
            <h4>Default State - ON</h4>
            <Toggle
              checked={true}
              state="default"
              label="Default state (hover me)"
              onChange={(e) => console.log('Toggle changed:', e.target.checked)}
            />
            <p className={styles.instruction}>Hover over the toggle to see hover state</p>
          </div>

          <div className={styles.testItem}>
            <h4>Focus State - OFF</h4>
            <Toggle
              checked={false}
              state="focus"
              label="Focus state (click to focus)"
              onChange={(e) => console.log('Toggle changed:', e.target.checked)}
            />
            <p className={styles.instruction}>Click or tab to focus</p>
          </div>

          <div className={styles.testItem}>
            <h4>Focus State - ON</h4>
            <Toggle
              checked={true}
              state="focus"
              label="Focus state (click to focus)"
              onChange={(e) => console.log('Toggle changed:', e.target.checked)}
            />
            <p className={styles.instruction}>Click or tab to focus</p>
          </div>

          <div className={styles.testItem}>
            <h4>Hover State - OFF</h4>
            <Toggle
              checked={false}
              state="hover"
              label="Hover state"
              onChange={(e) => console.log('Toggle changed:', e.target.checked)}
            />
            <p className={styles.instruction}>Hover state is active</p>
          </div>

          <div className={styles.testItem}>
            <h4>Hover State - ON</h4>
            <Toggle
              checked={true}
              state="hover"
              label="Hover state"
              onChange={(e) => console.log('Toggle changed:', e.target.checked)}
            />
            <p className={styles.instruction}>Hover state is active</p>
          </div>

          <div className={styles.testItem}>
            <h4>Pressed State - OFF</h4>
            <Toggle
              checked={false}
              state="pressed"
              label="Pressed state"
              onChange={(e) => console.log('Toggle changed:', e.target.checked)}
            />
            <p className={styles.instruction}>Pressed state is active</p>
          </div>

          <div className={styles.testItem}>
            <h4>Pressed State - ON</h4>
            <Toggle
              checked={true}
              state="pressed"
              label="Pressed state"
              onChange={(e) => console.log('Toggle changed:', e.target.checked)}
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
            <h4>Disabled OFF</h4>
            <Toggle
              checked={false}
              disabled={true}
              label="Disabled toggle"
              onChange={(e) => console.log('Should not fire')}
            />
            <p className={styles.instruction}>This toggle is disabled</p>
          </div>

          <div className={styles.testItem}>
            <h4>Disabled ON</h4>
            <Toggle
              checked={true}
              disabled={true}
              label="Disabled toggle"
              onChange={(e) => console.log('Should not fire')}
            />
            <p className={styles.instruction}>This toggle is disabled</p>
          </div>
        </div>
      </div>

      {/* All States Grid */}
      <div className={styles.testSection}>
        <h3 className={styles.sectionTitle}>All States Overview</h3>
        <div className={styles.statesGrid}>
          <div className={styles.stateItem}>
            <h4>OFF - Default</h4>
            <Toggle checked={false} state="default" name="overview" value="1" />
          </div>
          <div className={styles.stateItem}>
            <h4>OFF - Hover</h4>
            <Toggle checked={false} state="hover" name="overview" value="2" />
          </div>
          <div className={styles.stateItem}>
            <h4>OFF - Focus</h4>
            <Toggle checked={false} state="focus" name="overview" value="3" />
          </div>
          <div className={styles.stateItem}>
            <h4>OFF - Pressed</h4>
            <Toggle checked={false} state="pressed" name="overview" value="4" />
          </div>
          <div className={styles.stateItem}>
            <h4>OFF - Disabled</h4>
            <Toggle checked={false} disabled={true} name="overview" value="5" />
          </div>
          <div className={styles.stateItem}>
            <h4>ON - Default</h4>
            <Toggle checked={true} state="default" name="overview" value="6" />
          </div>
          <div className={styles.stateItem}>
            <h4>ON - Hover</h4>
            <Toggle checked={true} state="hover" name="overview" value="7" />
          </div>
          <div className={styles.stateItem}>
            <h4>ON - Focus</h4>
            <Toggle checked={true} state="focus" name="overview" value="8" />
          </div>
          <div className={styles.stateItem}>
            <h4>ON - Pressed</h4>
            <Toggle checked={true} state="pressed" name="overview" value="9" />
          </div>
          <div className={styles.stateItem}>
            <h4>ON - Disabled</h4>
            <Toggle checked={true} disabled={true} name="overview" value="10" />
          </div>
        </div>
      </div>

      {/* Size Comparison */}
      <div className={styles.testSection}>
        <h3 className={styles.sectionTitle}>Size Comparison</h3>
        <div className={styles.sizeComparison}>
          <div className={styles.sizeItem}>
            <h4>Small</h4>
            <div className={styles.sizeToggleGroup}>
              <Toggle checked={false} size="small" name="size-comp-off" value="small-off" />
              <Toggle checked={true} size="small" name="size-comp-on" value="small-on" />
            </div>
          </div>
          <div className={styles.sizeItem}>
            <h4>Medium</h4>
            <div className={styles.sizeToggleGroup}>
              <Toggle checked={false} size="medium" name="size-comp-off" value="medium-off" />
              <Toggle checked={true} size="medium" name="size-comp-on" value="medium-on" />
            </div>
          </div>
          <div className={styles.sizeItem}>
            <h4>Large</h4>
            <div className={styles.sizeToggleGroup}>
              <Toggle checked={false} size="large" name="size-comp-off" value="large-off" />
              <Toggle checked={true} size="large" name="size-comp-on" value="large-on" />
            </div>
          </div>
        </div>
      </div>

      {/* Console Log Section */}
      <div className={styles.testSection}>
        <h3 className={styles.sectionTitle}>Console Logs</h3>
        <p className={styles.instruction}>
          Open your browser's developer console to see onChange events when you toggle switches.
        </p>
      </div>
    </div>
  );
};

export default ToggleTest;

