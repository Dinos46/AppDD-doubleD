const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

import { About } from './pages/About.jsx';
import { Home } from './pages/Home.jsx';
import { AppHeader } from './cmps/AppHeader.jsx';
import { AppFooter } from './cmps/AppFooter.jsx';

export function App() {
  return (
    <Router>
      <header>
        <AppHeader />
      </header>
      <main>
        <Switch>
          <Route component={About} path='/about' />
          <Route component={Home} path='/' />
        </Switch>
      </main>
      <footer>
        <AppFooter />
      </footer>
    </Router>
  );
}
