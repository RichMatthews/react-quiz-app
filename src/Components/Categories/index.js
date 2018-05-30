import React from 'react';
import { ConnectedRouter } from "react-router-redux";
import { connect } from 'react-redux';
import { Route, Link } from "react-router-dom";
import { history } from '../../index';
import QuizComponent from '../QuizComponent';
import NoMatch from '../NoMatch';
import data from '../../data';
import { mapStateToProps, mapDispatchToProps } from '../../redux/mappingFunctions';
class Categories extends React.Component {

  state = {
    quizzes: []
  }

  componentDidMount = () => {
    console.warn = console.error = () => {};
    try{
      const category = data.find(category => category.categoryName === this.props.currentUserStatus.currentCategory);
      category.quizzes.forEach(quiz => {
        this.setState(prevState=>({quizzes: [...prevState.quizzes, quiz]}))
      })
    } catch(e){
        console.log('no category error');
    }
  }

  render(){
    return(
      <ConnectedRouter history={history}>
        <div>
          <h3> Quizzes </h3>
          {this.state.quizzes.map(category => (
            <li>
              <Link to={`/categories/${category.category}/${category.quizId}`} >{category.title}</Link>
            </li>
          ))}
          {this.state.quizzes.map(category => {
              <Route path={`/categories/${category.category}/${category.quizId}`} component={QuizComponent}/>
          })}
        </div>
      </ConnectedRouter>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
