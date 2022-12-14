import * as React from 'react';
// import Backdrop from '@mui/material/Backdrop';
import { Box, Backdrop, Fade, Button, Modal } from "@mui/material";
// import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';



interface Props {
    open: boolean;
    handleClose: () => void,
    children: React.ReactNode;
    size?: string
}

export const ModalComponent: React.FC<Props> = ({open, handleClose, children, size}) => {

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: size ? size : 400,
    bgcolor: '#131313',
    border: '2px solid #111',
    boxShadow: 24,
    p: 4,
  };

    return (
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                {/* <Typography id="transition-modal-title" variant="h6" component="h2"> </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}></Typography>  */}
                {
                    children
                } 
               </Box>
            </Fade>
          </Modal> 
        </div>
      );
}
