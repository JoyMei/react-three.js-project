import React from "react";
import "./Card.scss";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.item = props.item;
  }
  render() {
    return (
      <div className="card">
        <div className="image">
          <img src={this.item.img} alt={this.item.title} />
        </div>
        <div className="title">{this.item.title} </div> 
      </div>
    );
  }
}
