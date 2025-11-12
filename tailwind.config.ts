import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "dim",
      {
        mytheme: {
          primary: "#1f2937",
          "primary-content": "#ffffff",
          secondary: "#4b5563",
          "secondary-content": "#ffffff",
          accent: "#6b7280",
          "accent-content": "#ffffff",
          neutral: "#111827",
          "neutral-content": "#f9fafb",
          "base-100": "#ffffff",
          "base-200": "#f3f4f6",
          "base-300": "#e5e7eb",
          "base-content": "#1f2937",
          info: "#3b82f6",
          "info-content": "#ffffff",
          success: "#10b981",
          "success-content": "#ffffff",
          warning: "#f59e0b",
          "warning-content": "#ffffff",
          error: "#ef4444",
          "error-content": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
