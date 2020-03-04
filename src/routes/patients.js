import React, { Component } from "react";
import PatientsListDisplay from "../components/PatientsListDisplay";
import { request } from "../javascript/api";
import Header from "../components/Header";
import { message } from "antd";

const moment = require("moment");

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
      const hideLoading = message.loading("Fetching patient data..", 0);
      json = await request();
      window.$globalPatients = json;
      hideLoading();
      message.success({ content: "Patient data loaded!", duration: 2 });
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
        {!this.props.filter && <Header title="Patients List"></Header>}
        <PatientsListDisplay patients={patientData} loading={this.state.awaitingData} />
      </div>
    );
  }
}

function recursiveFind(obj, value, blurred) {
  let json = JSON.stringify(obj);
  const regex = blurred
    ? new RegExp(".*" + value.toLowerCase() + ".*", "g")
    : new RegExp('"' + value.toLowerCase() + '"', "g");
  return json.toLowerCase().search(regex) !== -1;
}

function doFilter(patients, filter) {
  let result = [];
  for (let patient of patients) {
    let data = patient.resource;
    let match = [];
    if (filter.name) {
      match.push(recursiveFind(data.name, filter.name, filter.blurredSearch));
    }
    if (filter.birthdate) {
      let isWithIn =
        filter.birthdate[0] <= moment(data.birthDate) &&
        moment(data.birthDate) <= filter.birthdate[1];
      match.push(isWithIn);
    }
    if (filter.gender) {
      match.push(data.gender == filter.gender);
    }
    if (filter.phone) {
      match.push(recursiveFind(data.telecom, filter.phone, filter.blurredSearch));
    }
    if (filter.address) {
      match.push(recursiveFind(data.address, filter.address, filter.blurredSearch));
    }
    if (filter.maritalStatus) {
      match.push(recursiveFind(data.maritalStatus, filter.maritalStatus, filter.blurredSearch));
    }
    if (filter.id) {
      match.push(recursiveFind(data.id, filter.id, filter.blurredSearch));
    }
    if (filter.anythingElse) {
      match.push(recursiveFind(data, filter.anythingElse, filter.blurredSearch));
    }

    // result
    if (match.every(x => x === true)) {
      result.push(patient);
    }
  }
  console.log(result);
  return result;
}

export default PatientsPage;
