import { Card } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/title';
import Listsevenwonders from './components/listsevenwonders';
import './index.css';
import './components/card.css';



ReactDOM.render(
  <React.StrictMode>
    <Title />
    <div className='container'>
      <Listsevenwonders />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

