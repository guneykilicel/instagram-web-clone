/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brand: '#0095f6',
        facebook: '#385185',
        link: '#00376b',
        input: '#fafafa'
      },
      backgroundImage: {
       
        'logo-pattern': "url('../src/assets/images/instaBG.png')",
    
      }
    }
  },
  plugins: [],
}
