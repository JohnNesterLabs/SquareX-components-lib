# Icon Organization Strategy

## Problem
Having separate files for each icon size (e.g., `archive-size-14.svg`, `archive-size-16.svg`, etc.) leads to:
- 200 icons × 7 sizes = 1,400 files
- Difficult to maintain
- Large repository size
- Redundant code

## Solution: Single SVG + CSS Scaling

### Best Practice: Use One SVG File Per Icon
SVG (Scalable Vector Graphics) is **vector-based** and can be scaled to any size without quality loss.

### Recommended Folder Structure

```
public/icons/
├── archive.svg          # Single SVG file (scalable)
├── check.svg
├── chevron.svg
├── star.svg
└── ...
```

### How It Works
1. **One SVG file per icon** - Contains the vector paths
2. **CSS/React handles sizing** - Use `width` and `height` props
3. **SVG viewBox** - Ensures proper scaling at any size

### Example Usage

```jsx
// Instead of: <img src="/icons/archive-size-14.svg" />
// Use: <Icon name="archive" size={14} />

<Icon name="archive" size={14} />   // 14px
<Icon name="archive" size={16} />   // 16px
<Icon name="archive" size={24} />   // 24px
<Icon name="archive" size={32} />   // 32px
```

### When to Use Multiple Files

Only create separate size files if:
1. **Icon design changes** at different sizes (e.g., simplified version for small sizes)
2. **PNG format** is required (but prefer SVG)
3. **Optimization needed** for specific sizes (rare)

### Migration Plan

1. **Keep one master SVG** per icon (usually the largest or most detailed)
2. **Remove size-specific files** (archive-size-14.svg, etc.)
3. **Update Icon component** to handle dynamic sizing
4. **Test at all required sizes** to ensure quality

### Benefits

✅ **200 icons = 200 files** (not 1,400)
✅ **Easy to maintain** - update one file
✅ **Smaller repository**
✅ **Better performance** - fewer HTTP requests
✅ **Flexible** - can use any size dynamically

