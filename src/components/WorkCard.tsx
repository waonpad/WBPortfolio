import React, { useEffect, useState, useRef, CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Divider, Box, Grid, Typography, Avatar, Card, CardContent, Button, CardActions, CardMedia, Chip, Collapse, IconButton, styled, SxProps, Theme } from '@mui/material';
import DividerPrimary from './DividerPrimary';
import { useElementClientRect } from '../hooks/useElementClientRect';
import { WorkData } from '../data/works/WorkData';
import { PUBLIC_URL } from '../config';

type WorkCardProps = {
    work: WorkData;
    style?: SxProps<Theme> | undefined
}

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
                image={`${PUBLIC_URL}/images/main_visual.png`} // テスト用
                // image={`${PUBLIC_URL}/images/${work.id}/${work.thumbnail.path}`} // 本番
            />
            <CardContent sx={{pb: 0, mb: cardActionsClientRect ? `${cardActionsClientRect.height}px` : 0}}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant='h5'>
                            {work.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6'>Links</Typography>
                        <DividerPrimary />
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'left',
                                flexWrap: 'wrap',
                                gap: '4px 4px'
                            }}
                        >
                            {work.links.map((link, index) => (
                                <Chip key={index} label={link.title} component={Link} to={link.url} target='_blank' clickable />
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6'>Built with</Typography>
                        <DividerPrimary />
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
                        <DividerPrimary />
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