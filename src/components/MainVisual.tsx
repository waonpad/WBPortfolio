import React from 'react';
import { Box } from '@mui/material';
import { ClientRect } from '../hooks/useElementClientRect';
import { PUBLIC_URL } from '../config';

function MainVisual(props: {headerClientRect: ClientRect}) {
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
                background: `url(${PUBLIC_URL}/images/main_visual.jpg) center / cover`,
            }}
        >
            <></>
        </Box>
    )
}

export default MainVisual;