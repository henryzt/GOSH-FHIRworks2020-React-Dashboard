import React, { Component } from "react";
import { Table } from "antd";

class PatientTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { patientData, loading } = this.props;

    // const name = patientData && patientData.name[0].family + " " + patientData.name[0].given[0];

    const columns = [
      {
        title: "Name",
        dataIndex: "name[0].family",
        key: "name",
        render: text => <a>{text}</a>,
        width: 150
      },
      {
        title: "Age",
        dataIndex: "name[0].given[0]",
        key: "age",
        width: 80
      },
      {
        title: "Address",
        dataIndex: "maritalStatus.text",
        key: "address 1",
        ellipsis: true
      },
      {
        title: "Long Column Long Column Long Column",
        dataIndex: "telecom.value",
        key: "address 2",
        ellipsis: true
      },
      {
        title: "Long Column Long Column",
        dataIndex: "communication[0].language.text",
        key: "address 3",
        ellipsis: true
      },
      {
        title: "Long Column",
        dataIndex: "id",
        key: "address 4",
        ellipsis: true
      }
    ];

    if (!loading) {
      return (
        <Table columns={columns} dataSource={patientData} />

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
    } else {
      return <div></div>;
    }
  }
}

export default PatientTable;
