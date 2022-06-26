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
import { useNavigate } from "react-router-dom";

//connect to the redux store
import { connect } from 'react-redux';
import { employeeListRequest, employeeDeleteRequest, addNewEmpployeeRequest } from '../../actions/EmployeeData';
import { setAuthStatus } from '../../actions/Auth';

function AdminView({ isAuthenticated, employeeListRequest, getList, employeeDeleteRequest, setAuthStatus }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalHeaderValue, setModalHeaderValue] = useState()
    const [deleteEmployee, setDeleteEmployee] = useState()
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }
    const history = useNavigate();

    useEffect(() => {
        if(isAuthenticated){
            const res = new Promise((resolve, reject) =>
            employeeListRequest({ reject, resolve })
        );
        res.then(() => {
            console.log("getList", getList)
        });
        res.catch(() => {
            console.log("getList", getList)
        });
        }else {
            history ('/') 
        }
           
        
       
    }, [getList])

    const handleActionChange = (value, emmployeeId) => {
        setDeleteEmployee(emmployeeId)
        setModalOpen(true)
        setModalHeaderValue(value);
        const res = new Promise((resolve, reject) =>
            addNewEmpployeeRequest({
                employeeName: "Bharath",
                performance: "Good",
                feedback: "10 out 4",
                description: "need to do impove in code level"
            },{ reject, resolve })
        );
        res.then(() => {
            setModalOpen(false)
        });
        res.catch(() => {
            console.log("getList", getList)
        });
    }
    const handleModalClose = () => {
        setModalOpen(false)
    }

    const handleDeleteEmployee = (id) => {
        const res = new Promise((resolve, reject) =>
            employeeDeleteRequest(id, { reject, resolve })
        );
        res.then(() => {
            setModalOpen(false)
        });
        res.catch(() => {
            console.log("getList", getList)
        });
    }

    const handleLogOut = () => {
        setAuthStatus ({payload: {isAuthenticated: false}});
        history("/");
    }

    return (
        <div className="container" 
        style = {{width: "70%", margin: "auto"}}
        >
            {modalOpen &&
                <Modal
                    deleteEmployeeId={deleteEmployee}
                    modalText={modalHeaderValue}
                    modalShow={modalOpen}
                    handleModalClose={handleModalClose}
                    handleDeleteEmployee={handleDeleteEmployee}
                />
            }
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <h1>Admin Portal</h1>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained"
                        onClick={() => handleActionChange("Add")}
                        style = {{marginTop: 20}}
                    >Add New Employee</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained"
                        style={{
                            backgroundColor: "#21b6ae",marginTop: 20
                        }}
                        onClick = {() => handleLogOut()}
                    >Logout</Button>
                </Grid>
            </Grid>
            <TableContainer component={Paper} width="50%">
                <Table sx={{ minWidth: 250 }} aria-label="simple table">
                    {getList.length <= 0 ? <h4 style={{ textAlign: "center" }}>Too Many Attempts.
                    </h4> :
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Employee Name</TableCell>
                                <TableCell align="center">Employee ID</TableCell>
                                <TableCell align="center">Employee Salary</TableCell>
                                <TableCell align="center">Employee Age</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                    }
                    <TableBody>
                        {getList.length <= 0 ? null :
                            getList.map((employee) => (
                                <TableRow
                                    key={employee.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center">{employee.employee_name}</TableCell>
                                    <TableCell align="center">{employee.id}</TableCell>
                                    <TableCell align="center">{employee.employee_salary}</TableCell>
                                    <TableCell align="center">{employee.employee_age}</TableCell>
                                    <TableCell align="center" style={{ cursor: "pointer" }}>
                                        {/* <UpdateIcon title="update" onClick={() => handleActionChange("Update")} /> */}
                                        <EditIcon title="Edit" onClick={() => handleActionChange("Edit", employee)} />
                                        <DeleteIcon title="Delete" onClick={() => handleActionChange("Delete", employee.id)} />
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

const mapStateToProps = state => ({
    getList: state.employee.employeeList,
    isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
    employeeListRequest,
    employeeDeleteRequest,
    addNewEmpployeeRequest,
    setAuthStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(AdminView));