import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderDish({dish}){
        var selected = dish;
        return (
            <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12 m-1'>
                <Card>
                    <CardImg top src={selected.image} alt={selected.name} />
                    <CardBody>
                        <CardTitle>{selected.name}</CardTitle>
                        <CardText>{selected.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    function RenderComments({comments}){
        const commentsList = comments.map((comment) => {
            return (
                <div className='pb-2'>
                    <div>{comment.comment}</div>
                    <div>-- {comment.author}, {comment.date.split("T")[0]}</div>
                </div>
            );
        })
        return (
            <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12 m-1'>
                <h4>Comments</h4>
                <ul class="list-unstyled">
                    {commentsList}
                </ul>
            </div>
        )
    }

    const DishDetail = (props) => {
        const selectedDish = props.dish;
        if (selectedDish != null){
            return (
                <div className='container'>
                    <div className='row'>
                        <RenderDish dish={selectedDish} />
                        <RenderComments comments={props.dish.comments} />
                    </div>
                </div>
            )
        }else{
            return (
                <div className='row'></div>
            )
        }
    }

export default DishDetail;