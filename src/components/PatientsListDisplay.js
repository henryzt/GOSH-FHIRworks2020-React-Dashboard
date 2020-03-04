import React from "react";
import PatientCard from "./PatientCard";
import { Layout, Pagination, Row, Col, Result } from "antd";

const { Content } = Layout;

class PatientsListDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patientsDummy: [null, null, null, null, null, null, null, null, null],
      page: props.page ? props.page : 0,
      itemPerPage: 9
    };
  }

  render() {
    let patients = this.props.patients ? this.props.patients : this.state.patientsDummy;

    let startIdx = this.state.page * this.state.itemPerPage;

    let keyCounter = 0;
    let cardListItems = patients.slice(startIdx, startIdx + this.state.itemPerPage).map(patient => (
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
        defaultPageSize={this.state.itemPerPage}
        current={this.state.page + 1}
        total={patients && patients.length > 1 ? patients.length : 0}
        onChange={page => {
          this.setState({
            page: page - 1
          });
        }}
      />
    );

    const cardLayout = (
      <div>
        <Content
          style={{
            margin: "24px 16px"
          }}
        >
          <Row>{cardListItems}</Row>
        </Content>
        {pagination}
      </div>
    );

    return (
      <div>
        {patients.length > 0 ? (
          <div>{cardLayout}</div>
        ) : (
          <Result
            title="No search result to display"
            subTitle="Try a different keyword or turn on blur match"
          />
        )}
      </div>
    );
  }
}

export default PatientsListDisplay;
