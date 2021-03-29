import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import Checkboxes from './pages/Checkboxes';
import React, { useState } from 'react';

function App() {
  const [state, setState] = useState({
    Sunday: false,
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: true,
    Saturday: false,
  });

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.checked });
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/checkboxes">
          <Checkboxes daysOfTheWeek={state} handleChange={handleChange} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;