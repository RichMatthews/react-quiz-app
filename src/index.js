import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
import './index.css';
import Home from './Components/Home';
import registerServiceWorker from './registerServiceWorker';
import reducer from './redux/reducers';

export const history = createHistory();
const enhancers = [applyMiddleware(routerMiddleware(history))];
const enhancer = compose(...enhancers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(
  reducer,
  enhancer
);

function listener() {
  console.log(store.getState(), 'store state');
}

store.subscribe(listener);

class Component extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <Home />
      </Provider>
      )
  };
};

ReactDOM.render(<Component />,
    document.getElementById('root'));
registerServiceWorker();
