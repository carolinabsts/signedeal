import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#101935',
        contrastText: '#FFFFFF'
      },
      secondary: {
        main: '#45EFDE',
        contrastText: '#101935'
      }
    },
    overrides: {
      MuiButton: {
        text: {
          height: 36,
          padding: 25
        },
        label: {
          fontWeight: 'bold',
          fontSize: '1rem',
          letterSpacing: 2
        }
      }
    },
    props: {
      MuiTypography: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    }
});