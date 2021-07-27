module.exports = {
  purge:{
    content: ['./public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      "biggest": "1rem"
    },

    textColor: theme => ({
      ...theme('colors'),
      "main" : "hsl(183, 100%, 15%)",
      "strongcyan": "hsl(172, 67%, 45%)",
      "white-main": "hsl(0, 0%, 100%)",
      "cyancolor": "hsl(172, 70%, 59%)",
      "darkgrayishcyan2":"hsl(184, 14%, 56%)",
      "darkgrayishcyan": "hsl(186, 14%, 43%)"
    }),
    borderColor:  theme => ({
      ...theme('colors'),
      "darkcyan": "hsl(172, 57%, 50%)"
    }),
    backgroundColor : theme => ({
      ...theme('colors'),
      "main": "hsl(185, 41%, 84%)",
      "verydarkcyan": "hsl(183, 100%, 15%)",
      "verylightgrayishcyan": "hsl(189, 41%, 97%)",
      "cyancolor": "hsl(172, 70%, 59%)",
      "white-main": "hsl(0, 0%, 100%)",
      "darkgrayishcyan2":"hsl(184, 14%, 56%)",
      "main2" : "#01545ae0"
    }),
    fontFamily : {
      'google-1': "'Space Mono', monospace"
    },
    extend: {
      gridTemplateColumns: {
        "full" : "repeat(3, minmax(120px, 1fr))",
        "mobi": "repeat(2, minmax(120px, 1fr))"
      },
      width: {
        "80": "80%"
      },
      borderRadius: ['hover', 'focus'],
     
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
    },
  },
  plugins: [],
}
