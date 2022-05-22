export const Theme = {
  name: "my theme",
  rounding: 6,
  spacing: 24,
  defaultMode: "light",
  global: {
    colors: {
      brand: {
        dark: "linear-gradient(33deg, rgba(0,212,255,1) 0%, rgba(126,152,246,1) 0%, rgba(2,0,36,1) 48%, rgba(2,0,36,1) 87%)",
        light:
          "linear-gradient(33deg, rgba(0,80,255,1) 15%, rgba(0,212,255,1) 46%, rgba(162,239,247,1) 72%)",
      },
      background: {
        dark: "#333232",
        light: "#FFFFFF",
      },
      "background-back": {
        dark: "#111111",
        light: "#EEEEEE",
      },
      "background-front": {
        dark: "#222222",
        light: "#FFFFFF",
      },
      "background-contrast": {
        dark: "#FFFFFF11",
        light: "#11111111",
      },
      text: {
        dark: "#EEEEEE",
        light: "#333333",
      },
      "header-text": {
        light: "#EEEEEE",
        dark: "#EEEEEE",
      },
      "text-strong": {
        dark: "#FFFFFF",
        light: "#000000",
      },
      "text-weak": {
        dark: "#CCCCCC",
        light: "#444444",
      },
      "text-xweak": {
        dark: "#999999",
        light: "#666666",
      },
      border: {
        dark: "#444444",
        light: "#CCCCCC",
      },
    },
    font: {
      family: `-apple-system,
         BlinkMacSystemFont, 
         "Segoe UI", 
         Roboto, 
         Oxygen, 
         Ubuntu, 
         Cantarell, 
         "Fira Sans", 
         "Droid Sans",  
         "Helvetica Neue", 
         Arial, sans-serif,  
         "Apple Color Emoji", 
         "Segoe UI Emoji", 
         "Segoe UI Symbol"`,
    },
  },
  layer: {
    background: {
      dark: "#111111",
      light: "#FFFFFF",
    },
  },
};
