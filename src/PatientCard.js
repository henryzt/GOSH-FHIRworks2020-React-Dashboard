import React, { Component } from "react";
import { Card } from "antd";

class PatientCard extends Component {
  render() {
    return (
      <Card title="Patient 1" extra={<a href="#">View Detail</a>} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    );
  }
}

export default PatientCard;
