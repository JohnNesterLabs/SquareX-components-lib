# Icons Directory

This directory contains all icons used in the SquareX Dashboard design system.

## Folder Structure

```
icons/
├── README.md (this file)
├── [icon-name].svg (base icons)
└── variants/
    ├── [icon-name]/
    │   ├── default.svg
    │   ├── hover.svg
    │   ├── active.svg
    │   ├── disabled.svg
    │   └── [size]/
    │       ├── small.svg
    │       ├── medium.svg
    │       └── large.svg
```

## Icon Naming Convention

- Use lowercase with hyphens: `icon-name.svg`
- For variants, use the same base name with variant suffix: `icon-name-hover.svg`
- Or organize in variants folder: `variants/icon-name/default.svg`

## Current Icons

- check.svg
- chevron.svg
- dot.svg
- Ellipse 4181.svg
- File.svg
- Icon.svg
- Loader.svg
- search.svg
- Star.svg
- Vector.svg
- X.svg

## Adding New Icons

1. Export icons from Figma as SVG
2. Place base icon in `icons/` folder
3. Place variants in `icons/variants/[icon-name]/` folder
4. Update this README with the new icon name

