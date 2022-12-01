// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import React, {useState} from "react";
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';
//
// const MovieDatePicker = (props) => {
//     const [value, setValue] = useState(null);
//
//     return (
//         <LocalizationProvider
//             dateAdapter={AdapterDayjs}
//             localeText={{ start: 'start date', end: 'end date' }}
//         >
//             <DateRangePicker
//                 value={value}
//                 onChange={(newValue) => {
//                     setValue(newValue);
//                 }}
//                 renderInput={(startProps, endProps) => (
//                     <React.Fragment>
//                         <TextField {...startProps} />
//                         <Box sx={{ mx: 2 }}> to </Box>
//                         <TextField {...endProps} />
//                     </React.Fragment>
//                 )}
//             />
//         </LocalizationProvider>
//     )
// }
// export default MovieDatePicker