import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmojiTracker from './components/EmojiTracker';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={EmojiTracker} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
