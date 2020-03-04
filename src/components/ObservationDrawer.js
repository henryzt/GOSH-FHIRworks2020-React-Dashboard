import React from "react";
import { requestObservation } from "../javascript/api";
import { Drawer, Descriptions, message } from "antd";

const keyGen = () => {
  let r = Math.random()
    .toString(36)
    .substring(7);
  return r;
};

class ObservationDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      observation: null
    };
  }

  //load observation
  async componentDidUpdate() {
    if (this.props.patient && !this.state.observation) {
      let json = await requestObservation(this.props.patient.resource.id);

      this.setState({
        loading: false,
        observation: json
      });
    }
  }

  onClose = () => {
    this.setState({
      loading: true,
      observation: null
    });
    console.log(this.state);
    this.props.onClose();
  };

  render() {
    const { visible } = this.props;
    const patient = this.props.patient && this.props.patient.resource;

    let observations =
      this.state.observation &&
      this.state.observation.map(entry => {
        let obs = entry.resource;
        return (
          <div key={keyGen()} style={{ width: "100%" }}>
            <Descriptions
              bordered={true}
              layout="vertical"
              key={keyGen()}
              title={obs.code.text}
              column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            >
              <Descriptions.Item key={keyGen()} label="ID">
                {obs.id}
              </Descriptions.Item>
              <Descriptions.Item key={keyGen()} label="Category">
                {obs.category?.[0]?.coding?.[0].display}
              </Descriptions.Item>
              <Descriptions.Item key={keyGen()} label="effectiveDateTime">
                {obs.effectiveDateTime}
              </Descriptions.Item>
              <Descriptions.Item key={keyGen()} label="issued">
                {obs.issued}
              </Descriptions.Item>
            </Descriptions>
          </div>
        );
      });

    return (
      <Drawer
        title="Patient Observation"
        placement="right"
        closable={true}
        onClose={this.onClose}
        visible={visible}
        width={"40%"}
      >
        {patient && (
          <div key={keyGen()}>
            <Descriptions title="Patient Basic Info">
              <Descriptions.Item key={keyGen()} label="Name">
                {`${patient.name[0]?.family} ${patient.name[0]?.given?.[0]} (${patient.name[0]?.prefix?.[0]})`}
              </Descriptions.Item>
              <Descriptions.Item key={keyGen()} label="ID">
                {patient.id}
              </Descriptions.Item>
              <Descriptions.Item key={keyGen()} label="Telephone">
                {patient.telecom[0].value}
              </Descriptions.Item>
              <Descriptions.Item key={keyGen()} label="Birth Date">
                {patient.birthDate}
              </Descriptions.Item>
              <Descriptions.Item key={keyGen()} label="Address">
                {`${patient.address[0].line[0]}, ${patient.address[0].city}, ${patient.address[0].state}, ${patient.address[0].country}`}
              </Descriptions.Item>
            </Descriptions>
            {observations}
          </div>
        )}
      </Drawer>
    );
  }
}

export default ObservationDrawer;
