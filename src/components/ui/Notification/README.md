# Notification Component - Documentation

## Overview
A notification counter/badge component used to display counts or status indicators. It supports different variants (primary, neutral, subtle) and sizes (medium, small), and automatically handles overflow counts (e.g., "99+").

## Design Specifications

### Visual Design (from Figma)
- **Primary**: Light purple background (#ECEAF9) with dark purple text (#4432BF)
- **Neutral**: Light grey background (#E3E5E8) with dark grey text (#2F353B)
- **Subtle**: Very light grey background (#F0F0F0) with light grey text (#A6A6A6)
- **Shape**: Pill/Capsule (Border radius 100px)
- **Typography**: Host Grotesk, Medium weight (500)

### Sizes
- **Small**: 20px height, 12px font size, 4px 8px padding
- **Medium**: 28px height, 14px font size, 6px 12px padding

## Files Created

### 1. Notification.jsx
**Location:** `/src/components/ui/Notification/Notification.jsx`

**Props:**
- `count` (number|string, default: 0) - The number to display
- `variant` (string, default: 'primary') - 'primary', 'neutral', 'subtle'
- `size` (string, default: 'medium') - 'medium', 'small'
- `maxCount` (number, default: 99) - The maximum number to display before showing '+'
- `className` (string) - Additional CSS classes

### 2. Notification.module.css
**Location:** `/src/components/ui/Notification/Notification.module.css`

**Styling:**
- Defines styles for all variants and sizes
- Includes hover effects
- Uses CSS modules for scoped styling

### 3. NotificationTest.jsx
**Location:** `/src/components/ui/Notification/NotificationTest.jsx`

**Test Sections:**
- **Variants**: Showcases all three visual styles
- **Sizes**: Demonstrates both sizes
- **Count Behavior**: Tests single digit, double digit, max count, and overflow
- **Context Examples**: Shows usage in typical UI contexts (Inbox, Messages, etc.)

### 4. NotificationTest.module.css
**Location:** `/src/components/ui/Notification/NotificationTest.module.css`

## Usage Examples

### Basic Usage
```jsx
import Notification from './components/ui/Notification/Notification';

<Notification count={5} />
```

### Different Variants
```jsx
<Notification count={12} variant="primary" />
<Notification count={0} variant="neutral" />
<Notification count={99} variant="subtle" />
```

### Different Sizes
```jsx
<Notification count={5} size="medium" />
<Notification count={5} size="small" />
```

### Handling Overflow
```jsx
// Displays "99+"
<Notification count={150} />

// Displays "9+"
<Notification count={15} maxCount={9} />
```

## Integration

To add to ComponentLibrary:

```javascript
// 1. Import
import Notification from './ui/Notification/Notification';
import NotificationTest from './ui/Notification/NotificationTest';

// 2. Add tab
{ id: 'notification', label: 'Notification' }

// 3. Add render function
const renderNotificationComponent = () => (
  <div className="component-section">
    <NotificationTest />
  </div>
);

// 4. Add to switch statement
case 'notification':
  return renderNotificationComponent();
```

## Accessibility
- Uses semantic `span` element
- Text contrast ratios meet WCAG guidelines
- Scalable text with relative units (if implemented globally)

## Browser Support
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers
