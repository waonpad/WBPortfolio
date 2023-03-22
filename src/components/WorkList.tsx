import React from 'react';
import { Box, Typography } from '@mui/material';
import DividerPrimary from './DividerPrimary';
import WorkCard from './WorkCard';
import { works } from '../data/works/WorkData';

export default function WorkList() {
    return (
        <Box>
            <Typography variant='h4'>Works</Typography>
            <DividerPrimary variant='section' />
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