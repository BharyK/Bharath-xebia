import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function EmployeeFeedbackFrom({handleEmployeeDes}) {
    const [userValue, setValue] = React.useState();
    const textInput = React.useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        handleEmployeeDes(data.get('des'))
        textInput.current.value = "";
    };

    return (
        <div className='container' style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center"
        }}>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                style = {{ width: "100%"}}
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="des"
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    placeholder="Please write your feedback"
                    autoFocus
                    inputRef={textInput}
                />
                <Button type="submit" style={{ marginTop: 30, marginBottom: 30 }} variant="contained">Submit your feedback</Button>
            </Box>

        </div>
    )


}