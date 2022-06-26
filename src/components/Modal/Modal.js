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



export default function BasicModal({ handleAddEmpolyee, deleteEmployeeId, handleDeleteEmployee, handleModalClose, modalShow, modalText }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log("name value", data.get('eName'))
        const empDetails = (
            data.get('eName'),
            data.get('eId'),
            data.get('eSalary'),
            data.get('eAge')
        )
        handleAddEmpolyee(empDetails)
    };
    return (
        <div>
            <Modal
                open={modalShow}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box component="form"
                    noValidate
                    autoComplete="off"
                    sx={style}
                    onSubmit={handleSubmit}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ textAlign: "center" }}>
                        Employee {modalText}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {modalText === "Delete" ? <div>
                            <h4>Are you sure you want delete the employee</h4>
                            <Grid container style={{ margin: "auto", width: "50%" }}>
                                <Grid item xs={4} style={{ marginRight: 40 }}>
                                    <Button variant="contained"
                                        onClick={() => handleDeleteEmployee(deleteEmployeeId)}
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
                                    name="eName"
                                    required
                                    id="outlined-required"
                                    label="Employee Name"
                                    autoFocus
                                    // placeholder='Employee Name'
                                    style={{ marginTop: 20, marginBottom: 20, width: 350 }}
                                    value={modalText === "Edit" ? deleteEmployeeId.employee_name : null}
                                />
                                <TextField
                                    name="eId"
                                    required
                                    id="outlined-required"
                                    label="Employee Id"
                                    //placeholder="Employee Id"
                                    style={{ marginBottom: 20, width: 350 }}
                                    disabled
                                    value={modalText === "Edit" ? deleteEmployeeId.id : null}
                                />
                                <TextField
                                    name="eSalary"
                                    required
                                    id="outlined-required"
                                    label="Employee salary"
                                    // placeholder="Employee salary"
                                    style={{ marginBottom: 20, width: 350 }}
                                    value={modalText === "Edit" ? deleteEmployeeId.employee_salary : null}
                                />
                                <TextField
                                    name="eAge"
                                    required
                                    id="outlined-required"
                                    label="Employee Age"
                                    // placeholder="Employee Age"
                                    style={{ marginBottom: 20, width: 350 }}
                                    value={modalText === "Edit" ? deleteEmployeeId.employee_age : null}
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Employee Description"
                                    // placeholder="Employee Description"
                                    style={{ marginBottom: 20, width: 350 }}
                                />
                                <Grid container style={{ margin: "auto", width: "50%" }}>
                                    {modalText === "Add" ? <Grid item xs={4} style={{ marginRight: 40 }}>
                                        <Button variant="contained"
                                            //  onClick={ handleSubmit}
                                            type="submit"
                                        >{modalText}</Button>
                                    </Grid> : <Grid item xs={4} style={{ marginRight: 40 }}>
                                        <Button variant="contained"
                                            onClick={handleModalClose}
                                        >{modalText}</Button>
                                    </Grid>}

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