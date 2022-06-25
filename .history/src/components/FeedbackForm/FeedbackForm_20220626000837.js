import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function EmployeeFeedbackFrom() {
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className='container'>
            {/* <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 10, width: '100%', margin: "auto" },
                }}
                noValidate
                autoComplete="off"
            > */}
                <TextField
                    id="outlined-multiline-static"
                    // label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Please write a your feedback"
                />

           
            <Button variant="contained">Submit your feedback</Button>
        </div>
    )


}