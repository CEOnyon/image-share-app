import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/navbar.jsx';
import Upload from './components/Upload.jsx';
import Home from './components/Home.jsx';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/"component={Home} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
