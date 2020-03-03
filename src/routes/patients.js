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
      patients: null,
      page: 1
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
    const patient = {
      name: "Charlie",
      job: "Janitor"
    };

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
          <PatientCard
            patientData={this.state.patients && this.state.patients[0].entry[0].resource}
            loading={this.state.awaitingData}
          ></PatientCard>
        </Content>
        <Pagination style={{ textAlign: "center" }} disabled defaultCurrent={1} total={50} />
      </div>
    );
  }
}

export default PatientsPage;
