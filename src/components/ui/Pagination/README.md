# Pagination Component - Documentation

## Overview
A fully functional pagination component matching the Figma design. Supports Previous/Next buttons, page numbers with ellipsis for large ranges, and complete accessibility.

## Design Specifications

### Visual Design (from Figma)
- **Active Page**: Purple background (#4432bf) with white text
- **Inactive Pages**: Transparent background with dark text (#2f353b)
- **Hover State**: Light purple background (rgba(68, 50, 191, 0.08))
- **Previous/Next Buttons**: Text + icon, disabled when at boundaries
- **Ellipsis**: Shows "..." for large page ranges
- **Border Radius**: 6px for all buttons
- **Spacing**: 8px between main elements, 4px between page numbers

## Files Created

### 1. Pagination.jsx
**Location:** `/src/components/ui/Pagination/Pagination.jsx`

**Props:**
- `currentPage` (number, default: 1) - Current active page (1-indexed)
- `totalPages` (number, default: 1) - Total number of pages
- `onPageChange` (function) - Callback when page changes, receives page number
- `siblingCount` (number, default: 1) - Number of page buttons on each side of current
- `showPrevNext` (boolean, default: true) - Whether to show Previous/Next buttons
- `className` (string) - Additional CSS classes

**Features:**
- ✅ Smart ellipsis algorithm
- ✅ Previous/Next navigation
- ✅ Disabled states for boundaries
- ✅ Keyboard accessible
- ✅ ARIA labels for screen readers
- ✅ Click handlers for all buttons
- ✅ Responsive design

### 2. Pagination.module.css
**Location:** `/src/components/ui/Pagination/Pagination.module.css`

**Styling:**
- Active page: Purple (#4432bf)
- Hover effects on all interactive elements
- Disabled state styling
- Focus visible outlines
- Responsive adjustments for mobile

### 3. PaginationTest.jsx
**Location:** `/src/components/ui/Pagination/PaginationTest.jsx`

**Test Sections:**
1. **Interactive Testing** - 4 examples with different page counts
2. **Configuration Options** - Various prop combinations
3. **Visual States** - All possible states
4. **Real-world Example** - Data table with pagination

### 4. PaginationTest.module.css
**Location:** `/src/components/ui/Pagination/PaginationTest.module.css`

## Usage Examples

### Basic Usage
```jsx
import Pagination from './components/ui/Pagination/Pagination';

function MyComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  
  return (
    <Pagination
      currentPage={currentPage}
      totalPages={10}
      onPageChange={(page) => setCurrentPage(page)}
    />
  );
}
```

### Without Previous/Next Buttons
```jsx
<Pagination
  currentPage={currentPage}
  totalPages={10}
  showPrevNext={false}
  onPageChange={(page) => setCurrentPage(page)}
/>
```

### Custom Sibling Count
```jsx
<Pagination
  currentPage={currentPage}
  totalPages={50}
  siblingCount={2}  // Shows 2 pages on each side
  onPageChange={(page) => setCurrentPage(page)}
/>
```

### With Data Table
```jsx
function DataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 200;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = allItems.slice(startIndex, endIndex);
  
  return (
    <div>
      <table>
        {currentItems.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
          </tr>
        ))}
      </table>
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
      
      <p>Showing {startIndex + 1}-{endIndex} of {totalItems} items</p>
    </div>
  );
}
```

## Ellipsis Algorithm

The component uses a smart algorithm to show ellipsis:

### Small page count (≤ 7 pages)
Shows all pages: `1 2 3 4 5 6 7`

### Large page count - Start
`1 2 3 ... 68` (when on page 1-3)

### Large page count - Middle
`1 ... 34 35 36 ... 68` (when on page 35)

### Large page count - End
`1 ... 66 67 68` (when on page 66-68)

## Accessibility Features

✅ **ARIA Labels**
- `aria-label` on Previous/Next buttons
- `aria-label` on page buttons
- `aria-current="page"` on active page

✅ **Keyboard Navigation**
- All buttons are keyboard accessible
- Focus visible outlines
- Proper tab order

✅ **Disabled States**
- Previous button disabled on first page
- Next button disabled on last page
- Proper `disabled` attribute

## Responsive Design

### Desktop (> 640px)
- Full Previous/Next button text
- All page numbers visible
- 8px spacing

### Mobile (≤ 640px)
- Previous/Next text hidden (icons only)
- Smaller button sizes
- 4px spacing
- Maintains functionality

## Testing Checklist

When using the PaginationTest component, verify:

- ✅ Clicking page numbers changes current page
- ✅ Previous button navigates backward
- ✅ Next button navigates forward
- ✅ Previous disabled on first page
- ✅ Next disabled on last page
- ✅ Ellipsis appears correctly
- ✅ Active page has purple background
- ✅ Hover effects work on all buttons
- ✅ Console logs show page changes
- ✅ Responsive design works on mobile
- ✅ Keyboard navigation works
- ✅ Focus outlines visible

## Integration

To add to ComponentLibrary:

```javascript
// 1. Import
import Pagination from './ui/Pagination/Pagination';
import PaginationTest from './ui/Pagination/PaginationTest';

// 2. Add tab
{ id: 'pagination', label: 'Pagination' }

// 3. Add render function
const renderPaginationComponent = () => (
  <div className="component-section">
    <PaginationTest />
  </div>
);

// 4. Add to switch statement
case 'pagination':
  return renderPaginationComponent();
```

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Performance

- Lightweight component (~200 lines)
- No external dependencies
- Efficient re-rendering
- Optimized ellipsis calculation

## Future Enhancements

Potential additions:
- [ ] Jump to page input
- [ ] Items per page selector
- [ ] Compact mode
- [ ] Different color themes
- [ ] Animation transitions
