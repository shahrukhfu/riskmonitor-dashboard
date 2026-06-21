---
name: Institutional Risk Ledger
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1b1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e2'
  on-surface-variant: '#c5c6cb'
  inverse-surface: '#e5e2e2'
  inverse-on-surface: '#313031'
  outline: '#8e9195'
  outline-variant: '#44474a'
  surface-tint: '#c1c7cf'
  primary: '#ffffff'
  on-primary: '#2b3137'
  primary-container: '#dde3eb'
  on-primary-container: '#5f656c'
  inverse-primary: '#595f66'
  secondary: '#b9c8de'
  on-secondary: '#233143'
  secondary-container: '#39485a'
  on-secondary-container: '#a7b6cc'
  tertiary: '#ffffff'
  on-tertiary: '#3a2e24'
  tertiary-container: '#f3dfd0'
  on-tertiary-container: '#706256'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dde3eb'
  primary-fixed-dim: '#c1c7cf'
  on-primary-fixed: '#161c22'
  on-primary-fixed-variant: '#41474e'
  secondary-fixed: '#d4e4fa'
  secondary-fixed-dim: '#b9c8de'
  on-secondary-fixed: '#0d1c2d'
  on-secondary-fixed-variant: '#39485a'
  tertiary-fixed: '#f3dfd0'
  tertiary-fixed-dim: '#d6c3b5'
  on-tertiary-fixed: '#241a11'
  on-tertiary-fixed-variant: '#51443a'
  background: '#131314'
  on-background: '#e5e2e2'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  data-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0em
  headline-md-mobile:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.3'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-margin: 2rem
  gutter: 1rem
  stack-xs: 0.25rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 1.5rem
---

## Brand & Style
The design system is engineered for high-stakes financial environments where clarity and precision are paramount. The aesthetic is rooted in **Corporate Minimalism**, utilizing a deep matte palette to reduce eye strain during long-term monitoring while highlighting critical semantic data. 

The emotional response is one of controlled authority and elite performance. It avoids unnecessary decoration, favoring razor-thin dividers and intentional whitespace to organize complex data sets. This "High-End Dark" approach positions the product as a sophisticated tool for institutional analysts who value substance over flourish.

## Colors
The palette is built on a foundation of "Deep Matte Charcoal" to create a void-like background that allows data to sit in the foreground. 

- **Surfaces:** Use the Subtle Slate Grey for card containers and elevated panels.
- **Borders:** Dividers must be kept at 1px width using the muted translucent grey to maintain a crisp, technical look.
- **Typography:** Use Off-White for primary headings and data values. Use Muted Cool Grey for metadata, helper text, and inactive states.
- **Semantics:** Risks are conveyed through deep, saturated tones rather than bright neons to preserve the professional, "high-end" atmosphere.

## Typography
This design system utilizes **Inter** across all levels to ensure maximum legibility and a systematic, utilitarian feel. 

Key typographic principles:
- **Numerical Precision:** Data points and currency values should use `data-lg` with tightened letter spacing for a "taped-out" ticker appearance.
- **Information Architecture:** Use `label-caps` for section headers and table column headers. The 10% letter spacing (tracking) on uppercase labels is essential for readability at small scales.
- **Hierarchy:** Primary emphasis is always placed on the numerical value, followed by its descriptive label.

## Layout & Spacing
The system employs a **12-column fluid grid** for the main dashboard content, allowing charts and data tables to expand based on viewport width. 

- **Margins:** A generous 32px (2rem) safe area around the screen perimeter ensures the interface feels "premium" and uncrowded.
- **Rhythm:** An 8px base unit governs all spatial relationships. 
- **Density:** While whitespace is "ample" between major modules, internal card padding should remain tight (16px to 24px) to maintain high data density.
- **Mobile:** On smaller screens, the 12-column grid collapses to a single column, and the container margins reduce to 16px.

## Elevation & Depth
Depth is communicated through **Tonal Layering** rather than traditional drop shadows. This maintains the "matte" aesthetic and feels more modern and digital-native.

- **Level 0 (Base):** Deep Matte Charcoal (#121417). Used for the canvas.
- **Level 1 (Surface):** Subtle Slate Grey (#1E2126). Used for cards, navigation sidebars, and header bars.
- **Overlays:** For modals or dropdowns, use the Surface color with a 1px border in the muted grey (#2D3139). A very subtle, 20% opacity black shadow can be used only to separate floating elements from the surface immediately beneath them.

## Shapes
The shape language is "Soft" (4px - 8px radius) to suggest precision and technicality. 

- **Cards & Modules:** 8px (`rounded-lg`) for primary dashboard cards.
- **Small Elements:** 4px (`rounded-sm`) for buttons, input fields, and tags.
- **Strictness:** Avoid pill-shaped buttons; use the 4px radius consistently to maintain the architectural, grid-based feel of the fintech aesthetic.

## Components
Consistent execution of these components ensures the "elite" feel of the design system:

- **Buttons:** Primary buttons use a ghost style (silver border and text) or a solid silver background with charcoal text for high-action items. 
- **Cards:** No shadows. Use the 1px border (#2D3139) to define edges against the background. Headers within cards should have a subtle bottom border.
- **Data Tables:** Row hover states should use a slightly lighter slate (#252930). Cell padding should be vertical-aligned center.
- **Risk Badges:** Small, rectangular chips with a low-opacity background of the semantic color and a solid text color (e.g., Deep Crimson text on a 15% opacity Crimson background).
- **Inputs:** Dark backgrounds (#121417) with a 1px border. Focus state is a 1px silver border—no glow.
- **Charts:** Use thin lines (1.5px) for line charts. Fill areas should use a subtle vertical gradient from the semantic color to transparent.