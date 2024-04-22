/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
      colors: {
         transparent: 'transparent',
         current: 'currentColor',
         'greenwhite': '#EDF1EF',
         'grey': {
            50: '#FCFCFD',
            // 100: '#F6F8F9',
            200: '#EBEDEF',
            // 300: '#D5D7D8', //or D8D8D8??
            // 400: '#B5B8BA',
            // 500: '#969A9C',
            // 600: '#757B7E',
            // 700: '#545C61',
            800: '#364045',
            900: '#171D20',
            950: '#0E1114',
         },
         'red': {
            // 50: '#FFFAFA',
            // 100: '#FCDFDB',
            // 200: '#F3BAB2',
            // 300: '#DC877C',
            // 400: '#C85D51',
            // 500: '#B73D2E',
            600: '#A82515',
            700: '#911506',
            800: '#6C0C00',
            // 900: '#4D0800',
            // 950: '#240400',
         },
      },

      extend: {},
   },
   plugins: [],
}

