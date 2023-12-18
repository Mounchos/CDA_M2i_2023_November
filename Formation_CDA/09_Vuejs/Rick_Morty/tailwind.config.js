/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js}'],
    theme: {
        extend: {
            colors: {
                darkGreen: '#0D423B',
                lightGreen: '#BAD001',
                lightBlue: '#2596BE',
            },
            fontFamily: {
                get_schwifty: ['Get Schwifty', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
            },
            screens: {
                superSmall: '475px',
            },
        },
    },
    plugins: [],
};
