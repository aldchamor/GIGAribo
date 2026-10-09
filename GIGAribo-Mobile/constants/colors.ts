/**
 * Semantic design tokens for the mobile app.
 *
 * These tokens mirror the naming conventions used in web artifacts (index.css)
 * so that multi-artifact projects share a cohesive visual identity.
 *
 * Replace the placeholder values below with values that match the project's
 * brand. If a sibling web artifact exists, read its index.css and convert the
 * HSL values to hex so both artifacts use the same palette.
 *
 * To add dark mode, add a `dark` key with the same token names.
 * The useColors() hook will automatically pick it up.
 */

const colors = {
  light: {
    // Legacy aliases (kept for backward compatibility)
    text: '#17213C',
    tint: '#4D7EE8',

    // Core surfaces
    background: '#F7F8FC',
    foreground: '#17213C',

    // Cards / elevated surfaces
    card: '#FFFFFF',
    cardForeground: '#17213C',

    // Primary action color (buttons, links, active states)
    primary: '#4D7EE8',
    primaryForeground: '#ffffff',

    // Secondary / less-emphasis interactive surfaces
    secondary: '#EEF2FB',
    secondaryForeground: '#25345D',

    // Muted / subdued elements (dividers, timestamps, placeholders)
    muted: '#F0F2F7',
    mutedForeground: '#858DA0',

    // Accent highlights (badges, selected items, focus rings)
    accent: '#E7F3FC',
    accentForeground: '#1D3868',

    // Destructive actions (delete, error states)
    destructive: '#E05D61',
    destructiveForeground: '#ffffff',

    // Borders and input outlines
    border: '#E6E9F0',
    input: '#E6E9F0',
    navy: '#202D5B',
    sky: '#58B5E7',
    categoryBlue: '#EAF4FC',
    categoryGreen: '#E6F4EB',
    categoryPeach: '#FFF0E5',
    categoryPink: '#FBEAF0',
    categoryLavender: '#F1EDFA',
    categoryYellow: '#FFF6DE',
    modalScrim: 'rgba(12, 22, 50, 0.48)',
  },

  dark: {
    text: '#F3F5FB',
    tint: '#79A1FF',
    background: '#10182B',
    foreground: '#F3F5FB',
    card: '#19243A',
    cardForeground: '#F3F5FB',
    primary: '#79A1FF',
    primaryForeground: '#10182B',
    secondary: '#202D46',
    secondaryForeground: '#E6ECF9',
    muted: '#20283A',
    mutedForeground: '#A0ABC1',
    accent: '#243651',
    accentForeground: '#D8E9FF',
    destructive: '#E7777B',
    destructiveForeground: '#FFFFFF',
    border: '#2C3850',
    input: '#2C3850',
    navy: '#182543',
    sky: '#65BCEB',
    categoryBlue: '#203447',
    categoryGreen: '#1D392F',
    categoryPeach: '#3D3028',
    categoryPink: '#3C2B36',
    categoryLavender: '#312B44',
    categoryYellow: '#3B3524',
    modalScrim: 'rgba(5, 10, 24, 0.72)',
  },

  // Border radius (in px). Sync from the sibling web artifact's --radius
  // CSS variable. This value applies to cards, buttons, inputs, and modals.
  radius: 18,
};

export default colors;
