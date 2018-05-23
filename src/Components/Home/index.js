import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import QuizComponent from '../QuizComponent';

const component = () => (
  <Router>
    <div>
      <h3> Quizzes </h3>
      <li>
        <Link to="/football">Football</Link>
      </li>
      <li>
        <Link to="/geography">Geography</Link>
      </li>
      <Route
        path="/football"
        render={(props) => (
          <QuizComponent
            {...props}
          />
        )}
      />
      <Route
        path="/geography"
        render={(props) => (
          <QuizComponent
            {...props}
          />
        )}
      />
    </div>
  </Router>
)

export default component;
