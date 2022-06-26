import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import EmployeeFeedbackFrom from '../../components/FeedbackForm/FeedbackForm';

import { setAuthStatus } from '../../actions/Auth';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
      width: "50%",
      margin: "auto",
      zIndex: 1
    },
    pageHeader: {
        display: "flex",
        justifyContent: "spacearound",
        alignItem: "center",
        alignSelf: "center",
        width:"100%"
    }
  });

function EmployeeView(props, { isAuthenticated }) {
    const [employeeDescription, setEmployeeDescription] = useState()
    const [employeeList, setEmployeeList] = useState(
        [
            {
                description: "Changes has been done"
            }
        ]
    )
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }
    const history = useNavigate();

    const handleLogOut = () => {
        setAuthStatus({ payload: { isAuthenticated: false } });
        history("/");
    }
    const handleEmployeeDes = (value) => {
        setEmployeeDescription(value)
        setEmployeeList(prevState => [...prevState, { description: value }]);
    }
    let newDate = new Date().toLocaleDateString();
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <h1>Employee Portal</h1>
                </Grid>
                <Grid item xs={4} style = {{marginTop: 20}}>
                    <Button variant="contained"
                        style={{
                            backgroundColor: "#21b6ae",
                        }}
                        onClick={() => handleLogOut()}>Log Out</Button>
                </Grid>

            </Grid>
            <EmployeeFeedbackFrom handleEmployeeDes={handleEmployeeDes} />
            <TableContainer component={Paper} width="50%">
                <Table sx={{ minWidth: 250 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Sl No</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Modify Date</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employeeList.map((row, index) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right">{index}</TableCell>
                                <TableCell align="right">Xebia</TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                                <TableCell align="right">{newDate}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
    setAuthStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EmployeeView));