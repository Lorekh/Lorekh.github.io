module.exports = {
    purge: [],
    theme: {
        fontFamily: {
           'Modak': ['Modak', 'cursive'],
           'Fredoka': ['Fredoka One', 'cursive'],
           'Titan': ['Titan One', 'cursive'],
        },
        extend: {
            textShadow: {
                '2xl': '1px 1px 5px rgb(33 34 43 / 20%)',
                '3xl': '0 0 5px rgba(0, 0, 0, .8), 0 0 10px rgba(0, 0, 0, .9)'
            },
            backgroundImage: theme => ({
                'patinete-header': "url('/patinete.jpeg')",
                'patinete-movil': "url('/patinete-movil.jpeg')"
            })
        },
    },
    variants: {
        scrollSnapType: ['responsive'],
    },
    plugins: [require('tailwindcss-scroll-snap'), require('tailwindcss-textshadow')],
}