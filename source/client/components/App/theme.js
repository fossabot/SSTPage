import { createMuiTheme } from 'material-ui/styles'
import createPalette from 'material-ui/styles/palette'
import { purple, orange, red  } from 'material-ui/colors'

const theme = createMuiTheme({
  palette: createPalette({
    primary: purple,
    accent: orange,
    error: red,
  })
})

export default theme