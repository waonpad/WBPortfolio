import React, { useEffect, useState, useRef, CSSProperties } from 'react';
import { Box, Typography, styled, Divider } from '@mui/material';
import WorkCard from './WorkCard';
import { works } from '../data/works/WorkData';

type WorkListProps = {
}

const StyledDivider = styled(Divider)({
    opacity: 0.8,
    borderColor: '#f00',
    marginBottom: '24px'
})

export default function WorkList(props: WorkListProps):React.ReactElement {
    return (
        <Box>
            <Typography variant='h4'>Works</Typography>
            <StyledDivider />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'left',
                    flexWrap: 'wrap',
                    gap: '16px 16px'
                }}
            >
                {works.map((work, index) => (
                    <WorkCard
                        key={index}
                        work={work}
                        style={{
                            width: {
                                xs: '100%',
                                smd: 'calc((100% - 16px) / 2)',
                                md: '100%',
                                lmd: 'calc((100% - 16px) / 2)',
                                xl: 'calc((100% - 32px) / 3)'
                            }
                        }}
                    />
                ))}
            </Box>
        </Box>
    )
}