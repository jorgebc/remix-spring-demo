module.exports = {
  mode: 'jit', // this will enable Tailwind JIT compiler to make the build faster
  content: ['./app/**/*.{ts,tsx}'],
  darkMode: 'media', // Use media queries for dark mode, customize it as you want
  theme: {extend: {}}, // customize the theme however you want here
  variants: {}, // activate any variant you want here
  plugins: [], // add any plugin you need here
}
