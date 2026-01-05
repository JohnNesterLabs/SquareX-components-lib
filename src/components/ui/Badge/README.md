# Badge Component - Documentation

## Overview
A versatile badge component used to display status, labels, or tags. It supports multiple variants (active, inactive, default) and sizes (small, medium, large), matching the Figma design specifications.

## Design Specifications

### Visual Design (from Figma)
- **Active**: Light green background (#d4f4dd) with dark green text (#1a5d2e)
- **Inactive**: Gray background (#e8e8e8) with dark gray text (#5a5a5a)
- **Default**: White background (#ffffff) with gray border (#d6dadf) and dark text (#2f353b)
- **Border Radius**: 16px (Pill shape)
- **Typography**: Host Grotesk, Medium weight (500)

### Sizes
- **Small**: 24px height, 12px font size
- **Medium**: 32px height, 14px font size
- **Large**: 40px height, 16px font size

## Files Created

### 1. Badge.jsx
**Location:** `/src/components/ui/Badge/Badge.jsx`

**Props:**
- `label` (string, default: 'Badge') - Text to display
- `type` (string, default: 'default') - 'active', 'inactive', 'default'
- `size` (string, default: 'medium') - 'small', 'medium', 'large'
- `className` (string) - Additional CSS classes

### 2. Badge.module.css
**Location:** `/src/components/ui/Badge/Badge.module.css`

**Styling:**
- Defines styles for all types and sizes
- Includes hover effects
- Uses CSS modules for scoped styling

### 3. BadgeTest.jsx
**Location:** `/src/components/ui/Badge/BadgeTest.jsx`

**Test Sections:**
- **Badge Types**: Showcases all three variants
- **Badge Sizes**: Demonstrates all sizes for each variant
- **Common Use Cases**: Real-world examples (User Status, Account Status, etc.)
- **Custom Labels**: Examples with various text content
- **In Context Examples**: How badges look within other UI elements

### 4. BadgeTest.module.css
**Location:** `/src/components/ui/Badge/BadgeTest.module.css`

## Usage Examples

### Basic Usage
```jsx
import Badge from './components/ui/Badge/Badge';

<Badge label="Active" type="active" />
```

### Different Types
```jsx
<Badge label="Enabled" type="active" />
<Badge label="Disabled" type="inactive" />
<Badge label="Neutral" type="default" />
```

### Different Sizes
```jsx
<Badge label="Small" size="small" />
<Badge label="Medium" size="medium" />
<Badge label="Large" size="large" />
```

### Custom Styling
```jsx
<Badge label="Custom" className="my-custom-class" />
```

## Integration

To add to ComponentLibrary:

```javascript
// 1. Import
import Badge from './ui/Badge/Badge';
import BadgeTest from './ui/Badge/BadgeTest';

// 2. Add tab
{ id: 'badge', label: 'Badge' }

// 3. Add render function
const renderBadgeComponent = () => (
  <div className="component-section">
    <BadgeTest />
  </div>
);

// 4. Add to switch statement
case 'badge':
  return renderBadgeComponent();
```

## Accessibility
- Uses semantic `span` element
- Text contrast ratios meet WCAG guidelines for most cases (verify specific color combinations if modifying)
- Scalable text with `rem` or relative units (if implemented in global styles, currently using px for precision matching Figma)

## Browser Support
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers
