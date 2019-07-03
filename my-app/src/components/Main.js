import React, { Component } from 'react';
import Home from './Home';
import Menu from './Menu.js';
import Contact from './Contact.js'
import DishDetail from './DishdetailComponent.js';
import Header from './Header';
import Footer from './Footer';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/Comment';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotion';
import About from '../components/About';

import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        leaders: LEADERS,
        promotions: PROMOTIONS,

    };
  }

  

  render() {

    const HomePage = () => {
      return(
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]} />
      )
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };


    return (
      <div>
      <Header></Header>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/aboutus" component={() => <About leaders={this.state.leaders}></About>} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}></Menu>} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
      <Footer></Footer>
      </div>
    );
  }
}

export default Main;