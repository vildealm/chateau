import React, { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DatePicker from "react-datepicker";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Form from 'react-bootstrap/Form';
import "react-datepicker/dist/react-datepicker.css";
import sanityClient from '../client';
import "../styles/Form.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ButtonGroup from '@mui/material/ButtonGroup';
import { TextField } from "@mui/material";

const BookingForm = ({chooseFirstname,
    chooseLastname,
    chooseStartDate,
    chooseEndDate,
    chooseEmail,
    chooseOffice,
    chooseRooms,
    chooseGuests,
    incLunch,
    decLunch,
    incDinner,
    decDinner,
    checkin,
    checkout,
    office,
    rooms,
    guests,
    lunch,
    dinner}) => {

    const [absences, setAbsences] = useState([]);

    useEffect(() => {
        sanityClient.fetch("*[_type == 'absence']").then(abs => setAbsences(abs));
    }, []);

    return (
        <Form>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Form.Label>Check-in</Form.Label>
                    <DatePicker
                        className="datepicker"
                        placeholderText="Check-in"
                        selected={checkin}
                        excludeDateIntervals={absences.map(abs => ({ start: new Date(abs.start), end: new Date(abs.end) }))}
                        onChange={(date) => chooseStartDate(date)}
                        minDate={new Date()}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Form.Label>Check-out</Form.Label>
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
                        minDate={new Date()}
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
                            label="Guests"
                            id="guests"
                            value={guests}
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
                    <FormControl>
                    <FormLabel id="radio-buttons-group-type">Type</FormLabel>
                    <RadioGroup
                        aria-labelledby="radio-buttons-group-type"
                        defaultValue="Workcation"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="workcation" control={<Radio />} label="Workcation" />
                        <FormControlLabel value="vacation" control={<Radio />} label="Vacation" />
                    </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={10} sm={8}>
                    <FormControl>
                        <FormLabel id="radio-buttons-group-type">Food orderings</FormLabel>
                        <ButtonGroup style={{marginTop: 10, justifyContent: "start"}} aria-label="small outlined button group">
                            <Form.Label style={{marginLeft: 5}}>Lunch:</Form.Label>
                            <Button style={{width: 5, height: 17, marginTop: 5, marginLeft: 10}} onClick={incLunch}>+</Button>
                                <label style={{ marginLeft: 5, marginRight: 5, marginTop: 3}}> {lunch} guest </label>
                            <Button style={{width: 7, height: 17, marginTop: 5}} onClick={decLunch}>-</Button>
                        </ButtonGroup>
                        <ButtonGroup style={{marginTop: 15}} aria-label="small outlined button group">
                            <Form.Label style={{marginLeft: 5}}>Dinner:</Form.Label>
                            <Button style={{width: 5, height: 17, marginTop: 5, marginLeft: 10}} onClick={incDinner}>+</Button>
                                <label style={{marginLeft: 10, marginRight: 10, marginTop: 3}}> {dinner} guest</label>
                            <Button style={{width: 5, height:17, marginTop: 5}} onClick={decDinner}>-</Button>
                        </ButtonGroup>
                        <TextField label={"Comments"} style={{marginTop: 15}}> </TextField>
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
                    <Typography margin={4}><i> For a traveling group of more than 6 people, send an email to elisabeth.aanestad@fortedigital.no </i></Typography>
                </Grid>

            </Grid>
    </Form>
    )
}

export default BookingForm;
 //<button onClick={handleDecrement}>-</button>
 /*<ButtonGroup style={{margin: 10}} aria-label="small outlined button group">
                        <Form.Label style={{padding: 2}}>Dinner per person: </Form.Label>
                        <button style={{outline: 'none'}} onClick={handleIncrement}>+</button>
                        {lunch}
                        <button onClick={handleDecrement}>-</button>
                    </ButtonGroup>*/
