// theme.ts
import { makeTheme } from 'dripsy'

const darkColors = {
  $background: 'black',
  $text: 'white',
}
const theme = makeTheme({
  colors: darkColors,
})

const lightColors = {
  $text: 'black',
  $background: 'white',
}
const themeLight = {
  ...theme,
  colors: lightColors,
  linearGradients: {
    sunny: ['red', 'orange']
  }
}
const themeDark = {
    ...theme,
    colors: darkColors,
    linearGradients: {
        sunny: ['red', 'orange']
    }
}
export { theme, themeLight ,themeDark}