import React from 'react';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import MenuComponent from './Component/MenuComponent';
import {DISHES} from './shared/dishes';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES
    }
  }
  render(){
  return (
    <div className="App">
      <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </div>
      </Navbar>
     <MenuComponent dishes={this.state.dishes}/>
    </div>
  );
}
}

export default App;
