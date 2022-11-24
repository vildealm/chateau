
import React from "react";
import Typography from '@mui/material/Typography';

const Review = ({firstname}) => {
    return (
        <div>
           <Typography variant="h5" gutterBottom>
                <b> Thank you {firstname} your order.</b>
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #1. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
            </Typography>
        </div>
    );
}

export default Review;

/*
const [allBookingData, setAllBookings] = useState(null);
useEffect(() => {sanityClient
        .fetch(
            `*[_type == "document"]{
            title,
            name,
            fields{
            asset->{
            _id,
            url
            }
        }
        }`
        )
        .then((data) => setAllBookings(data))
        .catch(console.error);
    }, []); */
/*
{allBookingData &&
                allBookingData.map((post, index) => (
            Review

        ))}
*/