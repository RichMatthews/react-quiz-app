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

  findCategory = () => {
    return this.state.quizCategories.map(category => (
      <div>
        <div className="header">
          <li>
            <Link className="categoryLink" to={`/categories/${category.title}`} >{category.title}</Link>
          </li>
        </div>
        <Route path={`/categories/${category.title}`} component={Categories}/>
      </div>
    ))
  }

  // <div>
  //     <div className="header">
  //       {this.state.quizCategories.map(category => (
  //           <Link className="categoryLink" to={`/categories/${category.title}`} >{category.title}</Link>
  //       ))}
  //     </div>
  //   {this.state.quizCategories.map(category => (
  //     <Route path={`/categories/${category.title}`} component={Categories}/>
  //   ))}
  // </div>

  render(){
    console.warn = console.error = () => {};
    return(
      <ConnectedRouter history={history}>
        <div>
          {this.state.quizCategories &&
            this.state.quizCategories.length > 0 ? (
              this.findCategory()
            ) :
            (
              <div>nah</div>
            )
          }

        </div>
      </ConnectedRouter>
    )
  }
}

export default Home;
