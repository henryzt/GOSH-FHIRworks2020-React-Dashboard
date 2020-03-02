import React, { Component } from "react";
import PatientCard from "../components/PatientCard";
import request from "../javascript/api";
import { Layout } from "antd";

const { Content } = Layout;

class PatientsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      awaitingData: true
    };
  }

  async componentDidMount() {
    await request();
    this.setState({
      awaitingData: false
    });
  }

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
        <PatientCard patientData={patient} loading={this.state.awaitingData}></PatientCard>
      </Content>
    );
  }
}

export default PatientsPage;
