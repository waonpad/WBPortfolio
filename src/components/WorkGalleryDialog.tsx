import React, { useEffect, useState, useRef, CSSProperties } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Divider, Box, Grid, Fab, Dialog, Typography, Avatar, Card, CardContent, Button, CardActions, Chip, Collapse, IconButton, styled, SxProps, Theme } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CollectionsIcon from '@mui/icons-material/Collections';
import { works, WorkData, dummyImageData } from '../data/works/WorkData';
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import { PUBLIC_URL } from '../config';

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
                <ImageList cols={2} gap={8}>
                {(work.images.length > 0 ? work.images : dummyImageData).map((item) => (
                    <Box key={item.path}>
                        <ImageListItem sx={{width: `${width ? (width * 0.94) / 2 : 0}px`}}>
                            <img
                                style={{borderRadius: '4px'}}
                                src={work.images.length > 0 ? `${PUBLIC_URL}/images/works/${work.id}/${item.path}` : item.path}
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