module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'site-bg': '#ffffff',
        'site-fg': '#000000',
        'site-fg-2': '#2a2a2a',
        'site-fg-3': '#6b6b6b',
        'site-hair': '#e5e5e5',
        'site-hair-strong': '#cfcfcf',
        'site-bg-2': '#f6f6f6',
      },
      fontFamily: {
        'display': ['Satoshi', '"Inter Tight"', 'system-ui', 'sans-serif'],
        'body':    ['Satoshi', '"Inter"', 'system-ui', 'sans-serif'],
        'mono':    ['Satoshi', '"Inter"', 'system-ui', 'sans-serif'],
        'serif':   ['Satoshi', '"Inter Tight"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'site': '1280px',
      },
    },
  },
  plugins: [],
}
