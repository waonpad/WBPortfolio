import React, { useEffect, useState, useRef, CSSProperties } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Divider, Box, Grid, Fab, Dialog, Typography, Avatar, Card, CardContent, Button, CardActions, Chip, Collapse, IconButton, styled, SxProps, Theme } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CollectionsIcon from '@mui/icons-material/Collections';
import DividerPrimary from '../components/DividerPrimary';
import WorkCard from '../components/WorkCard';
import WorkGalleryDialog from '../components/WorkGalleryDialog';
import { works } from '../data/works/WorkData';
import { useElementClientRect } from '../hooks/useElementClientRect';

type WorkProps = {

}

export default function Work(props: WorkProps):React.ReactElement {

    const {workId} = useParams<{workId: string}>();
    const work = works.filter((work) => (work.id === Number(workId)))[0];

    const galleryRef = useRef(null);
    const {clientRect} = useElementClientRect(galleryRef);

    return (
        <Container maxWidth={false} disableGutters>
            <Typography variant='h4'>Work</Typography>
            <DividerPrimary variant='section' />
            <Grid container spacing={2}>
                {/* 概要 */}
                <Grid item xs={12} lg={5} xl={4} height='fit-content' sx={{display: {xs: 'none', lg: 'flex'}}}>
                    <ImageList sx={{mt: 0, width: '100%'}} cols={1} ref={galleryRef}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img} sx={{width: `${clientRect ? clientRect.width : 0}px`}}>
                            <img
                                src={`${item.img}`}
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
                        <Card elevation={1}>
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


const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];