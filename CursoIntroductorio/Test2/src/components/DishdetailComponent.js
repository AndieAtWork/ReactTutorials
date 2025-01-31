import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderComments(commentsArray){
        const comments = commentsArray.map((comment) => {
            return (
                <div className='pb-2'>
                    <div>{comment.comment}</div>
                    <div>-- {comment.author}, {comment.date.split("T")[0]}</div>
                </div>
            );
        })
        return (
            <ul class="list-unstyled">
                {comments}
            </ul>
        )
    }

    render() {
        const { selectedDish } = this.props;
        return (
            <div className='row'>
                <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12 m-1'>
                    <Card>
                        <CardImg top src={selectedDish.image} alt={selectedDish.name} />
                        <CardBody>
                            <CardTitle>{selectedDish.name}</CardTitle>
                            <CardText>{selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12 m-1'>
                    <h4>Comments</h4>
                    {this.renderComments(selectedDish.comments)}
                </div>
            </div>
        )
    }
}

export default DishDetail;