import React, {useState} from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const BookingForm = ({chooseFirstname}) => {

    //Variables
    const minDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    const minDate1 = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+1);
    const maxDate = new Date(new Date().getFullYear()+1, new Date().getMonth(), new Date().getDate());

    return (
       <>
       <React.Fragment>
        <Typography variant="h6" gutterBottom>
            Booking details
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                onChange={(e) => chooseFirstname(e.target.value)}
                fullWidth
                autoComplete="given-name"
                variant="standard"
            />
            </Grid>
        </Grid>
        </React.Fragment>
       </>
    )
}

export default BookingForm;

/*
<Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Check-in"
                    value={startDate}
                    minDate={minDate}
                    maxDate={maxDate}
                    onChange={(date) => setStartDate(date)}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Check-out"
                    value={endDate}
                    minDate={minDate1}
                    maxDate={maxDate}
                    onChange={(date) => setEndDate(date)}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            </Grid>
<Grid item xs={12} sm={6}>
            <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                onChange={(value) => setLastname(value)}
                fullWidth
                autoComplete="family-name"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                required
                id="email"
                name="email"
                label="Email"
                onChange={(value) => setEmail(value)}
                fullWidth
                autoComplete="email"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Office</InputLabel>
            <Select
                required
                id="country"
                name="country"
                value={country}
                label="Office"
                onChange={handleCountry}
            >
                <MenuItem value={"Oslo"}>Oslo</MenuItem>
                <MenuItem value={"Krakow"}>Krakow</MenuItem>
                <MenuItem value={"Berlin"}>Berlin</MenuItem>
                <MenuItem value={"Copenhagen"}>Copenhagen</MenuItem>
            </Select>
            </FormControl>
            </Grid>

*/

/*<Grid item xs={12}>
            <FormControlLabel
                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                label="Use this address for payment details"
            />
            </Grid>*/


/*



*/