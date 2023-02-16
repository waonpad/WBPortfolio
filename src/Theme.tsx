import { createTheme, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        //   xs: false;
        //   sm: false;
        smd: true;
        //   md: false;
        lmd: true;
        //   lg: false;
        //   xl: false;
    }
}

export const appTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            smd: 769,
            md: 900,
            lmd: 1000,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#f00',
            contrastText: '#e1e1e1'
        },
        // background: {
        //     default: '#444444',
        // },
        text: {primary: '#e1e1e1'},
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
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    background: '#353535'
                }
            }
        },
    }
});