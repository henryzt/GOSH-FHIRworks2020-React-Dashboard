import React, { Component } from "react";
import PatientCard from "../components/PatientCard";
import request from "../javascript/api";
import { Layout, message, Pagination } from "antd";

const { Content } = Layout;

class PatientsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      awaitingData: true,
      patients: [{ entry: [null, null, null, null, null, null, null, null, null, null] }],
      page: 0
    };
  }

  async componentDidMount() {
    // start load api, show loading
    const msgKey = "loading";
    const hideLoading = message.loading("Fetching patient data..", 0);
    let json = await request();
    this.setState({
      awaitingData: false,
      patients: json
    });
    hideLoading();
    message.success({ content: "Patient data loaded!", key: msgKey, duration: 2 });
  }

  render() {
    let listItems = this.state.patients[this.state.page].entry.map(patient => (
      <PatientCard
        patientData={patient && patient.resource}
        loading={this.state.awaitingData}
      ></PatientCard>
    ));

    return (
      <div>
        <Content
          // className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap" }}>{listItems}</div>
        </Content>
        <Pagination
          style={{ textAlign: "center" }}
          disabled={this.state.awaitingData}
          defaultCurrent={1}
          current={this.state.page + 1}
          total={this.state.patients.length > 1 ? this.state.patients.length : 50}
          onChange={page => {
            this.setState({
              page: page - 1
            });
          }}
        />
      </div>
    );
  }
}

export default PatientsPage;
