import 'normalize.css';
import React from 'react';
import '../styles/index.scss';

const App = () => (
  <div className="App">
    <div>
      <h1>It Works!</h1>
      <p>This React project just works including
        <span className="redBg">module</span>
        local styles.
      </p>
      <p>Enjoy!</p>
    </div>
  </div>
);

export default App;
