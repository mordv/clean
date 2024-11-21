import { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config = {
  darkMode: 'class', // переводим в режим определения dark мода (срабатывают dark: модификаторы) по наличию класса dark у родителя
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        d: {
          r: colors['red']['300'],
          g: colors['green']['300'],
          b: colors['blue']['300'],
          y: colors['yellow']['300'],
          m: colors['purple']['300'],
          c: colors['cyan']['300'],
          k: colors['gray']['300'],
        },
      },
      keyframes: {
        appear: {
          '0%': { transform: 'scale(0.62)', opacity: '0%' },
          '100%': { transform: 'scale(1)', opacity: '100%' },
        },
        disappear: {
          '0%': { transform: 'scale(1)', opacity: '100%' },
          '100%': { transform: 'scale(0.62)', opacity: '0%' },
        },
        shake: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(-1deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        // теперь в className можно писать animate-appear animate-disappear
        appear: 'appear 100ms ease-in',
        disappear: 'disappear 100ms ease-in',
        shake: 'shake 0.3s infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
