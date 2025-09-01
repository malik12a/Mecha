import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup/SignUp";
import AboutCompany from "./Pages/Signup/AboutCompany";
import Usecases from "./Pages/Signup/Usecases";
import Welcome from "./Pages/Signup/Welcome";
import BasicSetup from "./Pages/Setup/BasicSetup";
import TrainingData from "./Pages/Setup/TrainingData";
import CustomizeWidget from "./Pages/Setup/CustomizedWidget";
import Dashboard from "./Pages/Dashboard/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about-company" element={<AboutCompany />} />
      <Route path="/usecases" element={<Usecases />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/basic-setup" element={<BasicSetup />} />
      <Route path="/training-data" element={<TrainingData />} />
      <Route path="/customize-widget" element={<CustomizeWidget />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
