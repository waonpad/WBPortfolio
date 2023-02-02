import React, { useEffect, useState, useRef, CSSProperties } from 'react';
import { Box, Typography, styled, Divider } from '@mui/material';
import WorkCard from './WorkCard';

type WorkListProps = {

}

const StyledDivider = styled(Divider)({
    opacity: 0.8,
    borderColor: '#f00',
    marginBottom: '8px'
})

export default function WorkList(props: WorkListProps):React.ReactElement {

    const works = [
        {
            id: 0,
            title: '題名タイトルねーむ',
            links: [
                {
                    title: 'グーグル',
                    url: 'https://google.com'
                },
                {
                    title: 'GitHub',
                    url: 'https://github.com'
                }
            ],
            builtWith: ['HTML', 'CSS', 'JS'],
            images: [
                {
                    title: 'メイン画像',
                    path: 'main.png'
                },
                {
                    title: 'サブ画像',
                    path: 'sub.png'
                }
            ],
            overView: '概要ガイヨウがいよう',
            detail: '詳しい説明',
        },
    ];

    return (
        <Box>
            <Typography variant='h4'>Works</Typography>
            <StyledDivider />
        </Box>
    )
}