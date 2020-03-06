import React, { Component } from "react";
import { Table, Skeleton } from "antd";
import { parseAllPatientData } from "../javascript/api";

class PatientTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: null
    };
  }

  updatePatients = () => {
    if (this.props.patientData != null && this.props.patientData[0] != null) {
      this.setState({
        tableData: this.updatePatientArray(this.props.patientData)
      });
    }
  };

  componentDidUpdate = lastProp => {
    // console.log(lastProp, this.props, this.state);
    if (lastProp != this.props) this.updatePatients();
  };

  componentDidMount = prop => {
    this.updatePatients();
  };

  updatePatientArray = patients => {
    return parseAllPatientData(patients);
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
        width: 180,
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
