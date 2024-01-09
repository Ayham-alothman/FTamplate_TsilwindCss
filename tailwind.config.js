

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
            '110':'28rem',    
            '128':'32rem',
            '150':'48rem',
            '180':'60rem',
      }
    },
  },
  plugins: [],
}

