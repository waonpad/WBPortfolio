import React from 'react';
import { Box, Typography } from '@mui/material';
import { ClientRect } from '../hooks/ElementClientRect';

function MainVisual(props: {headerClientRect: ClientRect}):React.ReactElement {
    const {headerClientRect} = props;

    return (
        <Box
            sx={{
                position: 'realative',
                width: '100%',
                minHeight: `calc(100vh - ${headerClientRect ? headerClientRect!.height : 0}px)`,
                // {
                //     xs: `calc(50vh - ${headerClientRect ? headerClientRect!.height : 0}px)`,
                //     sm: `calc(50vh - ${headerClientRect ? headerClientRect!.height : 0}px)`,
                //     smd: `calc(50vh - ${headerClientRect ? headerClientRect!.height : 0}px)`,
                //     md: `calc(50vh - ${headerClientRect ? headerClientRect!.height : 0}px)`,
                //     lg: `calc(100vh - ${headerClientRect ? headerClientRect!.height : 0}px)`,
                // },
                // background: `url(${window.location.origin}/images/main_visual.png) center / cover`,
                background: `rgba(60,60,60)`,
            }}
        >
            <></>
        </Box>
    )
}

export default MainVisual;