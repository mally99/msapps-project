import { Typography } from '@mui/material';
import React from 'react';

export type IText = {
    text?: string;
}
export const Text = ({ text }: IText) => {
    return <Typography align='center'>{text}</Typography>
}