import React from 'react';
import { Route, Link } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import Categories from '../Categories';
import { history } from '../../index';
import './index.css';

class Home extends React.Component {

  state = {
    quizCategories: [
      {title: 'football'},
      {title: 'geography'},
      {title: 'sport'},
      {title: 'united states'},
      {title: 'history'},
      {title: 'miscellaneous'},
      {title: 'make-new-quiz'},
    ]
  }

  componentDidMount = () => {
      // quizzes.forEach((quiz) => {
      //   this.setState({quizCategories: [this.state.quizCategories, quiz]})
      // })
  }

  render(){
    console.warn = console.error = () => {};
    return(
      <ConnectedRouter history={history}>
        <div>
            <div className="header">
              {this.state.quizCategories.map(category => (
                  <Link className="categoryLink" to={`/categories/${category.title}`} >{category.title}</Link>
              ))}
            </div>
          {this.state.quizCategories.map(category => (
            <Route path={`/categories/${category.title}`} component={Categories}/>
          ))}
        </div>
      </ConnectedRouter>
    )
  }
}

export default Home;
