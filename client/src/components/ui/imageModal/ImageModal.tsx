import React, { useState } from 'react';
import { Modal, Box, IconButton, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type ImageModalType = {
    src: string;
    alt: string;
}

export const ImageModal = ({ src, alt }: ImageModalType) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <img src={src} alt={alt} onClick={handleOpen}
                style={{ width: "100%", height: "200px", objectFit: "cover", cursor: "pointer" }} />

            <Modal open={open} onClose={handleClose}>
                <Stack justifyContent="center" alignItems="center" height="100%" >
                    <img src={src} alt={alt} style={{ width: '70%', height: '70%' }} />
                    <IconButton
                        onClick={handleClose}
                        sx={{ position: 'absolute', top: 10, right: 10, color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Stack>
            </Modal>
        </>
    );
};