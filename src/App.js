import { Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar"
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/CountriesList" component={CountriesList} />

        <Route exact path="/CountryDetails/:cca3" component={CountryDetails} />
      </Switch>
    </div>
  );
}

export default App;
