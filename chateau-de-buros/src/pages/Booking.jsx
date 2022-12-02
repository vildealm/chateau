import React, {useEffect, useState} from "react";
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



const Booking = () => {

  //Variable
  let navigate = useNavigate();


  //State
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [email, setEmail] = useState("");
  const [office, setOffice] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [activeStep, setActiveStep] = React.useState(0);
  const [errMessage, setErrMessage] = useState("");

  //Function
  const chooseOffice = (event) => {
    setOffice(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sanityClient
        .create({
          _type: "booking",
          checkin: startDate,
          checkout: endDate,
          firstname: firstname,
          lastname: lastname,
          email: email,
          office: office,
        })
        .then(console.log);
      sanityClient.fetch("*[_type == 'booking']").then(documents => console.log(documents))
      setFirstname("");
      setLastname("");
      setErrMessage("");
      navigate("/");
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

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <BookingForm
                  chooseFirstname={setFirstname}
                  chooseLastname={setLastname}
                  chooseEmail={setEmail}
                  chooseOffice={chooseOffice}
                  office={office}
                  checkin={startDate}
                  chooseStartDate={setStartDate}
                  checkout={endDate}
                  chooseEndDate={setEndDate}
                />;
      case 1:
        return <Review
                  firstname={firstname}
                  lastname={lastname}
                  email={email}
                  office={office}
                />;
      default:
        throw new Error('Unknown step');
    }
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
              {getStepContent(activeStep)}
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
                </Button>
                }
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