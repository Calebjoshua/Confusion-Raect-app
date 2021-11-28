import React from 'react';
import MenuComponent from './MenuComponent';
import Dishdetails from './Dishdetails';
import Header from './Header.js';
import Footer from './Footer.js';
import {DISHES} from '../shared/dishes';
class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      selectedDish:null
    }
  }
  OnselectedDish(dishId){
    this.setState({
        selectedDish:dishId
    })
}
  render(){
  return (
    <div className="App">
      <Header />
     <MenuComponent dishes={this.state.dishes} onClick={(dishId) =>this.OnselectedDish(dishId) }/>
     <Dishdetails dish={this.state.dishes.filter((dish) =>dish.id === this.state.selectedDish )[0]} />
     <Footer />
    </div>
  );
}
}

export default Main;

