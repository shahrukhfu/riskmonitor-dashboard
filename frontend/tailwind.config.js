/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondary-fixed": "#d4e4fa",
        "inverse-primary": "#595f66",
        "secondary": "#b9c8de",
        "on-tertiary-fixed": "#241a11",
        "surface-container-highest": "#353535",
        "inverse-surface": "#e5e2e2",
        "error-container": "#93000a",
        "surface-bright": "#393939",
        "primary": "#ffffff",
        "surface-container-high": "#2a2a2a",
        "inverse-on-surface": "#313031",
        "primary-fixed-dim": "#c1c7cf",
        "surface-container-low": "#1b1b1c",
        "on-tertiary-container": "#706256",
        "on-surface-variant": "#c5c6cb",
        "surface-container-lowest": "#0e0e0f",
        "surface-dim": "#131314",
        "surface-variant": "#353535",
        "error": "#ffb4ab",
        "tertiary-container": "#f3dfd0",
        "tertiary-fixed-dim": "#d6c3b5",
        "on-secondary-fixed-variant": "#39485a",
        "on-surface": "#e5e2e2",
        "surface-tint": "#c1c7cf",
        "on-primary-fixed": "#161c22",
        "on-secondary-container": "#a7b6cc",
        "on-tertiary": "#3a2e24",
        "on-primary-fixed-variant": "#41474e",
        "surface": "#131314",
        "on-secondary-fixed": "#0d1c2d",
        "primary-fixed": "#dde3eb",
        "on-primary": "#2b3137",
        "outline": "#8e9195",
        "background": "#131314",
        "on-secondary": "#233143",
        "on-tertiary-fixed-variant": "#51443a",
        "secondary-container": "#39485a",
        "secondary-fixed-dim": "#b9c8de",
        "primary-container": "#dde3eb",
        "on-background": "#e5e2e2",
        "on-error": "#690005",
        "on-primary-container": "#5f656c",
        "tertiary-fixed": "#f3dfd0",
        "outline-variant": "#44474a",
        "tertiary": "#ffffff",
        "surface-container": "#201f20",
        "on-error-container": "#ffdad6"
      },
      borderRadius: {
        "DEFAULT": "0.125rem", // sm (2px)
        "lg": "0.25rem",     // md (4px)
        "xl": "0.5rem",      // lg (8px)
        "full": "9999px"
      },
      spacing: {
        "stack-xs": "0.25rem",
        "stack-md": "1rem",
        "stack-sm": "0.5rem",
        "container-margin": "2rem",
        "gutter": "1rem",
        "stack-lg": "1.5rem"
      },
      fontFamily: {
        "headline-md": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "label-sm": ["Inter", "sans-serif"],
        "display-lg": ["Inter", "sans-serif"],
        "label-caps": ["Inter", "sans-serif"],
        "data-lg": ["Inter", "sans-serif"],
        "headline-md-mobile": ["Inter", "sans-serif"]
      },
      fontSize: {
        "headline-md": ["20px", { lineHeight: "1.4", letterSpacing: "-0.01em", fontWeight: "500" }],
        "body-md": ["14px", { lineHeight: "1.6", letterSpacing: "0em", fontWeight: "400" }],
        "label-sm": ["12px", { lineHeight: "1.4", letterSpacing: "0em", fontWeight: "400" }],
        "display-lg": ["32px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        "label-caps": ["11px", { lineHeight: "1.2", letterSpacing: "0.1em", fontWeight: "700" }],
        "data-lg": ["24px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-md-mobile": ["18px", { lineHeight: "1.3", fontWeight: "600" }]
      }
    },
  },
  plugins: [],
}
