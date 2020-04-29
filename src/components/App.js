import React from 'react';
import GlobalStyles from "../GlobalStyles"
import Home from "../routes/Home";
import{HashRouter as Router, Route} from "react-router-dom"

function App() {
  return (<>
  <GlobalStyles/>
  <Router>
    <Route path="/" exact component={Home} />
    </Router>
    </>)
}

export default App;   