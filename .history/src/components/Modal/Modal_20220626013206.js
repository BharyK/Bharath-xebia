import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({ handleModalClose, modalShow, modalText }) {
    return (
        <div>
            <Modal
                open={modalShow}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Employee {modalText}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {modalText === "Delete" && "Are you sure, you want delete this employee details"}
                        <div style = {{margin: "auto", width: "90%"}}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            placeholder='Employee Name'
                            style = {{ marginBottom: 20, width: 350}}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            placeholder="Employee Id"
                            style = {{ marginBottom: 20, width: 350}}
                            disabled
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            placeholder="Employee Id"
                            style = {{ marginBottom: 20, width: 350}}
                        />
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}