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

    const [thumbHeight, setThumbHeight] = useState(0);

    const thumbnail = new Image();
    thumbnail.onload = () => {
        setThumbHeight(cardClientRect ? thumbnail.height * cardClientRect!.width / thumbnail.width : 0);
    }
    thumbnail.src = work.thumbnail.path !== '' ? `${PUBLIC_URL}/images/works/${work.id}/${work.thumbnail.path}` : 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e';

    return (
        <Card elevation={1} sx={{...style, position: 'relative'}} ref={cardRef}>
            <CardMedia
                sx={{ Width: cardClientRect ? cardClientRect!.width : 0, minHeight: thumbHeight }}
                image={work.thumbnail.path !== '' ? `${PUBLIC_URL}/images/works/${work.id}/${work.thumbnail.path}` : 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'} // ダミー
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