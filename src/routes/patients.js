import React, { Component } from "react";
import PatientCard from "../components/PatientCard";
import request from "../javascript/api";
import { Layout, message, Pagination, Row, Col } from "antd";

const { Content } = Layout;

class PatientsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      awaitingData: true,
      patients: [{ entry: [null, null, null, null, null, null, null, null, null] }],
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
    window.$globalPatients = json;
    hideLoading();
    message.success({ content: "Patient data loaded!", key: msgKey, duration: 2 });
  }

  render() {
    let listItems = this.state.patients[this.state.page].entry.map(patient => (
      <Col xs={23} sm={23} md={12} lg={8} style={{ padding: "10px" }}>
        <PatientCard
          patientData={patient && patient.resource}
          loading={this.state.awaitingData}
        ></PatientCard>
      </Col>
    ));

    let pagination = (
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
    );

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
          <Row>{listItems}</Row>
        </Content>
        {pagination}
      </div>
    );
  }
}

export default PatientsPage;
