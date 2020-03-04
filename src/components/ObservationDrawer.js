import React from "react";
import { Drawer, Descriptions } from "antd";

class ObservationDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null
    };
  }

  onClose = () => {
    this.props.onClose();
  };

  render() {
    const { visible } = this.props;
    const patient = this.props.patient && this.props.patient.resource;
    console.log(patient);
    let key = 0;
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
        )}
      </Drawer>
    );
  }
}

export default ObservationDrawer;
