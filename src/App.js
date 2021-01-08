import Wrapper from './layouts/Wrapper';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import Favorite from './pages/Favorite'

function App() {
  return (
    <Router>
      <Switch>
        {' '}
        <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/oblibene" component={Favorite} />
        </Wrapper>
      </Switch>
    </Router>
  );
}

export default App;

