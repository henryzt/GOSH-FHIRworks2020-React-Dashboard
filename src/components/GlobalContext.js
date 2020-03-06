import React from "react";

export const GlobalContext = React.createContext({ isMobile: false });

//ref https://juejin.im/post/5c87c1b4f265da2dc453b6d6
export class GlobalContextProvider extends React.Component {
  state = {
    isMobile: false,
    viewInCard: false
  };

  setViewInCard = viewInCard => {
    this.setState({ ...this.state, viewInCard: viewInCard });
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
    const { setViewInCard } = this;
    return (
      <GlobalContext.Provider value={{ ...this.state, setViewInCard }}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

const GlobalContextConsumer = GlobalContext.Consumer;
export default GlobalContextConsumer;
