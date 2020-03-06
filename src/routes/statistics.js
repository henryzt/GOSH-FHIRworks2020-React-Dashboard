import React from "react";
import Header from "../components/Header";
import { getPatientList, parseAllPatientData } from "../javascript/api";
import { Result, Button, Row, Col, Card, message } from "antd";

import { Doughnut } from "react-chartjs-2";

const bgColors = ["#FF6384", "#36A2EB", "#FFCE56"];
const bgColorsHover = ["#FF6384", "#36A2EB", "#FFCE56"];

const DisplayCard = ({ children }) => {
  return (
    <Card style={{ width: "auto", margin: "10px" }} hoverable>
      {children}
    </Card>
  );
};

const findOccurence = (data, key) => {
  //ref https://stackoverflow.com/questions/29957390/counting-occurrences-of-object-values
  const occ = data.reduce(function(sums, entry) {
    sums[entry[key]] = (sums[entry[key]] || 0) + 1;
    return sums;
  }, {});
  return occ;
};

class StatisticsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: null
    };
  }

  async componentDidMount() {
    let json = await getPatientList(message);
    json = parseAllPatientData(json);

    this.setState({
      patients: json
    });
  }

  GenderChart = () => {
    const occ = findOccurence(this.state.patients, "gender");
    console.log(occ);
    const data = {
      labels: Object.keys(occ),
      datasets: [
        {
          data: Object.values(occ),
          backgroundColor: bgColors,
          hoverBackgroundColor: bgColorsHover
        }
      ]
    };
    console.log(occ);
    return <Doughnut data={data} />;
  };

  render() {
    return (
      <div>
        <Header title="Statistics"></Header>
        {this.state.patients && (
          <div>
            <Row style={{ padding: "40px" }}>
              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <DisplayCard children={this.GenderChart()}></DisplayCard>
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
        )}
      </div>
    );
  }
}

export default StatisticsPage;
