import React, { useEffect, useState, ReactNode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { globalTheme } from './Theme';

type ViewProps = {
    children: React.ReactElement;
}

function View(props: ViewProps):React.ReactElement {
    const {children} = props;

    return (
        <ThemeProvider theme={globalTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default View;