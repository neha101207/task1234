import React from "react";
import {  Route } from "react-router-dom";
import ScreenInterface from "../../UI-Pages/ScreenInterface/"


class Main extends React.Component {
  render() {

    return (
      <div>
        
        <Route exact path={`/screenInterface/:path`} component={ScreenInterface} />
        
      </div>

    );

  }

}

export default Main;
