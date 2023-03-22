import React, { useState } from 'react';
import { Box, Fab, Dialog } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CollectionsIcon from '@mui/icons-material/Collections';
import { WorkData } from '../data/works/WorkData';
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import { PUBLIC_URL } from '../config';

type WorkGalleryDialogProps = {
    work: WorkData;
}

export default function WorkGalleryDialog(props: WorkGalleryDialogProps) {
    const {work} = props;

    const {width} = useWindowDimensions();

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
                {(work.images).map((item) => (
                    <Box key={item.path}>
                        <ImageListItem sx={{width: `${width ? (width * 0.94) / 2 : 0}px`}}>
                            <img
                                style={{borderRadius: '4px'}}
                                src={`${PUBLIC_URL}/images/works/${work.id}/${item.path}`}
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