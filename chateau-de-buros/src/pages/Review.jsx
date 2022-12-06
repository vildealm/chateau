
import React from "react";
import Typography from '@mui/material/Typography';
import "../styles/Form.css"

const Review = ({firstname, lastname, checkin, checkout, email,guests, rooms, lunch, dinner}) => {

    const strCheckIn = new Date(checkin).toDateString()
    const strCheckOut = new Date(checkout).toDateString()

    return (
        <div style={{margin: 10}}>
           <Typography variant="h5" gutterBottom style={{marginBottom: 20}}>
                <b> Thank you {firstname} {lastname} for your order.</b>
            </Typography>
            <hr
            style={{
                color: "gray",
                backgroundColor: "gray",
                height: 2,
                marginTop: 40
            }}
            />
            <Typography variant="h6" style={{marginTop: 10}}>
                 <b>Check-in</b>
                 <br></br>
                 {strCheckIn}
                 <br></br>
                 Check-in is anytime after 14:00 pm
            </Typography>
            <Typography  variant="h6" style={{marginTop: 20}} >
                <b>Check-out</b>
                <br></br>
                {strCheckOut}
                <br></br>
                Check-out is 15:00 pm
            </Typography>
            <hr
            style={{
                color: "gray",
                backgroundColor: "gray",
                height: 2
            }}
            />
            <Typography variant="h6">
                <b> Guests </b>
                <br></br>
                <p> {guests}</p>
            </Typography>
            <hr
            style={{
                color: "gray",
                backgroundColor: "gray",
                height: 2
            }}
            />
            <Typography variant="h6">
                <b> Rooms </b>
                <br></br>
                <p> {rooms}</p>
            </Typography>
            <hr
            style={{
                color: "gray",
                backgroundColor: "gray",
                height: 2
            }}
            />
            <Typography variant="h6">
                <b> Food orderings </b>
                <br></br>
                <p> Lunch for: {lunch} guest</p>
                <p> Dinner for: {dinner} guest</p>
            </Typography>
            <hr
            style={{
                color: "gray",
                backgroundColor: "gray",
                height: 2
            }}
            />
            <Typography variant="subtitle1">
                We have emailed your order confirmation to: <b>{email}</b>
            </Typography>
        </div>
    );
}

export default Review;