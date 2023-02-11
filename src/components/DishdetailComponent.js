import React, { Component } from 'react'
import { Media , Card, CardBody,CardImg,CardImgOverlay,CardText,CardTitle} from 'reactstrap';



function RenderComment({comments}){
    return(
        <ul className='list-unstyled'>
            <li>{comments.comment}</li>
            <li> --{comments.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))} </li>
        </ul>
    )
}
function RenderDish({dish}){
   
    if(dish!=null){
        const commentlist=dish.comments.map(comments=>{
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
           <RenderDish dish={props.dish} />

        </div>
      </div>
    )
}

export default DishDetail;
