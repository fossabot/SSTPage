import { createMuiTheme } from 'material-ui/styles'
import { purple, orange, red  } from 'material-ui/colors'

const palette = {
  primary: purple,
  accent: orange,
  error: red,
};

const typography = { 
  fontFamily: '"Roboto", "Helvetica", "Arial", "Microsoft Yahei", "Wenquanyi Micro Hei"'
};

const theme = createMuiTheme({ palette, typography });

export default theme