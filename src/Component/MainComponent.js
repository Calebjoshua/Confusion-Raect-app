import React from 'react';
import HomeComponent from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetails from './Dishdetails';
import Header from './Header.js';
import Footer from './Footer.js';
import {DISHES} from '../shared/dishes';
import {Switch, Route, Redirect} from 'react-router-dom';
class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
    }
  }
  render(){
    const HomePage = () =>{
      return(
      <HomeComponent />)
    }
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
        <Redirect to="/home" />
      </Switch>
     <Footer />
    </div>
  );
}
}

export default Main;

