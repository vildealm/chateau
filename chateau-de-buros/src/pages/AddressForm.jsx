import React from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const AddressForm = () => {
    const [value, setValue] = React.useState(dayjs('2022-04-07'));
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
                fullWidth
                autoComplete="given-name"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
                autoComplete="family-name"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                required
                id="address1"
                name="address1"
                label="Address line 1"
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="shipping address-level2"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                id="state"
                name="state"
                label="State/Province/Region"
                fullWidth
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="zip"
                name="zip"
                label="Zip / Postal code"
                fullWidth
                autoComplete="shipping postal-code"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="shipping country"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Check-in"
                    value={value}
                    onChange={(newValue) => {
                    setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Check-out"
                    value={value}
                    onChange={(newValue) => {
                    setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
            <FormControlLabel
                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                label="Use this address for payment details"
            />
            </Grid>
        </Grid>
        </React.Fragment>
        </>
    );
}

export default AddressForm;