/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'bright-red': 'hsl(var(--color-bright-red) / <alpha-value>)',
        'dark-blue': 'hsl(var(--color-dark-blue) / <alpha-value>)',
        'grayish-dark-blue': 'hsl(var(--color-grayish-dark-blue) / <alpha-value>)',
        'light-grey': 'hsl(var(--color-light-grey) / <alpha-value>)',
        'slightly-desaturated-cyan': 'hsl(var(--color-slightly-desaturated-cyan) / <alpha-value>)',
        'very-light-grey': 'hsl(var(--color-very-light-grey) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}

