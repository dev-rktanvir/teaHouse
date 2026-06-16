/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            colors: {
                primary: '#1C1C1C',
                secondary: '#777777',
                accent: '#494949',
            },
            fontFamily: {
                manrope: ["Manrope", "sans-serif"],
            },
            backgroundImage: {
                'brand-gradient': "linear-gradient(to left, #ff7e5f, #feb47b)",
            }
        },
    },
    plugins: [],
}