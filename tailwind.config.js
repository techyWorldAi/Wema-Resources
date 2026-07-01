/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#2F5D34',
          dark: '#1F3F22',
          light: '#4F8A3D',
          50: '#F1F6EF',
        },
        gold: {
          DEFAULT: '#D6A93B',
          deep: '#B8862A',
          light: '#E8C770',
        },
        cream: '#FAF9F4',
        ink: '#222A20',
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
      keyframes: {
        riselight: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        drawline: {
          '0%': { strokeDashoffset: '500' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        riselight: 'riselight 0.7s ease-out both',
        marquee: 'marquee 30s linear infinite',
        drawline: 'drawline 1.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}
