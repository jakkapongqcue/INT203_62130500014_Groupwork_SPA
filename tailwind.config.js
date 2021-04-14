const colors = require('tailwindcss/colors')
module.exports = {
    purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            textOpacity: ['dark'],
            colors: {
                sea: {
                    light: '#3fbaeb',
                    DEFAULT: '#0fa9e6',
                    dark: '#0c87b8'
                },
                fuchsia: colors.fuchsia,
                salmon: {
                    // https://coolors.co/ef6351-f38375-f7a399-fbc3bc-ffe3e0
                    darkest: '#EF6351', // Fire Opal
                    dark: '#F38375', // Salmon
                    DEFAULT: '#F7A399', // Vivid Tangerine
                    light: '#FBC3BC', // Spanish Pink
                    lightest: '#FFE3E0' // Misty Rose
                }
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}