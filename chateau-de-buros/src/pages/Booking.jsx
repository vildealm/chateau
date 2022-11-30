import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Layout from "./Layout";
import BookingForm from "./BookingForm";
import Review from "./Review";
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import sanityClient from '../client';


const steps = ['Booking', 'Review your booking'];

function getStepContent(step, setFirstname, firstname, lastname, setLastname) {
  switch (step) {
    case 0:
      return <BookingForm
                chooseFirstname={setFirstname}
                chooseLastname={setLastname}
              />;
    case 1:
      return <Review
                firstname={firstname}
                lastname={lastname}
              />;
    default:
      throw new Error('Unknown step');
  }
}

/*async function handler(req, res) {
  const {newBooking} = await JSON.parse(req.body);
  console.log("MEMEME" + newBooking)
  try {
    await sanityClient
      .create({
        _type: "booking",
        firstname: newBooking.firstname,
        lastname: newBooking.lastname,
      })
      .then((res) => {
        console.log(`Booking was created, document ID is ${res._id}`);
      });
    res
      .status(200)
      .json({ msg: `Booking was created, document ID is ${res._id}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error, check console" });
  }
}*/

const Booking = () => {
  //Variable
  let navigate = useNavigate();

  //Function
  const handleCountry = (event) => {
    setCountry(event.target.value);
  };

  //State
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [activeStep, setActiveStep] = React.useState(0);
  const [errMessage, setErrMessage] = useState("");

  //FOR THE SUBMIT BUTTON:
  const handleSubmit = async (req, res) => {
    req.preventDefault();
    const {newBooking} = await JSON.parse(req.body);
    console.log("MEMEME" + newBooking)
    if (firstname.length === 0 || lastname.length === 0) {
      setErrMessage("Firstname must be filled out.");
    } else {
        try {
          await sanityClient
          .create({
            _type: "booking",
            firstname: newBooking.firstname,
            lastname: newBooking.lastname,
          })
          .then((res) => {
            console.log(`Booking was created, document ID is ${res._id}`);
          });
        res
          .status(200)
          .json({ msg: `Booking was created, document ID is ${res._id}` });
      } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error, check console" });
      }
    }
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const routeChange = () =>{
      let path = `/`;
      navigate(path);
  }

    return (
  <>
    <Layout />
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Booking
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Button onClick={routeChange}>
                Exit
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep, setFirstname, firstname, lastname, setLastname)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                {activeStep === steps.length - 1 ? <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{ mt: 3, ml: 1 }}
                >
                  Place order
                </Button> : <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                Next
                </Button>}
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
      </>
    );
  }

export default Booking;
/*
await fetch("./api/booking", {
        method: "POST",
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
        }),
      });

      setFirstname("");
      setLastname("");
      setErrMessage("");
      navigate("/");
*/