import Wrapper from './layouts/Wrapper';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import AddJoke from './pages/AddJoke';


function App() {
  return (
    <Router>
      <Switch>
        {' '}
        <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/pridat-vtip" component={AddJoke} />
        </Wrapper>
      </Switch>
    </Router>
  );
}

export default App;

