



//import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Detail from './components/Detail';
import CreateActivity from './components/CreateActivity'
import ERROR from './components/ERROR';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ='/' render={() => <LandingPage/>}/>
        <Route exact path ='/home' render={() => <Home/>}/>
        <Route  path='/details/:idPais' render = {() => <Detail />}/>
        <Route exact path='/createActivity' render = {() => <CreateActivity/>} />
        <Route path='*' render={() => <ERROR/>}/>
      </Switch>
    </BrowserRouter>
  );
}
export default App;