import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import EmojiTracker from './components/EmojiTracker';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={EmojiTracker} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
