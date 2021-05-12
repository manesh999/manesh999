
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logincomponent from './logincomponents/logincomponent';
import Dashboardcomponent from './dashboard/Dashboard.component'
import Checkout from './checkout/Checkout';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App h-100">
      <Route exact path="/" component={Logincomponent} />
      <Route exact path="/dashboard" component={Dashboardcomponent} />
      <Route exact path="/checkout" component={Checkout} />
    
    </div>

  );
}

export default App;
