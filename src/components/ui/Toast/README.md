# Toast Component - Documentation

## Overview
A notification toast component used to provide feedback to the user. It supports Success, Warning, and Danger states, and can be used as a static element or a transient notification.

## Design Specifications

### Visual Design (from Figma)
- **Variants**: Success (Green), Warning (Yellow), Danger (Red).
- **Layout**: Icon (Left), Content (Middle), Close Button (Right).
- **Styling**: White background, rounded corners, soft shadow.
- **Icons**: Custom SVGs with colored circular backgrounds.

## Files Created

### 1. Toast.jsx
**Location:** `/src/components/ui/Toast/Toast.jsx`

**Props:**
- `type` (string) - 'success', 'warning', 'danger' (default: 'success').
- `title` (string) - The main heading text.
- `message` (string) - The description text.
- `onClose` (function) - Callback when the close button is clicked.
- `duration` (number) - Optional duration in milliseconds to auto-close.

### 2. Toast.module.css
**Location:** `/src/components/ui/Toast/Toast.module.css`

**Styling:**
- Defines styles for all variants.
- Handles layout and animations.
- Scoped styles using CSS modules.

### 3. ToastTest.jsx
**Location:** `/src/components/ui/Toast/ToastTest.jsx`

**Test Sections:**
- **Static Variants**: Displays all three types as seen in Figma.
- **Interactive Triggers**: Buttons to spawn transient toasts in the top-right corner.

### 4. ToastTest.module.css
**Location:** `/src/components/ui/Toast/ToastTest.module.css`

## Usage Examples

### Basic Usage
```jsx
import Toast from './components/ui/Toast/Toast';

<Toast 
  type="success" 
  title="Success" 
  message="Operation completed." 
/>
```

### Auto-Closing Toast
```jsx
<Toast 
  type="warning" 
  title="Warning" 
  message="Check your connection." 
  duration={3000}
  onClose={() => console.log('Closed')} 
/>
```

## Integration

To add to ComponentLibrary:

```javascript
// 1. Import
import Toast from './ui/Toast/Toast';
import ToastTest from './ui/Toast/ToastTest';

// 2. Add tab
{ id: 'toast', label: 'Toast' }

// 3. Add render function
const renderToastComponent = () => (
  <div className="component-section">
    <ToastTest />
  </div>
);

// 4. Add to switch statement
case 'toast':
  return renderToastComponent();
```

## Accessibility
- `role="alert"` attribute for screen readers.
- Close button has `aria-label`.
