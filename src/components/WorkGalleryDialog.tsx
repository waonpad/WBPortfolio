import React, { useEffect, useState, useRef, CSSProperties } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Divider, Box, Grid, Fab, Dialog, Typography, Avatar, Card, CardContent, Button, CardActions, Chip, Collapse, IconButton, styled, SxProps, Theme } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CollectionsIcon from '@mui/icons-material/Collections';
import { works, WorkData } from '../data/works/WorkData';
import { useWindowDimensions } from '../hooks/useWindowDimensions';

type WorkGalleryDialogProps = {
    work: WorkData;
}


export default function WorkGalleryDialog(props: WorkGalleryDialogProps):React.ReactElement {
    const {work} = props;

    const {width, height, breakpoint} = useWindowDimensions();

    const [galleryDialogOpen, setGalleryDialogOpen] = useState(false);
    
    const handleGalleryDialogOpen = () => {
        setGalleryDialogOpen(true);
    }

    const handleGalleryDialogClose = () => {
        setGalleryDialogOpen(false);
    }

    return (
        <React.Fragment>
            <Dialog
                onClose={handleGalleryDialogClose}
                open={galleryDialogOpen}
                PaperProps={{
                    style: {
                        boxShadow: 'none',
                        minWidth: '100vw',
                        minHeight: '100vh',
                        backgroundColor: 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }
                }}
                BackdropProps={{
                    style: {
                        backgroundColor: '#000',
                        opacity: 0.7
                    }
                }}
                onClick={handleGalleryDialogClose}
            >
                <ImageList cols={2}>
                {itemData.map((item) => (
                    <Box key={item.img}>
                        <ImageListItem sx={{width: `${width ? (width * 0.94) / 2 : 0}px`}}>
                            <img
                                src={`${item.img}`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    </Box>
                ))}
                </ImageList>
            </Dialog>
            <Fab
                color='primary'
                sx={{
                    display: {xs: 'flex', lg: 'none'},
                    position: 'fixed',
                    bottom: '16px',
                    right: '16px'
                }}
                onClick={handleGalleryDialogOpen}
            >
                <CollectionsIcon />
            </Fab>
        </React.Fragment>
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