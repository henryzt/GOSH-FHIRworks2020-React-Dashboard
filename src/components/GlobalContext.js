import React from "react";

const GlobalContext = React.createContext({ isMobile: false });

export class GlobalContextProvider extends React.Component {
  // 2-1. 重写 state
  state = {
    isMobile: false
  };

  render() {
    // 2-2. 通过 Provider 组件的 value 将 state 提供出去
    return (
      <GlobalContext.Provider value={this.state}>{this.props.children}</GlobalContext.Provider>
    );
  }
}

const GlobalContextConsumer = GlobalContext.Consumer;
export default GlobalContextConsumer;
