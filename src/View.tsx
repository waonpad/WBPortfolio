import React, { useEffect, useState, ReactNode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { globalTheme } from './Theme';

function View({children}: any):React.ReactElement {

    return (
        <ThemeProvider theme={globalTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default View;