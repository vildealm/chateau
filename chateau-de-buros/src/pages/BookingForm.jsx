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
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const BookingForm = ({chooseFirstname, chooseLastname, chooseStartDate, chooseEndDate, checkin, checkout}) => {

    //Variables
    const minDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    const minDate1 = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+1);
    const maxDate = new Date(new Date().getFullYear()+1, new Date().getMonth(), new Date().getDate());
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formFname">
                <Form.Label >Firstname</Form.Label>
                <Form.Control type="name" placeholder="Enter firstname" onChange={(e)=> chooseFirstname(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLname">
                <Form.Label>Lastname</Form.Label>
                <Form.Control type="name" placeholder="Enter lastname" onChange={(e) => chooseLastname(e.target.value)} />
            </Form.Group>
    </Form>
    )
}

export default BookingForm;

