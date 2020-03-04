import React from "react";
import { requestObservation } from "../javascript/api";
import { Drawer, Descriptions, message } from "antd";

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
    let key = 0;

    const observations =
      this.state.observation &&
      this.state.observation.map(entry => {
        let obs = entry.resource;
        return (
          <Descriptions key={key++} title={obs.code.text}>
            <Descriptions.Item key={key++} label="ID">
              {obs.id}
            </Descriptions.Item>
            <Descriptions.Item key={key++} label="Category">
              {obs.category[0].coding[0].display}
            </Descriptions.Item>
            <Descriptions.Item key={key++} label="effectiveDateTime">
              {obs.effectiveDateTime}
            </Descriptions.Item>
            <Descriptions.Item key={key++} label="issued">
              {obs.issued}
            </Descriptions.Item>
          </Descriptions>
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
          <div>
            <Descriptions title="Patient Basic Info">
              <Descriptions.Item key={key++} label="Name">
                {`${patient.name[0].family} ${patient.name[0].given[0]} (${patient.name[0].prefix[0]})`}
              </Descriptions.Item>
              <Descriptions.Item key={key++} label="ID">
                {patient.id}
              </Descriptions.Item>
              <Descriptions.Item key={key++} label="Telephone">
                {patient.telecom[0].value}
              </Descriptions.Item>
              <Descriptions.Item key={key++} label="Birth Date">
                {patient.birthDate}
              </Descriptions.Item>
              <Descriptions.Item key={key++} label="Address">
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
