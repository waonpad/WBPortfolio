import React, { useEffect, useState, useRef, CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Divider, Box, Grid, Typography, Avatar, Card, CardContent, Button, CardActions, CardMedia, Chip, Collapse, IconButton, styled, SxProps, Theme } from '@mui/material';
import { useElementClientRect } from '../hooks/ElementClientRect';
import { WorkData } from '../data/WorkData';

type WorkCardProps = {
    work: WorkData;
    style?: SxProps<Theme> | undefined
}

const StyledDivider = styled(Divider)({
    opacity: 0.7,
    borderColor: '#f00',
    marginBottom: '8px'
})

export default function WorkCard(props: WorkCardProps):React.ReactElement {
    const {work, style} = props;

    const cardRef = useRef(null);
    const {clientRect: cardClientRect} = useElementClientRect(cardRef);

    const cardActionsRef = useRef(null);
    const {clientRect: cardActionsClientRect} = useElementClientRect(cardActionsRef);

    return (
        <Card elevation={1} sx={{...style, position: 'relative'}} ref={cardRef}>
            <CardMedia
                sx={{ height: cardClientRect ? cardClientRect!.width / 16 * 9 : 0 }}
                image={`${window.location.origin}/images/main_visual.png`}
            />
            <CardContent sx={{pb: 0, mb: cardActionsClientRect ? `${cardActionsClientRect.height}px` : 0}}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant='h5'>
                            {work.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6'>Built with</Typography>
                        <StyledDivider />
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'left',
                                flexWrap: 'wrap',
                                gap: '4px 4px'
                            }}
                        >
                            {work.builtWith.map((tool, index) => (
                                <Chip key={index} label={tool} />
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6'>Overview</Typography>
                        <StyledDivider />
                        <Typography variant='body2' sx={{whiteSpace: 'pre-line'}}>
                            {work.overview}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions sx={{position: 'absolute', bottom: 0, pl: '12px'}} ref={cardActionsRef}>
                <Button size="small" component={Link} to={`/work/${work.id}`}>Learn More</Button>
            </CardActions>
        </Card>
    )
}