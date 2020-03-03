import React, { Component } from "react";
import { Card } from "antd";

class PatientCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    const { patientData, loading } = this.props;

    const name = patientData && patientData.name[0].family + " " + patientData.name[0].given[0];

    return (
      <Card
        title={patientData ? name : "Loading..."}
        extra={
          <a href="#" disabled={loading}>
            View Detail
          </a>
        }
        style={{ width: "100%", margin: "10px" }}
        loading={loading}
        hoverable
      >
        {patientData && (
          <div>
            <p>{patientData.maritalStatus.text + ", " + patientData.gender}</p>
            <p>{patientData.birthDate + ", " + patientData.communication[0].language.text}</p>
            <p>{patientData.telecom.value}</p>
            <p>{patientData.id}</p>
            <p>{patientData.address[0].line[0] + ", " + patientData.address[0].country}</p>
          </div>
        )}
      </Card>
    );
  }
}

export default PatientCard;
