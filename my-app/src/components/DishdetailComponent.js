import React from 'react';
import {Card, CardImg, CardText, CardTitle, CardBody} from 'reactstrap';

   const DishDetail = (props) => {
       const dish = props.selectedDish;
            if(dish!=null) {
                return( 
                    <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} />
                            <CardBody>
                                <CardTitle >{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                    </Card>
                    <div>
                    <CardTitle><h3>Comments</h3></CardTitle>
                        {this.props.selectedDish.comments.map((comments, id) => (
                            <div key={comments.id}>
                                
                                <CardText >{comments.comment}</CardText>
                                <CardText >-- {comments.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month: 'short',day:'2-digit' }).format(new Date(Date.parse(comments.date )))} <br /><br /></CardText>
                                {/* <CardText></CardText> */}
                            </div>
                        ))}
                        </div>
                    
                </div>
            );
        }
                
            else{
                return(
                    <div></div>
                )
            }
    
    }



export default DishDetail;

