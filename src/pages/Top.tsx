import React from 'react';
import { Container } from '@mui/material';
import WorkList from '../components/WorkList';

export const Top = () => {
    return(
        <Container maxWidth={false} disableGutters>
            <WorkList />
        </Container>
    )
}