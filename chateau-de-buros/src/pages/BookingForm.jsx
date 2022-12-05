import React, { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
//import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DatePicker from "react-datepicker";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Form from 'react-bootstrap/Form';
import "react-datepicker/dist/react-datepicker.css";
import sanityClient from '../client';
import "../styles/Form.css"

const BookingForm = ({chooseFirstname, chooseLastname, chooseStartDate, chooseEndDate, chooseEmail, chooseOffice, chooseRooms, chooseGuests, checkin, checkout, office, rooms, guests}) => {

    const [absences, setAbsences] = useState([]);

    useEffect(() => {
        sanityClient.fetch("*[_type == 'absence']").then(abs => setAbsences(abs));
    }, []);

    console.log({absences});
    console.log(checkin)
    console.log("checkout" + checkout)

    return (
        <Form>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <DatePicker
                        className="datepicker"
                        placeholderText="Check-in"
                        selected={checkin}
                        excludeDateIntervals={absences.map(abs => ({ start: new Date(abs.start), end: new Date(abs.end) }))}
                        onChange={(date) => chooseStartDate(date)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <DatePicker
                        className="datepicker"
                        placeholderText="Check-out"
                        selected={checkout}
                        excludeDateIntervals={absences.map(abs => {
                            const startDate = new Date(abs.start);
                            startDate.setDate(startDate.getDate() - 1);
                            startDate.setHours(0,0,0,0);
                            const endDate = new Date(abs.end);
                            endDate.setHours(0,0,0,1);
                            return ({ start: startDate, end: endDate })})}

                        onChange={(date) => chooseEndDate(date)}
                    />
                </Grid>
                <Grid item sm={6}>
                    <FormControl fullWidth>
                    <InputLabel id="select-rooms">Rooms</InputLabel>
                    <Select
                        id="rooms"
                        name="rooms"
                        value={rooms}
                        label="Rooms"
                        onChange={chooseRooms}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                    </Select>
                    </FormControl>
                </Grid>
                <Grid item sm={6}>
                    <FormControl fullWidth>
                    <InputLabel id="select-guests">Guests</InputLabel>
                    <Select
                        id="guests"
                        name="guests"
                        value={guests}
                        label="Guests"
                        onChange={chooseGuests}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                    </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Form.Group className="mb-3" controlId="formFname">
                    <Form.Label>Firstname</Form.Label>
                    <Form.Control type="name" placeholder="Enter firstname" onChange={(e)=> chooseFirstname(e.target.value)} />
                </Form.Group>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Form.Group className="mb-4" controlId="formLname">
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control type="name" placeholder="Enter lastname" onChange={(e) => chooseLastname(e.target.value)} />
                </Form.Group>
                </Grid>
                <Grid item xs={12}>
                <Form.Group className="mb-5" controlId="fromEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" onChange={(e) => chooseEmail(e.target.value)} />
                </Form.Group>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                    <InputLabel id="select-office">Office</InputLabel>
                    <Select
                        id="office"
                        name="office"
                        value={office}
                        label="Office"
                        onChange={chooseOffice}
                    >
                        <MenuItem value={"Oslo"}>Oslo</MenuItem>
                        <MenuItem value={"Krakow"}>Krakow</MenuItem>
                        <MenuItem value={"Berlin"}>Berlin</MenuItem>
                        <MenuItem value={"Copenhagen"}>Copenhagen</MenuItem>
                    </Select>
                    </FormControl>
                    <Typography margin={2}><i> For a traveling party of more than 6 people, send an email to elisabeth.aanestad@fortedigital.no </i></Typography>
                </Grid>

            </Grid>
    </Form>
    )
}

export default BookingForm;

