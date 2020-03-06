import React from "react";
import Header from "../components/Header";
import { getPatientList, parseAllPatientData } from "../javascript/api";
import { Result, Button, Row, Col, Card, message } from "antd";

import { Doughnut, Bar } from "react-chartjs-2";

const bgColors = ["#FF6384", "#36A2EB", "#FFCE56"];
const bgColorsHover = ["#FF6384", "#36A2EB", "#FFCE56"];

const DisplayCard = ({ children, title }) => {
  return (
    <Card style={{ width: "auto", margin: "10px" }} title={title} hoverable>
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

const findTop = (data, topNum) => {
  const findSumFuc = (total, num) => {
    return total + num;
  };
  console.log(data);
  const sum = Object.values(data).reduce(findSumFuc);
  const keysSorted = Object.keys(data).sort((a, b) => {
    return data[b] - data[a];
  });
  console.log(keysSorted);
  let topData = keysSorted.slice(0, topNum).map(key => {
    return { [keysSorted[key]]: data[key] };
  });
  const rest = sum - Object.values(topData).reduce(findSumFuc);
  topData.other = rest;
  console.log(topData);
  return topData;
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

  StateChart = () => {
    const occ = findTop(findOccurence(this.state.patients, "city"), 5);
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
    return <Bar data={data} />;
  };

  render() {
    return (
      <div>
        <Header title="Statistics"></Header>
        {this.state.patients && (
          <div>
            <Row style={{ padding: "40px" }}>
              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <DisplayCard children={this.GenderChart()} title="Gender"></DisplayCard>
              </Col>
              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <DisplayCard children={this.StateChart()}></DisplayCard>
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
            </Row>
          </div>
        )}
      </div>
    );
  }
}

export default StatisticsPage;
