import React from "react";
import PatientCard from "./PatientCard";
import { Layout, Pagination, Row, Col } from "antd";

const { Content } = Layout;

class PatientsListDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patientsDummy: [{ entry: [null, null, null, null, null, null, null, null, null] }],
      page: props.page ? props.page : 0
    };
  }

  render() {
    let patients = this.props.patients ? this.props.patients : this.state.patientsDummy;

    let keyCounter = 0;
    let listItems = patients[this.state.page].entry.map(patient => (
      <Col xs={23} sm={23} md={12} lg={8} style={{ padding: "10px" }} key={keyCounter++}>
        <PatientCard
          patientData={patient && patient.resource}
          loading={this.props.loading}
        ></PatientCard>
      </Col>
    ));

    let pagination = (
      <Pagination
        style={{ textAlign: "center" }}
        disabled={this.props.loading}
        defaultCurrent={1}
        current={this.state.page + 1}
        total={patients && patients.length > 1 ? patients.length : 50}
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
          style={{
            margin: "24px 16px"
          }}
        >
          <Row>{listItems}</Row>
        </Content>
        {pagination}
      </div>
    );
  }
}

export default PatientsListDisplay;
