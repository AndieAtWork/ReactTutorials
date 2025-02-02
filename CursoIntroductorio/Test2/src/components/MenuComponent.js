import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish){
      if (dish != null){
        var dishObject = this.props.dishes.find(item => item["id"] === dish);
        return(
          <DishDetail selectedDish={dishObject}/>
        )
      }
      else{
        return(
          <div></div>
        );
      } 
    }

    render() {
      const menu = this.props.dishes.map((dish) => {
        return (
          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 m-1">
            <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                  <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        );
      });

      return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
      );
    }
}

export default Menu;