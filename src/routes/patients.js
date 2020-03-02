import React, { Component } from "react";
import PatientCard from "../components/PatientCard";
import { Layout } from "antd";

const { Content } = Layout;

class PatientsPage extends React.Component {
  render() {
    const patient = {
      name: "Charlie",
      job: "Janitor"
    };

    return (
      <Content
        className="site-layout-background"
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280
        }}
      >
        <PatientCard patientData={patient}></PatientCard>
      </Content>
    );
  }
}

export default PatientsPage;
