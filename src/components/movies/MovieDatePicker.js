import * as React from 'react';
import {useState} from "react";
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box'

export default function BasicDatePicker(props) {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const color = 'white'

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
           <Box sx={{display: 'flex', pt: 4, justifyContent: 'center', alignItems: 'center'}}>
               <DatePicker
                   label="start date"
                   value={startDate}
                   onChange={(newValue, prevValue) => {
                       setStartDate(newValue);
                       props.filterMovies(newValue, endDate)
                   }}

                   renderInput={(params) => <TextField
                       sx={{
                           svg: { color },
                           input: { color, width: 150 },
                           label: { color },
                       }}
                       {...params}
                   />
                   }
               />
               <Typography variant="body2" sx={{mx: 4, color: 'white'}}>
                   to
               </Typography>
               <DatePicker
                   label="end date"
                   value={endDate}
                   onChange={(newValue) => {
                       setEndDate(newValue);
                       props.filterMovies(startDate, newValue)
                   }}
                   renderInput={(params) => <TextField
                       sx={{
                           svg: { color },
                           input: { color, width: 150 },
                           label: { color },
                           borderColor: 'white'
                       }}
                       {...params}
                   />
                   }
               />
           </Box>
        </LocalizationProvider>
    );
}
