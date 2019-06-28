import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';
import Notfound from './NotFound';
import Portfolio from './Portfolio';
import Price from './Price';
import Services from './Services';
import Portfolio_restaurant from './Portfolio_restaurant'
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/portfolio/restaurant" component={Portfolio_restaurant} />
        <Route path="/price" component={Price} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();
