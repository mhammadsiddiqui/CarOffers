
import './App.css';
import { Route } from 'react-router-dom';
import Layout from './components/layout';
import './assets/styles/styles.scss';
import Home from './components/pages/home';
import Counter from './components/pages/counter';
import Offers from './components/pages/offers';

function App() {
  return (
    <Layout>
          <Route exact path='/' component={Home} />
          <Route path='/counter' component={Counter} />
          <Route path='/offers' component={Offers} />
    </Layout>
  );
}

export default App;

