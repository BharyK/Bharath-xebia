import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import UpdateIcon from '@mui/icons-material/Update';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '../../components/Modal/Modal';

//connect to the redux store
import { connect } from 'react-redux';
import { employeeListRequest } from '../../actions/EmployeeData';

function AdminView({employeeListRequest, getList}) {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalHeaderValue, setModalHeaderValue] = useState()
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    useEffect(() => {
        const res = new Promise((resolve, reject) =>
            employeeListRequest({ reject, resolve })
        );
        res.then(() => {
            console.log ("getList", getList)
        });
        res.catch(() => {
            console.log ("getList", getList)
        });
    }, [])

    const rows = [
        createData('Bharath', 159, 6.0, 24, 4.0),
        createData('Kumar', 237, 9.0, 37, 4.3),
        createData('Keerthi', 262, 16.0, 24, 6.0),
        createData('Jagadish', 305, 3.7, 67, 4.3),
        createData('Preethi', 356, 16.0, 49, 3.9),
    ];

    const handleActionChange = (value) => {
        setModalOpen(true)
        setModalHeaderValue(value)
    }
    const handleModalClose = () => {
        setModalOpen(false)
    }
    console.log ("getList", getList)
    return (
        <div className="container">
            {modalOpen &&
                <Modal modalText={modalHeaderValue}
                    modalShow={modalOpen}
                    handleModalClose={handleModalClose}
                />
            }
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <h1>Admin Portal</h1>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained"
                        onClick={() => handleActionChange("Add")}
                    >Add New Employee</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained"
                        style={{
                            backgroundColor: "#21b6ae",
                        }}
                    >Logout</Button>
                </Grid>
            </Grid>
            <TableContainer component={Paper} width="50%">
                <Table sx={{ minWidth: 250 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Employee Name</TableCell>
                            <TableCell align="center">Employee ID</TableCell>
                            <TableCell align="center">Performace Review</TableCell>
                            <TableCell align="center">Feedback</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {getList.length < 0 ? <h2>Too Many Attempts.</h2> : 
                            getList.map((employee) => (
                                <TableRow
                                key={employee.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {employee.name}
                                </TableCell>
                                <TableCell align="center">{employee.employee_name}</TableCell>
                                <TableCell align="center">{employee.id}</TableCell>
                                <TableCell align="center">{employee.employee_salary}</TableCell>
                                <TableCell align="center">{employee.employee_age}</TableCell>
                                <TableCell align="center" style={{ cursor: "pointer" }}>
                                    <UpdateIcon title="update" onClick={() => handleActionChange("Update")} />
                                    <EditIcon title="Edit" onClick={() => handleActionChange("Edit")} />
                                    <DeleteIcon title="Delete" onClick={() => handleActionChange("Delete")} />
                                </TableCell>
                            </TableRow>
                            ))
                        }
                        {/* {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.calories}</TableCell>
                                <TableCell align="center">{row.fat}</TableCell>
                                <TableCell align="center">{row.carbs}</TableCell>
                                <TableCell align="center">Just Description</TableCell>
                                <TableCell align="center" style={{ cursor: "pointer" }}>
                                    <UpdateIcon title="update" onClick={() => handleActionChange("Update")} />
                                    <EditIcon title="Edit" onClick={() => handleActionChange("Edit")} />
                                    <DeleteIcon title="Delete" onClick={() => handleActionChange("Delete")} />
                                </TableCell>
                            </TableRow>
                        ))} */}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

const mapStateToProps = state => ({
    getList: state.employee.employeeList,
});

const mapDispatchToProps = {
    employeeListRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminView);