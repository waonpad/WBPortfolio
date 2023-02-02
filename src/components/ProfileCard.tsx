import React, { useEffect, useState, useRef, CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Divider, Box, Grid, Typography, Avatar, Card, CardContent, Button, CardActions, Chip, Collapse, IconButton, styled } from '@mui/material';
import { grey, green } from '@mui/material/colors';
import { ExpandMore, ExpandLess, MoreHoriz } from '@mui/icons-material';

type ProdileCardProps = {
    style?: CSSProperties | {[key: string]: CSSProperties};
}

const StyledDivider = styled(Divider)({
    opacity: 0.5,
    borderColor: '#f00',
    marginBottom: '8px'
})

function ProfileCard(props: ProdileCardProps):React.ReactElement {
    const {style} = props;

    const avatarPath = 'profile/icon.png';
    const userName = '苗字 名前';
    const skills = ['HTML', 'CSS', 'JS', 'React', 'TypeScript', 'PHP', 'Laravel', 'MySql', 'Docker', 'Git'];
    const overview = `テキストてきすと文章。テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと文章。${"\n"}テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと、テキストてきすと文章。テキストてきすと、テキストてきすと文章。テキストてきすと、`;

    return (
        <Card elevation={1} sx={{...style}}>
            <CardContent sx={{pt: 3, pb: 3}}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sx={{display: 'flex', alignItems: "center", justifyContent: "center"}}>
                        {<Avatar src={`${window.location.origin}/images/${avatarPath}`} sx={{height: '200px', width: '200px'}} />}
                    </Grid>
                    <Grid item xs={12} sx={{textAlign: 'center'}}>
                        <Typography fontSize={30}>
                            {userName}
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
                            {skills.map((skill, index) => (
                                <Chip key={index} label={skill} />
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6'>Overview</Typography>
                        <StyledDivider />
                        <Typography variant='body2' sx={{whiteSpace: 'pre-line'}}>
                            {overview}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions sx={{position: 'absolute', bottom: 0, pl: '12px'}}>
                <Button size="small" component={Link} to={'/'}>Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default ProfileCard;