import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, grey, yellow } from '@mui/material/colors';

export const globalTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 769,
            lg: 1000,
            xl: 1920,
        },
    },
    palette: {
        // mode: 'dark',
        primary: {
            main: '#212121',
            contrastText: '#fff'
        },
        background: {
            default: '#444444',
        },
        text: { primary: '#fff' },
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
                    background: '#333333'
                }
            }
        },
        MuiListItemIcon: {
            defaultProps: {
                sx: {
                    color: '#fff',
                }
            }
        }
    }
});