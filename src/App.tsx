
import { Route } from 'react-router-dom';
import Layout from './components/layout';
import './assets/styles/styles.scss';
import Home from './components/pages/home';
import TaskQ from './components/pages/task';

function App() {
  return (
    //calling layout component
    <Layout>
          <Route exact path='/' component={Home} />
          <Route path='/task' component={TaskQ} />
    </Layout>
  );
}

export default App;

