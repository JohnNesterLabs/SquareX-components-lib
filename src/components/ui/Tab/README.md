# Tab Component - Documentation

## Overview
A navigation tab component that supports active, default, and disabled states. It integrates the `Notification` component to display counts or badges alongside the tab label.

## Design Specifications

### Visual Design (from Figma)
- **Active**: Purple text (#4432BF) with purple underline and primary notification badge.
- **Default**: Grey text (#5F6D7E) with neutral notification badge.
- **Disabled**: Light grey text (#A6A6A6) with subtle notification badge.
- **Typography**: Host Grotesk, Medium/SemiBold.
- **Underline**: 2px height, purple, spans content width.

## Files Created

### 1. Tab.jsx
**Location:** `/src/components/ui/Tab/Tab.jsx`

**Props:**
- `label` (string) - The text label for the tab.
- `count` (number|string) - Optional count to display in the notification badge.
- `isActive` (boolean, default: false) - Whether the tab is currently active.
- `disabled` (boolean, default: false) - Whether the tab is disabled.
- `onClick` (function) - Callback when tab is clicked.
- `className` (string) - Additional CSS classes.

### 2. Tab.module.css
**Location:** `/src/components/ui/Tab/Tab.module.css`

**Styling:**
- Defines styles for active, default, and disabled states.
- Handles the underline animation and positioning.
- Scoped styles using CSS modules.

### 3. TabTest.jsx
**Location:** `/src/components/ui/Tab/TabTest.jsx`

**Test Sections:**
- **States**: Active, Default, Disabled.
- **Interactive Tabs**: A working example of tab switching.
- **Variations**: Label only, with count, long labels.

### 4. TabTest.module.css
**Location:** `/src/components/ui/Tab/TabTest.module.css`

## Usage Examples

### Basic Usage
```jsx
import Tab from './components/ui/Tab/Tab';

<Tab label="Overview" isActive={true} />
```

### With Count
```jsx
<Tab label="Messages" count={5} isActive={false} />
```

### Interactive List
```jsx
const [activeTab, setActiveTab] = useState('tab1');

<div className="tab-list">
  <Tab 
    label="Tab 1" 
    isActive={activeTab === 'tab1'} 
    onClick={() => setActiveTab('tab1')} 
  />
  <Tab 
    label="Tab 2" 
    isActive={activeTab === 'tab2'} 
    onClick={() => setActiveTab('tab2')} 
  />
</div>
```

## Integration

To add to ComponentLibrary:

```javascript
// 1. Import
import Tab from './ui/Tab/Tab';
import TabTest from './ui/Tab/TabTest';

// 2. Add tab
{ id: 'tab', label: 'Tab' }

// 3. Add render function
const renderTabComponent = () => (
  <div className="component-section">
    <TabTest />
  </div>
);

// 4. Add to switch statement
case 'tab':
  return renderTabComponent();
```

## Accessibility
- Uses semantic `button` element with `role="tab"`.
- `aria-selected` attribute indicates active state.
- Keyboard accessible (Tab to focus, Enter/Space to activate).
