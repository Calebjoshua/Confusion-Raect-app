import React  from 'react';
import {Card, CardImg, CardImgOverlay,CardTitle,CardText, CardBody} from 'reactstrap';
import Dishdetails from './Dishdetails';
class MenuComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
           selectedDish : null
        }
    }
    OnselectedDish(dish){
        this.setState({
            selectedDish:dish
        })
    }
    render(){
        const {dishes} = this.props;
        const menu=dishes.map((dish)=>{
            return(
                <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id} onClick={() => this.OnselectedDish(dish)} >
                      <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                  </Card>
              </div>);
        });
        return(
            <div className="container">
                    <div className="row">
                        {menu}
                    </div>
                    <div className="row">
                     <Dishdetails  selectedDish={this.state.selectedDish}/>  
                    </div>
            </div>
        );
    }
}
export default MenuComponent;