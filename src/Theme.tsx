import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, grey, yellow } from '@mui/material/colors';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        //   xs: false;
        //   sm: false;
        smd: true;
        //   md: false;
        //   lg: false;
        //   xl: false;
    }
}

export const globalTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            smd: 769,
            md: 900,
            lg: 1000,
            xl: 1920,
        },
    },
    palette: {
        mode: 'dark',
        // primary: {
        //     main: '#121212',
        //     contrastText: '#e1e1e1'
        // },
        // background: {
        //     default: '#444444',
        // },
        // text: { primary: '#e1e1e1' },
    },
    typography: {
        // fontFamily: ["sans-serif"].join(','),
        // fontSize: 14
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                'img': {verticalAlign: 'bottom'}
            }
        },
        // MuiBackdrop: {
        //     defaultProps: {
        //         sx: {
        //             backgroundColor: '#f5f5f5',
        //         }
        //     }
        // },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    background: '#353535'
                }
            }
        },
    }
});