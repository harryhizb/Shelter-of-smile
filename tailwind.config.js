/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFFBF0',
          100: '#FFF6D3',
          200: '#FFEDA6',
          300: '#FFE379',
          400: '#FFD954',
          500: '#FFD54F',
          600: '#FFCA28',
          700: '#FFB300',
          800: '#FF8F00',
          900: '#FF6F00',
        },
        secondary: {
          50: '#E8F8FF',
          100: '#B3E8FF',
          200: '#81D8FF',
          300: '#4FC3F7',
          400: '#29B6F6',
          500: '#03A9F4',
          600: '#039BE5',
          700: '#0288D1',
          800: '#0277BD',
          900: '#01579B',
        },
        warm: {
          50: '#FEFEFE',
          100: '#F9F9F9',
          200: '#F5F5F5',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
        },
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Lato', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};