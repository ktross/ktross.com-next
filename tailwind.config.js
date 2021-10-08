module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#000',
            white: '#fff',
            gray: {
                100: '#f7fafc',
                200: '#edf2f7',
                300: '#e2e8f0',
                400: '#cbd5e0',
                500: '#a0aec0',
                600: '#718096',
                700: '#4a5568',
                800: '#2d3748',
                900: '#1a202c',
            },
            'cinnabar': {
                50: '#FEF6F5',
                100: '#FDECEA',
                200: '#F9D0CB',
                300: '#F5B4AC',
                400: '#EE7C6E',
                500: '#E74430',
                600: '#D03D2B',
                700: '#8B291D',
                800: '#681F16',
                900: '#45140E',
            },
            'conifer': {
                50: '#FCFEF6',
                100: '#F9FDED',
                200: '#F0F9D1',
                300: '#E7F6B6',
                400: '#D5EF7F',
                500: '#C3E848',
                600: '#B0D141',
                700: '#758B2B',
                800: '#586820',
                900: '#3B4616',
            },
            'sapphire': {
                50: '#F4F6FA',
                100: '#E8EDF5',
                200: '#C6D3E6',
                300: '#A3B8D7',
                400: '#5E83BA',
                500: '#194E9C',
                600: '#17468C',
                700: '#0F2F5E',
                800: '#0B2346',
                900: '#08172F',
            },
            'royal-blue': {
                50: '#F4F8FE',
                100: '#E8F0FD',
                200: '#C6DBF9',
                300: '#A3C5F6',
                400: '#5F99EF',
                500: '#1A6DE8',
                600: '#1762D1',
                700: '#10418B',
                800: '#0C3168',
                900: '#082146',
            },
            'tabasco': {
                50: '#FAF4F3',
                100: '#F5E9E7',
                200: '#E6C8C4',
                300: '#D7A6A0',
                400: '#BA6458',
                500: '#9C2111',
                600: '#8C1E0F',
                700: '#5E140A',
                800: '#460F08',
                900: '#2F0A05',
            },
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
