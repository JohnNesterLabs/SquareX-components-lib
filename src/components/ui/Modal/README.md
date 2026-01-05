# Modal Component - Documentation

## Overview
A flexible modal dialog component that supports overlays, custom content, and predefined styles. It is designed to match the Figma "Success" modal but can be used for any dialog content.

## Design Specifications

### Visual Design (from Figma)
- **Background**: White (#FFFFFF) with rounded corners (24px).
- **Shadow**: Soft drop shadow (0px 8px 24px rgba(0, 0, 0, 0.08)).
- **Overlay**: Semi-transparent black (40% opacity) with blur.
- **Typography**: Host Grotesk.
- **Success State**: Includes a large green checkmark icon.

## Files Created

### 1. Modal.jsx
**Location:** `/src/components/ui/Modal/Modal.jsx`

**Props:**
- `isOpen` (boolean) - Controls visibility.
- `onClose` (function) - Callback for closing.
- `title` (string) - Main heading.
- `description` (string) - Subtext.
- `icon` (ReactNode) - Icon element (e.g., Success SVG).
- `actions` (Array|ReactNode) - Buttons or actions at the bottom.
- `size` (string) - 'small', 'medium', 'large'.
- `showCloseButton` (boolean) - Toggle 'X' button.

### 2. Modal.module.css
**Location:** `/src/components/ui/Modal/Modal.module.css`

**Styling:**
- Handles positioning, animations (fade in, slide up), and responsive layout.
- Scoped styles using CSS modules.

### 3. ModalTest.jsx
**Location:** `/src/components/ui/Modal/ModalTest.jsx`

**Test Sections:**
- **Success Modal**: Matches the Figma design exactly.
- **Simple Modal**: Demonstrates basic usage.

### 4. ModalTest.module.css
**Location:** `/src/components/ui/Modal/ModalTest.module.css`

## Usage Examples

### Basic Usage
```jsx
import Modal from './components/ui/Modal/Modal';

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Simple Modal"
  description="This is a description."
/>
```

### Success Modal (Figma Style)
```jsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Success!"
  description="Operation completed successfully."
  icon={<SuccessIcon />}
  actions={[
    <Button label="Cancel" style="neutral" />,
    <Button label="Confirm" style="primary" />
  ]}
/>
```

## Integration

To add to ComponentLibrary:

```javascript
// 1. Import
import Modal from './ui/Modal/Modal';
import ModalTest from './ui/Modal/ModalTest';

// 2. Add tab
{ id: 'modal', label: 'Modal' }

// 3. Add render function
const renderModalComponent = () => (
  <div className="component-section">
    <ModalTest />
  </div>
);

// 4. Add to switch statement
case 'modal':
  return renderModalComponent();
```

## Accessibility
- `role="dialog"` and `aria-modal="true"` attributes.
- Focus management (should be added for production).
- Close button has `aria-label`.
- Overlay click closes the modal.
