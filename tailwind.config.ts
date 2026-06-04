import type { Config } from 'tailwindcss';

const config: Config = { darkMode: "class",
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: { colors: { brand: { DEFAULT: "#0891b2", dark: "#056880" }, },}
  },
  plugins: []
};

export default config;