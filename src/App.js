import Wrapper from './layouts/Wrapper';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home'


function App() {
  return (
    <Router>
      <Switch>
        {' '}
        <Wrapper>
        <Route exact path="/" component={Home} />
        </Wrapper>
      </Switch>
    </Router>
  );
}

export default App;

