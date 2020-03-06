import React from "react";
import Header from "../components/Header";
import { Result, Button, Row, Col, Card } from "antd";

import { Doughnut } from "react-chartjs-2";

const DisplayCard = ({ children }) => {
  return (
    <Card style={{ width: "auto", margin: "10px" }} hoverable>
      {children}
    </Card>
  );
};

const StatisticsPage = props => {
  return (
    <div>
      <Header title="Statistics"></Header>

      <Row style={{ padding: "40px" }}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <DisplayCard children={<div>gender</div>}></DisplayCard>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <DisplayCard children={<div>language</div>}></DisplayCard>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <DisplayCard children={<div>age</div>}></DisplayCard>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <DisplayCard children={<div>maritalStatus</div>}></DisplayCard>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <DisplayCard children={<div>state</div>}></DisplayCard>
        </Col>
      </Row>
    </div>
  );
};

export default StatisticsPage;
