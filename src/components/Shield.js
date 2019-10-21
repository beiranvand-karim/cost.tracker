import React, { Component } from "react";

class Shield extends Component {
  state = {
    error: false,
    info: null
  };
  componentDidCatch(error, info) {
    this.setState({
      error: error,
      info: info
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>something went wrong</h1>
          {this.state.info.componentStack}
        </div>
      );
    }
    return this.props.children;
  }
}

export default Shield;
