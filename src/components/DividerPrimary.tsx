import React from 'react';
import { Divider, SxProps, Theme } from '@mui/material';
import { appTheme } from '../Theme';

type DividerPrimaryProps = {
    sx?: SxProps<Theme>;
    variant?: 'section' | 'head' | 'subhead';
}

function DividerPrimary(props: DividerPrimaryProps) {
    const {sx, variant} = props;

    const marginBottom = variant === 'section' ? '24px'
                        : variant === 'head' ? '8px'
                        : variant === 'subhead' ? '8px'
                        : '8px';

    const opacity = variant === 'section' ? 0.8
                    : variant === 'head' ? 0.7
                    : variant === 'subhead' ? 0.5
                    : 0.7;

    return (
        <Divider
            sx={{
                borderColor: appTheme.palette.primary.main,
                marginBottom: marginBottom,
                opacity: opacity,
                ...sx
            }}
        />
    )
}

export default DividerPrimary;