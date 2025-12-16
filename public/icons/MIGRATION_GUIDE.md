# Icon Migration Guide

## Current Problem
You have Archive icons with 7 separate files:
- `size=14.svg`
- `size=16.svg`
- `size=20.svg`
- `size=24.png`
- `size=32.svg`
- `size=40.svg`
- `size=48.svg`

## Solution: Consolidate to Single SVG

### Step 1: Choose the Best SVG
Pick the highest quality/most detailed version (usually `size=48.svg` or `size=32.svg`)

### Step 2: Rename and Move
```bash
# Rename the best SVG to just the icon name
mv public/icons/size=48.svg public/icons/archive.svg
# Or if size=32 is better:
mv public/icons/size=32.svg public/icons/archive.svg
```

### Step 3: Remove Size-Specific Files
```bash
# Remove all size-specific files
rm public/icons/size=14.svg
rm public/icons/size=16.svg
rm public/icons/size=20.svg
rm public/icons/size=24.png
rm public/icons/size=32.svg
rm public/icons/size=40.svg
rm public/icons/size=48.svg
```

### Step 4: Update Usage
```jsx
// OLD (size-specific files):
<img src="/icons/size=14.svg" width="14" height="14" />
<img src="/icons/size=24.png" width="24" height="24" />

// NEW (single scalable file):
<Icon name="archive" size={14} />
<Icon name="archive" size={24} />
<Icon name="archive" size={48} />
```

### Step 5: Verify
Test the icon at all required sizes to ensure it looks good:
- 14px ✅
- 16px ✅
- 20px ✅
- 24px ✅
- 32px ✅
- 40px ✅
- 48px ✅

## Benefits
- **7 files → 1 file** (86% reduction)
- **200 icons × 7 sizes = 1,400 files → 200 files** (86% reduction)
- Easier maintenance
- Smaller repository
- Better performance

## When to Keep Separate Files

Only keep separate size files if:
1. **Icon design actually changes** at different sizes (e.g., simplified small version)
2. **PNG is required** for specific use cases (but prefer SVG)
3. **Optimization** is needed for specific pixel-perfect rendering

For 99% of cases, a single SVG file works perfectly!

