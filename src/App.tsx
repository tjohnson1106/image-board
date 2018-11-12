import React, { Component } from "react";
import { withAuthenticator } from "aws-amplify-react";

import "./App.css";
import { CreateActionForm } from "./components/CreateActionForm";
import { ActionsList } from "./components/ActionsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateActionForm />
        <ActionsList />
      </div>
    );
  }
}

export default withAuthenticator(App);
