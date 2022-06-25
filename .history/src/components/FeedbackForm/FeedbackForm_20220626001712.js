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
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: auto, width: '80%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-multiline-static"
                    // label="Multiline"
                    multiline
                    rows={4}
                    placeholder="Please write a your feedback"
                />

            </Box>
            <Button style = {{marginTop: 30, marginBottom: 30}} variant="contained">Submit your feedback</Button>
        </div>
    )


}