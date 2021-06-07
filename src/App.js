// Main imports
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components& pages
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login'

// Styles
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' >
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
