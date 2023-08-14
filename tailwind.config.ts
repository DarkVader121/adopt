import type { Config } from 'tailwindcss';
const withMT = require('@material-tailwind/react/utils/withMT');

const tailwindConfig: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,jsx,ts,tsx}', // Added this line to combine content patterns
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'Primary': '#FFD28A', 
        'Secondary': '#EE9200', 
      }
    },
  },
  plugins: [],
};

module.exports = withMT(tailwindConfig);
