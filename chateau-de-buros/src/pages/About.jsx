import React from "react";
import Layout from "../pages/Layout";
import {useLocation} from "react-router-dom";


function About() {
    return (
      <>
        <Layout />
        <h1> About us </h1>
        <ul>
          <li>
            <h3> Questions & Answers</h3>
          </li>
          <li>
          <h3> The host</h3>
          </li>
        </ul>
      </>
    );
  }


  export default About;