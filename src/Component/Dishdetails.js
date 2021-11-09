import React , {Component} from 'react';
import {Card, CardImg,CardBody,CardTitle,CardText, Media} from 'reactstrap';
class Dishdetails extends Component{
    renderDish(dish){
        if (dish != null){
            return(
                <div className="col-12 col-md-5 m-1">
                <Card style={{width:"100%"}}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
                </Card> </div>)
            }
            else{
                 return <div></div>
            }
        }
    renderComments(dish){
        if(dish != null){
            return( 
            <div className="col-12 col-md-5 m-1" >
            <h4>Comments</h4>
            <list className="list-unstyled" style={{height:"100%"}}>
                <p>{dish.comments[0].comment}</p>
                <p>---{dish.comments[0].author},{dish.comments[0].date}</p>
                <p>{dish.comments[1].comment}</p>               
                <p> ---{dish.comments[1].author},{dish.comments[1].date}</p>
                <p>{dish.comments[2].comment}</p>
                <p>---{dish.comments[2].author},{dish.comments[2].date}</p>
            </list>
            </div>
       )
    }
    else{
       return <div></div>
    }
}
render(){
    const {selectedDish} = this.props;
    return(
        <div className="container">
        <div className="row">
        {this.renderDish(selectedDish)}
        {this.renderComments(selectedDish)}
        </div>
        </div>
        );
    }
}
export default Dishdetails;