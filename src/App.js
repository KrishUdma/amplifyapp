import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Snack Circus" />
        <p>
        Concession Equipment's, Ingredients and Accessories.
        </p>
        <a
          className="App-link"
          href="https://snackcircus.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          snackcircus
        </a>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
