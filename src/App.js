//add booking feature (im thinking a sqaure booking page) WILL DO WHEN CLIENT IS READY
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import NavMenu from './components/NavMenu'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
  from 'react-router-dom';

const App = () => {
  return (
    
    <div className="App">
      <NavMenu /> 
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
         
        </Switch>
     </Router>
      
      
      </div>
      
  );
}

export default App;
