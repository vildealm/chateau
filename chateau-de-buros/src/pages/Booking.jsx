import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Layout from "./Layout";
import BookingForm from "./BookingForm";
//import PaymentForm from "./PaymentForm";
import Review from "./Review";
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

//case 1:
//return <PaymentForm />;
//'Payment details',
const steps = ['Booking', 'Review your booking'];

function getStepContent(step, setFirstname, firstname) {
  switch (step) {
    case 0:
      return <BookingForm chooseFirstname={setFirstname}/>;
    case 1:
      return <Review firstname={firstname}/>;
    default:
      throw new Error('Unknown step');
  }
}

const Booking = () => {

  //Variables
  let navigate = useNavigate();

  //Functions
  const handleCountry = (event) => {
    setCountry(event.target.value);
  };


  //States
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

   /*
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    firstname,
    setFirstname,
    lastname,
    setLastname,
    email,
    setEmail,
    country,
    setCountry
  ]);*/

  const [activeStep, setActiveStep] = React.useState(0);

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
              {getStepContent(activeStep, setFirstname, firstname, lastname )}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
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



*/