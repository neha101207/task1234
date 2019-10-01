import React from "react";
import { BrowserRouter } from "react-router-dom"
import Main from "./UI-Route/Routes/Main"

class App extends React.Component {
  render() {
    return (
      <div>
     <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
