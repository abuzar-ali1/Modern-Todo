import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Form from './Form';
import { Add } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#111827',
  border: "3px solid #374151",   
  borderRadius: "12px",                
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>

    <Button
          size="large"
          sx={{
            justifyContent: "flex-start",
            bgcolor: "#3f3f3fff",
            color: "#9CA3AF",
            textTransform: "none",
            "&:hover": {
              bgcolor: "grey.700",
            },
          }}
          variant="contained"
          fullWidth
          startIcon={<Add />}
          onClick={handleOpen}
        >
          Add a new task
        </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Form/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
