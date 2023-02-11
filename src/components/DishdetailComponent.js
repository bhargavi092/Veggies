import React, { Component } from 'react'
import { Media , Card, CardBody,CardImg,CardImgOverlay,CardText,CardTitle} from 'reactstrap';

 class DishDetail extends Component {
    constructor(props) {
      super(props);
    
    }
    renderComment(comments){
        return(
            <ul className='list-unstyled'>
                <li>{comments.comment}</li>
                <li> --{comments.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))} </li>
            </ul>
        )
    }
    renderDish(dish){
       
        if(dish!=null){
            const commentlist=dish.comments.map(comments=>{
                return(
                    <div>
                        {this.renderComment(comments)};
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

  render() {
    return (
        <div className='container'>
        <div className='row'>
            {this.renderDish(this.props.dish)}

        </div>
      </div>
    )
  }
}

export default DishDetail;
