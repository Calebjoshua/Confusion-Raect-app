import React from 'react';
import {Card, CardImg,CardBody,CardTitle,CardText} from 'reactstrap';
function  RenderDish({dish}){
    if (dish != null){
        return(
            <div className="col-12 col-md-5 m-1">
                <Card style={{width:"100%"}}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
                </Card> 
            </div>)
            }
            else{
                 return <div></div>
            }
        }
function RenderComments({dish}){
        if(dish != null){
            return( 
            <div className="col-12 col-md-5 m-1" >
            <h4>Comments</h4>
            <list className="list-unstyled" style={{height:"100%"}}>
                <p>{dish.comments[0].comment}</p>
                <p>---{dish.comments[0].author}, {new Intl.DateTimeFormat('en-US', {year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(dish.comments[0].date)))}</p>
                <p>{dish.comments[1].comment}</p>               
                <p> ---{dish.comments[1].author}, {new Intl.DateTimeFormat('en-US', {year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(dish.comments[1].date)))}</p>
                <p>{dish.comments[2].comment}</p>
                <p>---{dish.comments[2].author}, {new Intl.DateTimeFormat('en-US', {year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(dish.comments[2].date)))}</p>
                <p>{dish.comments[3].comment}</p>
                <p>---{dish.comments[3].author}, {new Intl.DateTimeFormat('en-US', {year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(dish.comments[3].date)))}</p>
                <p>{dish.comments[4].comment}</p>
                <p>---{dish.comments[4].author}, {new Intl.DateTimeFormat('en-US', {year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(dish.comments[4].date)))}</p>
             </list>
            </div>
       )
    }
    else{
       return <div></div>
    }
}
const Dishdetails =(props) =>{
    const {dish} =props;
    return(
        <div className="container">
        <div className="row">
        <RenderDish dish={dish} />
        <RenderComments dish={dish} />
        </div>
        </div>
        );
    }
export default Dishdetails;