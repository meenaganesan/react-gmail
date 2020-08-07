import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as serviceWorker from './serviceWorker';
import logger from 'redux-logger';


const initialState = {
  'users' : [
    {name: 'john', email: 'john@test.com', mails:[{from: 'john', content: 'Hello Sam, How are you?', subject: 'Mail'}, {from: 'jeffery', content: 'Greetings for the day!! You have won a cash price of 10,000 rupees in luckydraw.', subject: 'Mail'}]} ,
    {name: 'sam', email: 'sam@test.com', mails: [{from: 'john', content: 'Hello Sam, How are you?', subject: 'Mail'}, {from: 'jeffery', content: 'Greetings for the day!! You have won a cash price of 10,000 rupees in luckydraw.', subject: 'Mail'}]},
    {name: 'jeffery', email: 'jeffery@test.com', mails: []}
  ]
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_MAIL':
      let data = state.users.map((item) => {
        console.log(item.name === action.payload.name)
        if(item.name === action.payload.name) {
          item.mails.push(action.payload.mail)
          return item
        }
        return item
      })
      return {
        ...state,
        users: data
      }
    case 'ADD_USER':
      break;
    default: 
      return initialState
  }
}

const store = createStore(reducer, applyMiddleware(logger))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
