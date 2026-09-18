/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        loj: {
          blue: {
            DEFAULT: '#1890ff',
            dark: '#096dd9',
            light: '#e6f7ff',
          },
          green: {
            DEFAULT: '#52c41a',
            dark: '#389e0d',
            light: '#f6ffed',
          },
          orange: {
            DEFAULT: '#fa8c16',
            light: '#fff7e6',
          },
          yellow: {
            DEFAULT: '#fadb14',
            light: '#feffe6',
          },
          red: {
            DEFAULT: '#f5222d',
            light: '#fff1f0',
          },
          purple: {
            DEFAULT: '#722ed1',
            light: '#f9f0ff',
          },
          bg: {
            light: '#f4f6f9',
            dark: '#0f172a',
          },
          card: {
            light: '#ffffff',
            dark: '#1e293b',
          },
          border: {
            light: '#e5e7eb',
            dark: '#334155',
          },
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
