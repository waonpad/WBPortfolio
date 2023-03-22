import React from 'react';
import { Box, Typography, SxProps, Theme } from '@mui/material';
import { projectName } from '../data/user/UserData';

type SimpleFooterProps = {
    wrap?: boolean;
    style?: SxProps<Theme>;
}

function SimpleFooter(props: SimpleFooterProps) {
    const {wrap, style} = props;

    return (
        <Box sx={{...style, display: 'flex', alignItems: "center", justifyContent: "center"}}>
            <Typography sx={{whiteSpace: 'pre-line', textAlign: 'center'}}>Copryright &copy; 2023 {wrap && "\n"} {projectName}.</Typography>
        </Box>
    )
}

export default SimpleFooter;