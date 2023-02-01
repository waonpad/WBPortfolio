import React, { useEffect, useState, useRef, CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Typography, Avatar, Card, CardContent, Button, Collapse, IconButton, styled } from '@mui/material';
import { grey, green } from '@mui/material/colors';
import { ExpandMore, ExpandLess, MoreHoriz } from '@mui/icons-material';

type ProdileProps = {
    style?: CSSProperties | {[key: string]: CSSProperties};
}

function Profile(props: ProdileProps):React.ReactElement {
    const {style} = props;

    return (
        <Card elevation={1} sx={{...style}}>
            <CardContent>
                <Grid container spacing={1} sx={{textAlign: 'center', position: 'relative'}}>
                    <Grid item xs={12} sx={{display: 'flex', alignItems: "center", justifyContent: "center"}}>
                        {<Avatar src={`${window.location.origin}/images/profile/icon.png`} sx={{height: '200px', width: '200px'}} />}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Profile;