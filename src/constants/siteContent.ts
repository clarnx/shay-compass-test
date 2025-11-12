/**
 * Site-wide content and copy used throughout the application
 */

export const SITE_CONTENT = {
  HERO: {
    TITLE: 'Building Communities, Creating Value',
    SUBTITLE: 'Premier Real Estate Development & Investment Solutions',
    BACKGROUND_IMAGE: '/background-pgh.webp',
    BACKGROUND_POSITION: '65% center',
  },

  SECTIONS: {
    ABOUT: {
      ID: 'about',
      TITLE: 'About Shay Compass',
    },
    PROJECTS: {
      ID: 'projects',
      TITLE: 'Featured Developments',
    },
    CONTACT: {
      ID: 'contact',
      TITLE: 'Start Your Journey',
    },
  },

  CONTACT_FORM: {
    NAME: {
      LABEL: 'Full Name',
      PLACEHOLDER: 'Enter your full name',
    },
    EMAIL: {
      LABEL: 'Email Address',
      PLACEHOLDER: 'your.email@example.com',
    },
    MESSAGE: {
      LABEL: 'How Can We Help?',
      PLACEHOLDER: 'Tell us about your property goals, investment interests, or development needs...',
    },
    SUBMIT_BUTTON: 'Request Consultation',
    HONEYPOT_LABEL: "Don't fill this out",
  },

  ARIA_LABELS: {
    HAMBURGER_MENU: 'Hambuger Nav Menu',
    MOBILE_MENU_CLOSE: 'Close mobile menu',
  },
} as const;
