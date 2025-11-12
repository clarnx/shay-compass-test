/**
 * Layout and positioning constants used throughout the application
 */

export const LAYOUT_CONSTANTS = {
  /** Default viewport height fallback for SSR */
  DEFAULT_VIEWPORT_HEIGHT: 900,

  /** Navbar height in pixels */
  NAVBAR_HEIGHT: 100,

  /** Minimum viewport width in pixels */
  MIN_VIEWPORT_WIDTH: 290,

  /** Scroll threshold percentages */
  SCROLL_THRESHOLDS: {
    /** When hero navigation becomes sticky (60% of viewport) */
    HERO_NAV_STICKY: 0.6,
    /** When mobile navbar appears (70% of viewport) */
    MOBILE_NAV_APPEAR: 0.7,
  },

  /** Z-index values for layering */
  Z_INDEX: {
    NAVBAR: 40,
    HERO_NAV: 50,
    MOBILE_MENU_OVERLAY: 9999999,
  },

  /** Animation durations in milliseconds */
  ANIMATION_DURATION: {
    FAST: 100,
    NORMAL: 300,
    SLOW: 500,
  },
} as const;
