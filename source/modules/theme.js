import { createMuiTheme } from 'material-ui/styles'
import createPalette from 'material-ui/styles/palette'
import { purple, orange, red  } from 'material-ui/colors'
import createTypography from 'material-ui/styles/typography'

const palette = createPalette({
  primary: purple,
  accent: orange,
  error: red,
});

const typography = createTypography(palette, 
  { fontFamily: '"Roboto", "Helvetica", "Arial", "Microsoft Yahei", "Wenquanyi Micro Hei"' }
);

const theme = createMuiTheme({ palette, typography });

export default theme