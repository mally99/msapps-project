import { InputAdornment, Input as MuiInput, TextField as MuiTextField } from '@mui/material';
import { SyntheticEvent } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import styles from "./TextField.module.scss"

export type ITextField = {
    label?: string
    value?: string;
    onChange?: Function;
    onClickIcon?: Function;
    isSearch?: boolean;
}

export const TextField = ({ value, onChange = () => { }, label, onClickIcon = () => { }, isSearch }: ITextField) => {
    return <MuiTextField
        label={label}
        onChange={(event: any) => onChange(event.target.value)}
        value={value}
        InputProps={{
            endAdornment: (
                (isSearch && <InputAdornment position="end">
                    <SearchIcon onClick={() => onClickIcon()} className={styles.searchIcon} />
                </InputAdornment>)
            ),
        }}
    />
}

