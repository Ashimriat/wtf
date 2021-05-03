const generateHeaderRule = (fontSize: string) => ({
  fontSize,
  fontWeight: 600,
});
const generalTheme = {
  typography: {
    h1: generateHeaderRule('2rem'), // чуть больше 34px
    h2: generateHeaderRule('1.8rem'), // 32px
    h3: generateHeaderRule('1.6rem'), //
    h4: generateHeaderRule('1.4rem'), //
    h5: generateHeaderRule('1.2rem'), //
    h6: generateHeaderRule('1.1rem'), //
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
};


export default generalTheme;
