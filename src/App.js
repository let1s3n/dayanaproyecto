import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MensajeReutilizableDayana from './components/MensajeReutilizableDayana/MensajeReutilizableDayana';
import MensajeReutilizableJose from './components/MensajeReutilizableJose/MensajeReutilizableJose';
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dayana">Dayana</Link>
            </li>
            <li>
              <Link to="/jose">Jose</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/dayana">
            <MensajeReutilizableDayana />
          </Route>
          <Route path="/jose">
          <MensajeReutilizableJose />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
