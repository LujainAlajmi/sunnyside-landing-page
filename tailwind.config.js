const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        SoftRed: "hsl(7, 99%, 70%)",
        Yellow: "hsl(51, 100%, 49%)",
        DarkDesaturatedCyan: "hsl(167, 40%, 24%)",
        DarkBlue: "hsl(198, 62%, 26%)",
        DarkModerateCyan: "hsl(168, 34%, 41%)",
        VeryDarkDesaturatedBlue: "hsl(212, 27%, 19%)",
        VeryDarkGrayishBlue: "hsl(213, 9%, 39%)",
        DarkGrayishBlue: "hsl(232, 10%, 55%)",
        GrayishBlue: "hsl(210, 4%, 67%)",
        White: "hsl(0, 0%, 100%)",
      },
      backgroundImage: {
        ImageHeaderMobile: "url('./images/mobile/image-header.jpg')",
        ImageHeaderDesktop: "url('./images/desktop/image-header.jpg')",
        ImagePhotographyMobile: "url('./images/mobile/image-photography.jpg')",
        ImagePhotographyDesktop:
          "url('./images/desktop/image-photography.jpg')",
        imageGraphicDesignMobile:
          "url('./images/mobile/image-graphic-design.jpg')",
        imageGraphicDesignDesktop:
          "url('./images/desktop/image-graphic-design.jpg')",
      },
    },
  },
  plugins: [],
};
