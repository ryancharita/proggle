import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        green: {
          100: '#EDF2EB',
          200: '#C5E5B4',
          300: '#99CC7D',
          400: '#84BA64',
          500: '#5FA04E',
          600: '#417E38',
          700: '#2C682C',
          800: '#2C682C',
          900: '#1A3F1D',
        },
        neutral: {
          100: '#F6F7F9',
          200: '#E9EDF0',
          300: '#D9E1E4',
          400: '#CBD4D9',
          500: '#B1BCC2',
          600: '#929FA5',
          700: '#6E7B83',
          800: '#556066',
          900: '#2C3437',
          950: '#0D121C',
        },
        danger: {
          100: '#FBF1F0',
          200: '#FAD3D4',
          300: '#FAB6B7',
          400: '#FA8E8E',
          500: '#F65354',
          600: '#DE1A1B',
          700: '#B80C0C',
          800: '#900E0E',
          900: '#661514',
        },
        warning: {
          100: '#FDF3E7',
          200: '#FAD9B0',
          300: '#F5BC75',
          400: '#E99C40',
          500: '#D07912',
          600: '#AE5F00',
          700: '#8B4D04',
          800: '#683D08',
          900: '#4D2F0B',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
