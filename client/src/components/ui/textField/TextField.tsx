import { InputAdornment, TextField as MuiTextField } from '@mui/material';
import { ChangeEvent } from 'react';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

type TextFieldType = {
    label?: string
    value: string;
    onChange: (val: string) => void;
    onClickIcon: () => void;
    isSearch?: boolean;
}

export const TextField = ({ value, onChange, label, onClickIcon, isSearch }: TextFieldType) => (
    <MuiTextField
        label={label}
        onChange={({
            target: { value },
        }: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => onChange(value)}
        value={value}
        InputProps={{
            endAdornment: (
                (isSearch && <InputAdornment position="end">
                    <SearchIcon onClick={() => onClickIcon()} sx={{ cursor: "pointer" }} />
                </InputAdornment>)
            ),
        }}
    />
);


