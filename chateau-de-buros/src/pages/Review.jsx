
import React from "react";
import Typography from '@mui/material/Typography';

const Review = ({firstname, lastname, startDate, endDate}) => {
    return (
        <div>
           <Typography variant="h5" gutterBottom>
                <b> Thank you {firstname} {lastname} for your order.</b>
              </Typography>
              <Typography variant="subtitle1">
                <ul>
                    <li>
                        Check-in: {startDate}
                    </li>
                    <li>
                        Check-out: {endDate}
                    </li>
                </ul>
                Your order number is #1. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
            </Typography>
        </div>
    );
}

export default Review;