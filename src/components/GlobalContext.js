import React from "react";

const GlobalContext = React.createContext({ isMobile: false });

//ref https://juejin.im/post/5c87c1b4f265da2dc453b6d6
export class GlobalContextProvider extends React.Component {
  state = {
    isMobile: false
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    const isMobile = window.innerWidth < 620;
    this.setState({ width: window.innerWidth, height: window.innerHeight, isMobile });
  }

  render() {
    return (
      <GlobalContext.Provider value={this.state}>{this.props.children}</GlobalContext.Provider>
    );
  }
}

const GlobalContextConsumer = GlobalContext.Consumer;
export default GlobalContextConsumer;
