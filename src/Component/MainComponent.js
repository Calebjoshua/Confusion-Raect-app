import React from 'react';
import HomeComponent from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetails from './Dishdetails';
import Header from './Header';
import Contact from './Contact';
import Footer from './Footer';
import AboutUs from './AboutUs';
import {DISHES} from '../shared/dishes';
import {LEADERS} from '../shared/Leaders';
import {PROMOTIONS} from '../shared/Promotions';
import {COMMENTS} from '../shared/Comments';
import {Switch, Route, Redirect} from 'react-router-dom';
class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      leaders:LEADERS,
      promotions:PROMOTIONS,
      comments:COMMENTS
    }
  }
  render(){
    const HomePage = () =>{
      return(
      <HomeComponent 
      dishes={this.state.dishes.filter(dish => dish.featured)[0]}
      promotions={this.state.promotions.filter(promo => promo.featured)[0]}
      leaders={this.state.leaders.filter(leader => leader.featured)[0]}/>)
    }
    const dishWithId = ({match}) =>{
      return(
      <Dishdetails dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
              comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId))}
      />)
    }
    const About = () =>{
      return(
        <AboutUs leader={this.state.leaders} />
      )
    }
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
        <Route path="/menu/:dishId" component={dishWithId} />
        <Route exact path="/contactUs" component={Contact} />
        <Route path="/aboutUs" component={About} />
        <Redirect to="/home" />
      </Switch>
     <Footer />
    </div>
  );
}
}

export default Main;

