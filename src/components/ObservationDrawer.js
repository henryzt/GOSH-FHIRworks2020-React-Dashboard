import React from "react";
import { Drawer } from "antd";

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

    return (
      <Drawer
        title="Patient Observation"
        placement="right"
        closable={true}
        onClose={this.onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    );
  }
}

export default ObservationDrawer;
