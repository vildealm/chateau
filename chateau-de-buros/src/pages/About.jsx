import React from "react";
import Layout from "../pages/Layout";
import QA from "../components/QA";

function About() {
    return (
      <>
        <Layout />
        <h1> About us </h1>
        <h3> Questions & Answers</h3>
        <QA key={1}/>
      <h3> The host</h3>

      </>
    );
  }


  export default About;