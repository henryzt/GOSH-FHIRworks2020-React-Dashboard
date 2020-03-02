import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import PatientCard from "./PatientCard";

function App() {
  const patient = {
    name: "Charlie",
    job: "Janitor"
  };

  return (
    <div className="App">
      <PatientCard patientData={patient}></PatientCard>
    </div>
  );
}

export default App;
