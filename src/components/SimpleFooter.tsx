import React, { useState, useEffect, CSSProperties } from 'react';
import { Box, Typography } from '@mui/material';

type SimpleFooterProps = {
    wrap?: boolean;
    style?: CSSProperties;
}

function SimpleFooter(props: SimpleFooterProps): React.ReactElement {
    const {wrap, style} = props;

    return (
        <Box sx={{marginTop: 4, display: 'flex', alignItems: "center", justifyContent: "center"}}>
            <Typography sx={{...style, whiteSpace: 'pre-line', textAlign: 'center'}}>Copryright &copy; 2023 {wrap && "\n"} Awesome Drawer.</Typography>
        </Box>
    )
}

export default SimpleFooter;