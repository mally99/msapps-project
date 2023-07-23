import React from "react"
import MuiButton from '@mui/material/Button';

type ButtonType = {
    text: string;
    onClick: () => void;
    disabled?: boolean;
}

export const Button = ({ text, onClick = () => { }, disabled }: ButtonType) => (
    <MuiButton variant="outlined" onClick={onClick} disabled={disabled}>{text}</MuiButton>
);
