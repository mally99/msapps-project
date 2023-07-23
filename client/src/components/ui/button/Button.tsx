import React from "react"
import MuiButton from '@mui/material/Button';

export type IButton = {
    text: string;
    onClick: () => void;
    disabled?: boolean;
}

export const Button = ({ text, onClick = () => { }, disabled }: IButton) => (
    <MuiButton variant="outlined" onClick={onClick} disabled={disabled}>{text}</MuiButton>
);