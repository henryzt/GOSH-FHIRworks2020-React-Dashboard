import React, { Component } from "react";
import { Table } from "antd";

class PatientTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: null
    };
  }

  componentDidUpdate = lastProp => {
    console.log(lastProp, this.props, this.state);
    if (lastProp != this.props) {
      this.setState({
        tableData: this.updatePatientArray(this.props.patientData)
      });
    }
  };

  updatePatientArray = patients => {
    const tableData = [];
    patients.forEach(element => {
      if (!element) {
        return null;
      }
      element = element.resource;
      let patient = new Object();
      patient.name = element.name?.[0]?.family + " " + element.name?.[0]?.given?.[0];
      patient.id = element.id;
      patient.phone = element.telecom?.[0]?.value;
      patient.language = element.communication?.[0]?.language?.text;
      patient.maritalStatus = element.maritalStatus?.text;
      patient.address = element.address?.[0]?.line[0];
      patient.country = element.address?.[0]?.country;
      patient.gender = element.gender;
      tableData.push(patient);
    });

    return tableData;
  };

  render() {
    const { patientData, loading } = this.props;

    if (loading) {
      return <div></div>;
    }

    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: text => <a>{text}</a>,
        ellipsis: true
      },
      {
        title: "ID",
        dataIndex: "id",
        key: "id",
        ellipsis: true
      },
      {
        title: "Gender",
        dataIndex: "gender",
        key: "gender",
        ellipsis: true
      },
      {
        title: "language",
        dataIndex: "language",
        key: "language",
        ellipsis: true
      },
      {
        title: "Phone",
        dataIndex: "phone",
        key: "phone",
        ellipsis: true
      },
      {
        title: "Marital Status",
        dataIndex: "maritalStatus",
        key: "maritalStatus",
        ellipsis: true
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
        ellipsis: true
      },
      {
        title: "Country",
        dataIndex: "country",
        key: "country",
        ellipsis: true
      }
    ];

    return (
      <Table columns={columns} dataSource={this.state.tableData} />

      // {patientData && (
      //   <div>
      //     <p>{patientData.maritalStatus.text + ", " + patientData.gender}</p>
      //     <p>{patientData.birthDate + ", " + patientData.communication[0].language.text}</p>
      //     <p>{patientData.telecom.value}</p>
      //     <p>{patientData.id}</p>
      //     <p>{patientData.address[0].line[0] + ", " + patientData.address[0].country}</p>
      //   </div>
      // )}
    );
  }
}

export default PatientTable;
