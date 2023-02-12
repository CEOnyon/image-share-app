import React from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/navbar.jsx';
import Upload from './components/Upload.jsx';
import Home from './components/Home.jsx';
import SignUp from './components/SignUp.jsx'
import Login from './components/login.jsx'


function App() {
  return (
    <BrowserRouter>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/"component={Home} />
          <Route exact path='/login' component={Login}/>
          <Route exact path="/signUp"component={SignUp} />
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;
