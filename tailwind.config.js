/** @type {import('tailwindcss').Configuration} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        "2xl": { max: "1535px" }, // @media for max-width: 1535px
        "xl": { max: "1279px" },  // @media for max-width: 1279px
        "lg": { max: "1023px" },  // @media for max-width: 1023px
        "md": { max: "768px" },   // @media for max-width: 767px
        "sm": { max: "639px" },   // @media for max-width: 639px
        "xs": { max: "409px" },   // @media for max-width: 479px
      },
    },
  },
  plugins: [],
};
