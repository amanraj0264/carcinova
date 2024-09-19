module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '567px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      backgroundImage: {
        
        'heoo': "url('/src/Pages/image/video-img.jpg')",
        
      },
     

      fontFamily:{
        playfair :["Playfair Display", "serif"],
      },
      screens: {
        'xs': {'min':'320px','max':'566px'},
        // => @media (min-width: 992px) { ... }
      },

      colors: {
        "color-primary": "#15b9d9",
        "color-secondary": "#202135",
        "color-heading": "#efa286",
        "color-body": "#929292",
        "color-bg-card":"#faf9fb",
      },

      

    },
  },
  plugins: [],
}