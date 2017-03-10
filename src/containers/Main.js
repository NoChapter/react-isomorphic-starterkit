import React from "react";
import InlineCss from "react-inline-css";
import Transmit from "react-transmit";

class PlainText extends React.Component {
  render() {
    return (
      <div>{this.props.text}</div>
    );
  }
}

const ContainerA = Transmit.createContainer(PlainText, {
  initialVariables: {},
  fragments: {
    text: () => new Promise((res) => {
      res('container name is A');
    })
  }
});

const ContainerB = Transmit.createContainer(PlainText, {
  initialVariables: {},
  fragments: {
    text: () => new Promise((res) => {
      res('container name is B');
    })
  }
});

export default class Main extends React.Component {
  render() {
    return (
      <div>
	      <ContainerA variables={{}} />
	      <ContainerB variables={{}} />
      </div>
    );
  }
}
