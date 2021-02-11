//add booking feature (im thinking a sqaure booking page) WILL DO WHEN CLIENT IS READY
import 'bootstrap/dist/css/bootstrap.min.css';
import postComponent from './pages/post';
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
      <Router>
        <Switch>
          <Route exact path="/" component={postComponent} />
        </Switch>
     </Router>
      
      
      </div>
      
  );
}

export default App;
