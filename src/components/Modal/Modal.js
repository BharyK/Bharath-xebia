import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

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

export default function BasicModal({ deleteEmployeeId, handleDeleteEmployee, handleModalClose, modalShow, modalText }) {
    return (
        <div>
            <Modal
                open={modalShow}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ textAlign: "center" }}>
                        Employee {modalText}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {modalText === "Delete" ? <div>
                            <h4>Are you sure you want delete the employee</h4>
                            <Grid container style={{ margin: "auto", width: "50%" }}>
                                <Grid item xs={4} style={{ marginRight: 40 }}>
                                    <Button variant="contained"
                                    onClick = {() => handleDeleteEmployee(deleteEmployeeId)}
                                    >{modalText}</Button>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button variant="outlined" color="error"
                                        onClick={handleModalClose}
                                    >Cancel</Button>
                                </Grid>
                            </Grid>
                        </div>
                            : <div style={{ margin: "auto", width: "87%" }}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Employee Name"
                                    placeholder='Employee Name'
                                    style={{ marginTop: 20, marginBottom: 20, width: 350 }}
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Employee Id"
                                    placeholder="Employee Id"
                                    style={{ marginBottom: 20, width: 350 }}
                                    disabled
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Employee performance review"
                                    placeholder="Employee performance review"
                                    style={{ marginBottom: 20, width: 350 }}
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Employee Feedback"
                                    placeholder="Employee Feedback"
                                    style={{ marginBottom: 20, width: 350 }}
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Employee Description"
                                    placeholder="Employee Description"
                                    style={{ marginBottom: 20, width: 350 }}
                                />
                                <Grid container style={{ margin: "auto", width: "50%" }}>
                                    <Grid item xs={4} style={{ marginRight: 40 }}>
                                        <Button variant="contained">{modalText}</Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button variant="outlined" color="error"
                                            onClick={handleModalClose}
                                        >Cancel</Button>
                                    </Grid>
                                </Grid>
                            </div>
                        }
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}