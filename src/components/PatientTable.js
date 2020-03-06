import React, { Component } from "react";
import { Table, Skeleton } from "antd";

const moment = require("moment");

class PatientTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: null
    };
  }

  updatePatients = () => {
    console.log("AAAAAAAAAAAA");
    if (this.props.patientData != null && this.props.patientData[0] != null) {
      console.log("BBBBB");
      this.setState({
        tableData: this.updatePatientArray(this.props.patientData)
      });
    }
  };

  componentDidUpdate = lastProp => {
    console.log(lastProp, this.props, this.state);
    if (lastProp != this.props) this.updatePatients();
  };

  componentWillUnmount = () => {
    console.log("UNMOUNT", this.props);
  };

  componentDidMount = prop => {
    console.log("MOUNT", this.props, prop);
    this.updatePatients();
  };

  updatePatientArray = patients => {
    console.log("!!!", patients);
    const tableData = [];
    patients.forEach(elementRaw => {
      if (!elementRaw) {
        return null;
      }
      let element = elementRaw.resource;
      let patient = new Object();
      patient.name = element.name?.[0]?.family + " " + element.name?.[0]?.given?.[0];
      patient.id = element.id;
      patient.phone = element.telecom?.[0]?.value;
      patient.language = element.communication?.[0]?.language?.text;
      patient.maritalStatus = element.maritalStatus?.text;
      patient.address = element.address?.[0]?.line[0];
      patient.country = element.address?.[0]?.country;
      patient.gender = element.gender;
      patient.birthDate = element.birthDate;
      patient.age = moment().diff(element.birthDate, "years");
      patient.raw = elementRaw;
      tableData.push(patient);
    });

    return tableData;
  };

  render() {
    const { loading } = this.props;

    if (loading) {
      return (
        <div style={{ padding: "30px" }}>
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
        </div>
      );
    }

    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        ellipsis: true,
        width: 195,
        sorter: (a, b) => a.name.localeCompare(b.name),
        fixed: "left"
      },
      {
        title: "Observations",
        dataIndex: "raw",
        key: "raw",
        width: 120,
        render: obj => (
          <a
            onClick={() => {
              this.props.viewPatient(obj);
            }}
          >
            View Detail
          </a>
        ),
        fixed: ""
      },
      {
        title: "ID",
        dataIndex: "id",
        key: "id",
        ellipsis: true,
        width: 330,
        sorter: (a, b) => a.id.localeCompare(b.id)
      },
      {
        title: "Gender",
        dataIndex: "gender",
        key: "gender",
        ellipsis: true,
        width: 100,
        sorter: (a, b) => a.gender.localeCompare(b.gender)
      },
      {
        title: "Brith Date",
        dataIndex: "birthDate",
        key: "birthDate",
        ellipsis: true,
        width: 150,
        sorter: (a, b) => a.birthDate.localeCompare(b.birthDate)
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
        ellipsis: true,
        width: 100,
        sorter: (a, b) => a.age - b.age
      },
      {
        title: "language",
        dataIndex: "language",
        key: "language",
        ellipsis: true,
        sorter: (a, b) => a.language.localeCompare(b.language)
      },
      {
        title: "Phone",
        dataIndex: "phone",
        key: "phone",
        ellipsis: true,
        width: 150,
        sorter: (a, b) => a.phone.localeCompare(b.phone)
      },
      {
        title: "Marital Status",
        dataIndex: "maritalStatus",
        key: "maritalStatus",
        ellipsis: true,
        width: 150,
        sorter: (a, b) => a.maritalStatus.localeCompare(b.maritalStatus)
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
        ellipsis: true,
        width: 300,
        sorter: (a, b) => a.address.localeCompare(b.address)
      },
      {
        title: "Country",
        dataIndex: "country",
        key: "country",
        ellipsis: true,
        width: 110,
        sorter: (a, b) => a.country.localeCompare(b.country)
      }
    ];

    return (
      <Table
        columns={columns}
        pagination={{ showSizeChanger: true }}
        dataSource={this.state.tableData}
        rowKey="id"
      />
    );
  }
}

export default PatientTable;
