import React, { useEffect, useState, useRef, CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Divider, Box, Grid, Typography, Avatar, Card, CardContent, Button, CardActions, Chip, Collapse, IconButton, styled, SxProps, Theme } from '@mui/material';
import { user } from '../data/UserData';
import { useElementClientRect } from '../hooks/ElementClientRect';

type ProdileCardProps = {
    style?: SxProps<Theme> | undefined
}

const StyledDivider = styled(Divider)({
    opacity: 0.7,
    borderColor: '#f00',
    marginBottom: '8px'
})

function ProfileCard(props: ProdileCardProps):React.ReactElement {
    const {style} = props;

    const cardActionsRef = useRef(null);
    const {clientRect: cardActionsClientRect} = useElementClientRect(cardActionsRef);

    return (
        <Card elevation={1} sx={{...style, position: 'relative'}}>
            <CardContent sx={{pb: 0, mb: cardActionsClientRect ? `${cardActionsClientRect.height}px` : 0}}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sx={{display: 'flex', alignItems: "center", justifyContent: "center"}}>
                        {<Avatar src={`${window.location.origin}/images/${user.avatarPath}`} sx={{height: '200px', width: '200px'}} />}
                    </Grid>
                    <Grid item xs={12} sx={{textAlign: 'center'}}>
                        <Typography fontSize={30}>
                            {user.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6'>Skills</Typography>
                        <StyledDivider />
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'left',
                                flexWrap: 'wrap',
                                gap: '4px 4px'
                            }}
                        >
                            {user.skills.map((skill, index) => (
                                <Chip key={index} label={skill} />
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6'>Overview</Typography>
                        <StyledDivider />
                        <Typography variant='body2' sx={{whiteSpace: 'pre-line'}}>
                            {user.overview}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions sx={{position: 'absolute', bottom: 0, pl: '12px'}} ref={cardActionsRef}>
                <Button size="small" component={Link} to={'/about'}>Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default ProfileCard;