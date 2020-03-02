import React, { Component } from "react";
import PatientCard from "../components/PatientCard";
import request from "../javascript/api";
import { Layout, message } from "antd";

const { Content } = Layout;

class PatientsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      awaitingData: true
    };
  }

  async componentDidMount() {
    // start load api, show loading
    const msgKey = "loading";
    const hideLoading = message.loading("Fetching patient data..", 0);
    await request();
    this.setState({
      awaitingData: false
    });
    hideLoading();
    message.success({ content: "Patient data loaded!", key: msgKey, duration: 2 });
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
