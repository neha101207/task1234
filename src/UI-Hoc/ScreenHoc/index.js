import React from "react";

const hoc = () => Component => {
  class Hoc extends React.Component {
    state = {
      captureData: {},
      hasPath: false,
      receiveConifg:null
    };

    componentDidMount() {
      this.pathChangeHandler()
    }
    pathChangeHandler = () => {
      const { match } = this.props;
      const { params } = match;
      const receiveConifg = require(`../../UI-Config/screen/specification/${params.path}`).default;
      this.setState({
        hasPath: true,
        receiveConifg
      })
    }

    onFlexiSubmit = () => {
      console.log(this.state.captureData);
    };
    handleChange = (value, key) => {
      let { captureData } = this.state;

      this.setState({
        ...this.state,
        captureData: { ...captureData, [key]: value }
      });
    };

    render() {
      console.log(this.state.receiveConifg,"aaa");

      return (
        <div>
          {this.state.hasPath ?
            <Component
              onSubmit={this.onFlexiSubmit}
              config={this.state.receiveConifg}
              // config={config}
              // configReg={this.flexConfigForRegistration}
              onChange={this.handleChange}
              {...this.props}
            /> : null
          }
        </div>
      );
    }
  }
  return Hoc;
};

export default hoc;
