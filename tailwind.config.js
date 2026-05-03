module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'site-bg': 'oklch(98.5% 0.004 80)',
        'site-fg': 'oklch(20% 0.01 80)',
        'site-accent': 'oklch(55% 0.12 35)',
      },
      fontFamily: {
        'display': ['"Inter Tight"', '"Inter"', 'system-ui', 'sans-serif'],
        'body': ['"Inter"', 'system-ui', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        'serif': ['"Source Serif 4"', 'Georgia', 'serif'],
        // keep satoshi for any legacy references
        'satoshi-regular': ['Satoshi-Regular', 'sans-serif'],
        'satoshi-medium': ['Satoshi-Medium', 'sans-serif'],
        'satoshi-bold': ['Satoshi-Bold', 'sans-serif'],
      },
      maxWidth: {
        'site': '1280px',
      },
    },
  },
  plugins: [],
}
