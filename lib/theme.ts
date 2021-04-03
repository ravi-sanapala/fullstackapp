//Used to decide whether theme is in Light mode or dark mode.

import grey from '@material-ui/core/colors/grey';
import {createMuiTheme } from '@material-ui/core/styles';
import { create } from 'domain';


const themeDark = createMuiTheme({
    palette: {
        primary: {main: grey[200]},
        secondary: {main:grey[400]},
        type:'dark'
      },
})

const themeLight = createMuiTheme({
    palette: {
        primary: {main: grey[800]},
        secondary: {main:grey[900]},
        type:'dark'
      },
})

export {themeDark,themeLight}