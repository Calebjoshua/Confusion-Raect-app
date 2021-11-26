import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import MenuComponent from './MenuComponent';
import Dishdetails from './Dishdetails';
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
      <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </div>
      </Navbar>
     <MenuComponent dishes={this.state.dishes} onClick={(dishId) =>this.OnselectedDish(dishId) }/>
     <Dishdetails dish={this.state.dishes.filter((dish) =>dish.id === this.state.selectedDish )[0]} />
    </div>
  );
}
}

export default Main;

