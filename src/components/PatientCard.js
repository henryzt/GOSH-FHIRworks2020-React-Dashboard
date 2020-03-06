import React, { Component } from "react";
import { Card } from "antd";
import { GlobalContext } from "../components/GlobalContext";

class PatientCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  static contextType = GlobalContext;

  render() {
    const { patientData, loading } = this.props;

    const name = patientData && patientData.name[0].family + " " + patientData.name[0].given[0];

    return (
      <Card
        title={patientData ? name : "Loading..."}
        onClick={this.props.viewPatient}
        extra={
          <a disabled={loading} onClick={this.props.viewPatient}>
            View Detail
          </a>
        }
        style={{ width: this.context.isMobile ? "100%" : "auto", margin: "5px" }}
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
