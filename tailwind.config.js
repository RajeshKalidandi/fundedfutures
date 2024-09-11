module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0052CC',
        accent: '#36B37E',
        neutral: '#6B778C',
        background: '#FFFFFF',
        text: '#172B4D',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        roboto: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}