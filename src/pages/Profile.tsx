import React, { useEffect, useState, useRef, CSSProperties } from 'react';
import { Container, Divider, Box, Grid, Typography, Avatar, Card, CardContent, Button, CardActions, Chip, Collapse, IconButton, styled, SxProps, Theme } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import DividerPrimary from '../components/DividerPrimary';
import { user } from '../data/user/UserData';

type ProfileProps = {
}

export default function Profile(props: ProfileProps):React.ReactElement {

    return (
        <Container maxWidth={false} disableGutters>
            <Typography variant='h4'>About</Typography>
            <DividerPrimary variant='section' />
            <Grid container spacing={2}>
                {/* 概要 */}
                <Grid item xs={12} lg={5} xl={4} height='fit-content'>
                    <Card elevation={1}>
                        <CardContent>
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
                                    <Typography variant='h6'>Licenses</Typography>
                                    <DividerPrimary />
                                    {user.lisences.map((lisence, index) => (
                                        <Typography key={lisence} variant='body2' lineHeight={'1.7rem'} sx={{whiteSpace: 'pre-line'}}>
                                            {lisence}
                                        </Typography>
                                    ))}
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='h6'>Fun</Typography>
                                    <DividerPrimary />
                                        {user.fun.map((fun) => (
                                            <Box key={fun.title} sx={{display: 'flex'}}>
                                                <Typography variant='body2' lineHeight={'1.7rem'}>
                                                    {fun.title}
                                                </Typography>
                                                <Typography variant='body2' lineHeight={'1.7rem'} sx={{ml: 'auto'}}>
                                                    {fun.text}
                                                </Typography>
                                            </Box>
                                        ))}
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                {/* 詳しく */}
                <Grid item container xs={12} lg={7} xl={8} spacing={2} height='fit-content'>
                    <Grid item xs={12}>
                        <Card elevation={1}>
                            <CardContent>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Typography variant='h5'>Description</Typography>
                                        <DividerPrimary />
                                        <Typography variant='body1' sx={{whiteSpace: 'pre-line'}}>
                                            {user.description}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h5'>Career</Typography>
                        <DividerPrimary />
                        <Timeline
                            position="right"
                            onResize={undefined}
                            onResizeCapture={undefined}
                            sx={{
                                px: 0,
                                [`& .${timelineOppositeContentClasses.root}`]: {
                                    flex: 0.15,
                                },
                            }}
                        >
                            {user.career.map((career) => (
                                <TimelineItem key={career.title}>
                                    <TimelineOppositeContent
                                        sx={{ m: '14px 0 0 0', pl: 0, display: {xs: 'none', sm: 'block'} }}
                                        align="right"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {career.title}
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        {/* <TimelineConnector /> */}
                                        <TimelineDot variant="outlined">
                                            {career.icon}
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', pl: 2, pr: 0 }}>
                                        <Typography variant='body2' color="text.secondary" sx={{display: {xs: 'block', sm: 'none'}}}>
                                            {career.title}
                                        </Typography>
                                        <Card elevation={1}>
                                            <CardContent>
                                                <Typography variant="h6">
                                                    {career.content.title}
                                                </Typography>
                                                <DividerPrimary variant='subhead' />
                                                <Typography variant='body2' sx={{whiteSpace: 'pre-line'}}>
                                                    {career.content.text}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}