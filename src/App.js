import React from "react";
import "./App.css";
import AboutUsPage from "./pages/AboutUsPage";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={AboutUsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
