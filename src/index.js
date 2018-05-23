import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import Home from './Components/Home';
import registerServiceWorker from './registerServiceWorker';
import reducer from './redux/reducers';

const store = createStore(
  reducer
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
