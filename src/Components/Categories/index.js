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

  findCategory = () => {
    const userStatus = this.props.currentUserStatus;
    if(userStatus.currentCategoryId){
      return this.state.quizzes.map((quiz) => (
        <div className="">
          <li>
            <Link to={`/categories/${quiz.category}/${quiz.quizId}`} >{quiz.title}</Link>
          </li>
          <Route path={`/categories/${userStatus.currentCategory}/${quiz.quizId}`} component={QuizComponent}/>
        </div>
      ))
    }
  }

  render(){
    const userStatus = this.props.currentUserStatus;
    return(
      <ConnectedRouter history={history}>
        <div>
          <h3> Quizzes </h3>
          {
            this.state.quizzes &&
              this.state.quizzes.length > 0 ? (
              this.findCategory()
            )
            : (
              <Route component={NoMatch} />
            )
          }
        </div>
      </ConnectedRouter>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
