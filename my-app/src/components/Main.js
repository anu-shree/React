import React, { Component } from 'react';
import Home from './Home';
import Menu from './Menu.js';
import Contact from './Contact.js'
import DishDetail from './DishdetailComponent.js';
import Header from './Header';
import Footer from './Footer';
import About from '../components/About';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStoreToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    leaders: state.leaders,
    promotions : state.promotions
  }   
}

class Main extends Component {

  constructor(props) {
    super(props);
  
  }

  

  render() {

    const HomePage = () => {
      return(
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]} />
      )
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };


    return (
      <div>
      <Header />
      <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/aboutus" component={() => <About leaders={this.props.leaders}></About>} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}></Menu>} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        </CSSTransition>
        </TransitionGroup>
      <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(Main));
