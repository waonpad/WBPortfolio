import React, { useEffect, useState, useRef, CSSProperties } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Divider, Box, Grid, Fab, Dialog, Typography, Avatar, Card, CardContent, Button, CardActions, Chip, Collapse, IconButton, styled, SxProps, Theme, CardMedia } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CollectionsIcon from '@mui/icons-material/Collections';
import DividerPrimary from '../components/DividerPrimary';
import WorkCard from '../components/WorkCard';
import WorkGalleryDialog from '../components/WorkGalleryDialog';
import { works, dummyImageData } from '../data/works/WorkData';
import { useElementClientRect } from '../hooks/useElementClientRect';
import { PUBLIC_URL } from '../config';

type WorkProps = {

}

export const Work = (props: WorkProps) => {

    const {workId} = useParams<{workId: string}>();
    const work = works.filter((work) => (work.id === Number(workId)))[0];

    const galleryRef = useRef(null);
    const {clientRect} = useElementClientRect(galleryRef);

    const cardRef = useRef(null);
    const {clientRect: cardClientRect} = useElementClientRect(cardRef);

    const [thumbHeight, setThumbHeight] = useState(0);

    const thumbnail = new Image();
    thumbnail.onload = () => {
        setThumbHeight(cardClientRect ? thumbnail.height * cardClientRect!.width / thumbnail.width : 0);
    }
    thumbnail.src = work.thumbnail.path !== '' ? `${PUBLIC_URL}/images/works/${work.id}/${work.thumbnail.path}` : 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e';

    return (
        <Container maxWidth={false} disableGutters>
            <Typography variant='h4'>Work</Typography>
            <DividerPrimary variant='section' />
            <Grid container spacing={2}>
                {/* 概要 */}
                <Grid item xs={12} lg={5} xl={4} height='fit-content' sx={{display: {xs: 'none', lg: 'flex'}}}>
                    <ImageList sx={{mt: 0, width: '100%'}} cols={1} gap={8} ref={galleryRef}>
                        <ImageListItem sx={{width: `${clientRect ? clientRect.width : 0}px`}}>
                            <img
                                style={{borderRadius: '4px'}}
                                src={work.thumbnail.path !== '' ? `${PUBLIC_URL}/images/works/${work.id}/${work.thumbnail.path}` : 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'}
                                alt={work.thumbnail.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                        {(work.images.length > 0 ? work.images : dummyImageData).map((item) => ( // ダミー
                            <ImageListItem key={item.path} sx={{width: `${clientRect ? clientRect.width : 0}px`}}>
                            <img
                                style={{borderRadius: '4px'}}
                                src={work.images.length > 0 ? `${PUBLIC_URL}/images/works/${work.id}/${item.path}` : item.path}
                                alt={item.title}
                                loading="lazy"
                            />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>
                {/* 詳しく */}
                <Grid item container xs={12} lg={7} xl={8} spacing={2} height='fit-content'>
                    <Grid item xs={12}>
                        <Card elevation={1} ref={cardRef}>
                            <CardMedia
                                sx={{ Width: cardClientRect ? cardClientRect!.width : 0, minHeight: thumbHeight, display: {xs: 'block', lg: 'none'} }}
                                image={work.thumbnail.path !== '' ? `${PUBLIC_URL}/images/works/${work.id}/${work.thumbnail.path}` : 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'} // ダミー
                            />
                            <CardContent>
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
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card elevation={1}>
                            <CardContent>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Typography variant='h5'>Detail</Typography>
                                        <DividerPrimary />
                                        <Typography variant='body1' sx={{whiteSpace: 'pre-line'}}>
                                            {work.detail}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            {/* ギャラリーダイアログ */}
            <WorkGalleryDialog work={work} />
        </Container>
    )
}