import React, { Component } from "react";
import PatientsListDisplay from "../components/PatientsListDisplay";
import request from "../javascript/api";
import { message } from "antd";

class PatientsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      awaitingData: true,
      patients: null,
      page: 0
    };
  }

  async componentDidMount() {
    let json = null;
    if (window.$globalPatients) {
      json = window.$globalPatients;
    } else {
      // start load api, show loading
      const msgKey = "loading";
      const hideLoading = message.loading("Fetching patient data..", 0);
      json = await request();
      window.$globalPatients = json;
      hideLoading();
      message.success({ content: "Patient data loaded!", key: msgKey, duration: 2 });
    }
    this.setState({
      awaitingData: false,
      patients: json
    });
  }

  render() {
    return (
      <div>
        <PatientsListDisplay patients={this.state.patients} loading={this.state.awaitingData} />
      </div>
    );
  }
}

export default PatientsPage;
