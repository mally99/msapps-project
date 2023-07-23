import { Typography } from '@mui/material';
import React from 'react';

type TextType = {
    text?: string;
}
export const Text = ({ text }: TextType) => (
    <Typography align='center'>{text}</Typography>
);
