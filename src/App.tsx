import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import DashboardPage from './pages/dashboard/index.page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={() => <Redirect to="/xxx" />} />
        <Route path='/xxx' component={DashboardPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
