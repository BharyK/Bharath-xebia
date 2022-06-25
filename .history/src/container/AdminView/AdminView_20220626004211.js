import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function AdminView() {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Bharath', 159, 6.0, 24, 4.0),
        createData('Kumar', 237, 9.0, 37, 4.3),
        createData('Keerthi', 262, 16.0, 24, 6.0),
        createData('Jagadish', 305, 3.7, 67, 4.3),
        createData('Preethi', 356, 16.0, 49, 3.9),
    ];

    return (
        <div className="container">
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <h1>Admin Portal</h1>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained">Add New Employee</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained"
                    style={{
                        backgroundColor: "#21b6ae",
                        padding: "18px 36px",
                        fontSize: "18px"
                    }}
                    >Logout</Button>
                </Grid>
            </Grid>
            <TableContainer component={Paper} width="50%">
                <Table sx={{ minWidth: 250 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Employee Name</TableCell>
                            <TableCell align="right">Employee ID</TableCell>
                            <TableCell align="right">Performace Review Marks</TableCell>
                            <TableCell align="right">Feedback</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}