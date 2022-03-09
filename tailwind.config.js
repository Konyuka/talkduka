module.exports = {
  // purge: [
  //   './src/**/*.{vue,js,ts,jsx,tsx}'
  // ],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading-font': ['Titillium Web', 'cursive'],
        'primary-font': ['Dosis', 'cursive'],
        'saiba-font': ['Staatliches', 'cursive'],
        'saibas-font': ['Cinzel', 'cursive']
      }
    }
  },
  plugins: []
}
