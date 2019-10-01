import React from "react";
import hoc from "../../UI-Hoc/ScreenHoc";
import Flexi from "../../UI-Components/Flexi";

class ScreenInterface extends React.Component {
  render() {

    return (
      <div>
        <Flexi
          onSubmit={this.props.onSubmit}
          config={this.props.config}
          // configReg={this.props.configReg}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default hoc()(ScreenInterface);
