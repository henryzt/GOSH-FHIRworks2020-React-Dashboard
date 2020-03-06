import React from "react";
import Header from "../components/Header";
import { getPatientList, parseAllPatientData } from "../javascript/api";
import { Result, Button, Row, Col, Card, message } from "antd";

import { Doughnut, Bar, Pie } from "react-chartjs-2";

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

const findTop = (data, topNum, displayOther) => {
  const findSumFuc = (total, num) => {
    return total + num;
  };
  const sum = Object.values(data).reduce(findSumFuc);
  // inspired by https://stackoverflow.com/questions/1069666/sorting-object-property-by-values
  let keysSorted = Object.keys(data).sort((a, b) => {
    return data[b] - data[a];
  });
  keysSorted = keysSorted.slice(0, topNum);
  let topData = {};
  keysSorted.forEach(element => {
    topData[element] = data[element];
  });
  if (displayOther) {
    const rest = sum - Object.values(topData).reduce(findSumFuc);
    topData.other = rest;
  }
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

  CityChart = () => {
    const occ = findTop(findOccurence(this.state.patients, "city"), 10);
    console.log(occ);
    const data = {
      labels: Object.keys(occ),
      datasets: [
        {
          data: Object.values(occ),
          backgroundColor: bgColors,
          hoverBackgroundColor: bgColorsHover,
          label: "City"
        }
      ]
    };
    console.log(occ);
    return <Pie data={data} />;
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
                <DisplayCard children={this.CityChart()} title="Top 5 Cities"></DisplayCard>
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
