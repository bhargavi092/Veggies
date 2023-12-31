import React, { Component } from 'react'
import { Media , Card, CardBody,CardImg,CardImgOverlay,CardText,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderComment({comments}){
    return(
        <ul className='list-unstyled'>
            <li>{comments.comment}</li>
            <li> --{comments.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))} </li>
        </ul>
    )
}
function RenderDish({dish, comments}){
   
    if(dish!=null){
        const commentlist=comments.map(comments=>{
            return(
                <div>
                    <RenderComment comments={comments} />
                </div>
            )
        })
        return(
            <>
                <div  className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                <div  className="col-12 col-md-5 m-1">
                   <Card>
                        <h4>Comments</h4>
                        <CardText> {commentlist}</CardText>
                   </Card>
                </div>
            </>
            
        )
    }
    else{
        return(
            <div></div>
        )
    }

}

 const DishDetail =(props)=> {

    return (
        <div className='container'>
               
        <div className='row'>
            <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem  active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
                <div className='col-12'>
                    <h3>{props.dish.name}</h3>
                    <hr/>
                </div>
        </div> 
        <div className='row'>
           <RenderDish dish={props.dish} comments={props.comments} />

        </div>
      </div>
    )
}

export default DishDetail;
