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
    const patientData =
      this.props.filter && this.state.patients
        ? doFilter(this.state.patients, this.props.filter)
        : this.state.patients;
    return (
      <div>
        <PatientsListDisplay patients={patientData} loading={this.state.awaitingData} />
      </div>
    );
  }
}

function recursiveFind(obj, value) {
  let json = JSON.stringify(obj);
  const regex = new RegExp('"' + value + '"', "g");
  console.log(json);
  return json.search(regex) !== -1;
}

function doFilter(patients, filter) {
  let result = [];
  for (let patient of patients) {
    let data = patient.resource;
    let match = false;
    if (filter.name) {
      match = recursiveFind(data.name, filter.name);
    }

    // result
    if (match) {
      result.push(patient);
    }
  }
  console.log(result);
  return result;
}

export default PatientsPage;
