import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Foo from './Foo';
import './index.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/foo" element={<Foo />} />
    </Routes>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));