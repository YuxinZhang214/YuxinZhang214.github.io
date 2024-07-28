module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#f5f5f5', 
      },
      fontFamily: {
        'satoshi-light': ['Satoshi-Light', 'sans-serif'],
        'satoshi-lightitalic': ['Satoshi-LightItalic', 'sans-serif'],
        'satoshi-regular': ['Satoshi-Regular', 'sans-serif'],
        'satoshi-italic': ['Satoshi-Italic', 'sans-serif'],
        'satoshi-medium': ['Satoshi-Medium', 'sans-serif'],
        'satoshi-mediumitalic': ['Satoshi-MediumItalic', 'sans-serif'],
        'satoshi-bold': ['Satoshi-Bold', 'sans-serif'],
        'satoshi-bolditalic': ['Satoshi-BoldItalic', 'sans-serif'],
        'satoshi-black': ['Satoshi-Black', 'sans-serif'],
        'satoshi-blackitalic': ['Satoshi-BlackItalic', 'sans-serif'],
        'satoshi-variable': ['Satoshi-Variable', 'sans-serif'],
        'satoshi-variableitalic': ['Satoshi-VariableItalic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}