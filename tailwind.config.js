module.exports = {
  purge:{
    content: ['./public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      "main" : "hsl(183, 100%, 15%)",
      "white-main": "hsl(0, 0%, 100%)"
    },
    placeholderColor : {
      "darkgrayiscyan": "hsl(184, 14%, 56%)"
    },
    extend: {
      gridTemplateColumns: {
        "full" : "repeat(3, minmax(120px, 1fr))"
      },
      backgroundColor :{
        'main': "hsl(185, 41%, 84%)",
        "verydarkcyan": "hsl(183, 100%, 15%)",
        "verylightgrayishcyan": "hsl(189, 41%, 97%)"
      },
      fontFamily : {
        'google-1': "'Space Mono', monospace"
      },
      letterSpacing: {
        "biggest": "1rem"
      },
      width: {
        "80": "80%"
      }
     
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
