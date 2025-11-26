module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-black': '#0B0B15',
        'cosmic-purple': '#6D28D9',
        'starlight-white': '#F8FAFC',
        'nebula-blue': '#3B82F6',
        'void-gray': '#1F2937',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(109, 40, 217, 0.5)' },
          '50%': { opacity: .8, boxShadow: '0 0 10px rgba(109, 40, 217, 0.2)' },
        }
      }
    },
  },
  plugins: [],
}
