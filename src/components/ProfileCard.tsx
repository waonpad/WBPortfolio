import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Typography, Avatar, Card, CardContent, Button, CardActions, Chip, SxProps, Theme } from '@mui/material';
import DividerPrimary from './DividerPrimary';
import { user } from '../data/user/UserData';
import { useElementClientRect } from '../hooks/useElementClientRect';
import { PUBLIC_URL } from '../config';

type ProdileCardProps = {
    style?: SxProps<Theme>;
}

function ProfileCard(props: ProdileCardProps) {
    const {style} = props;

    const cardActionsRef = useRef(null);
    const {clientRect: cardActionsClientRect} = useElementClientRect(cardActionsRef);

    return (
        <Card elevation={1} sx={{...style, position: 'relative'}}>
            <CardContent sx={{pb: 0, mb: cardActionsClientRect ? `${cardActionsClientRect.height}px` : 0}}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sx={{display: 'flex', alignItems: "center", justifyContent: "center"}}>
                        {<Avatar src={`${PUBLIC_URL}/images/profile/${user.avatarPath}`} sx={{height: '200px', width: '200px'}} />}
                    </Grid>
                    <Grid item xs={12} sx={{textAlign: 'center'}}>
                        <Typography fontSize={30}>
                            {user.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6'>Skills</Typography>
                        <DividerPrimary />
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
                        <DividerPrimary />
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