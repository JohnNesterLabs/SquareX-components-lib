# Icon Guide

## How to Add Icons from Figma

### Step 1: Export Icons from Figma
1. Select the icon in Figma
2. Right-click → "Copy as SVG" or "Export as SVG"
3. Save with descriptive name (e.g., `arrow-right.svg`, `close-icon.svg`)

### Step 2: Organize Icons

#### Base Icons
Place main icons in `/public/icons/`:
```
icons/
├── arrow-right.svg
├── close.svg
├── menu.svg
└── ...
```

#### Icon Variants
If an icon has multiple variants (states, sizes, styles), organize them:
```
icons/variants/
├── arrow-right/
│   ├── default.svg
│   ├── hover.svg
│   ├── active.svg
│   └── disabled.svg
└── close/
    ├── default.svg
    ├── hover.svg
    └── active.svg
```

### Step 3: Use Icons in Components

#### Option 1: Direct Image Tag
```jsx
<img src="/icons/icon-name.svg" alt="Icon" />
```

#### Option 2: Using Icon Component
```jsx
import Icon from './ui/Icon/Icon';

<Icon name="icon-name" variant="default" size="medium" />
```

## Icon Variants

### States
- `default` - Normal state
- `hover` - Hover state
- `active` - Active/selected state
- `disabled` - Disabled state

### Sizes
- `small` - 12px
- `medium` - 16px (default)
- `large` - 24px

### Styles
- `filled` - Filled version
- `outlined` - Outlined version

## Naming Convention

- Use lowercase
- Use hyphens for multiple words: `arrow-right.svg`
- Be descriptive: `close-icon.svg` not `x.svg`
- Keep names consistent across variants

