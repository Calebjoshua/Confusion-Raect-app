import React,{Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import { Jumbotron } from 'reactstrap';
class Header extends Component{
    render(){
    return(
        <>
            <Navbar dark color="primary">
            <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
            </Navbar>
            <Jumbotron>
                <div class="container">
                    <div class="row row-header">
                    <div class="col-12 col-sm-6">
                        <h1>Ristorante con Fusion</h1>
                        <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                    </div>
                    </div>
                </div>
            </Jumbotron>
        </>
        )
    }
}
export default Header;