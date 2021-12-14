import React from 'react';
import HomeComponent from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetails from './Dishdetails';
import Header from './Header';
import Contact from './Contact';
import Footer from './Footer';
import AboutUs from './AboutUs';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = state =>{
  return{
  dishes:state.dishes,
  comments:state.comments,
  promotions:state.promotions,
  leaders:state.leaders
  }
}
class Main extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const HomePage = () =>{
      return(
      <HomeComponent 
      dishes={this.props.dishes.filter(dish => dish.featured)[0]}
      promotions={this.props.promotions.filter(promo => promo.featured)[0]}
      leaders={this.props.leaders.filter(leader => leader.featured)[0]}/>)
    }
    const dishWithId = ({match}) =>{
      return(
      <Dishdetails dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
              comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId))}
      />)
    }
    const About = () =>{
      return(
        <AboutUs leader={this.props.leaders} />
      )
    }
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>} />
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

export default withRouter(connect(mapStateToProps)(Main));

