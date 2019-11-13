import React, { Component } from 'react';

import '../css/ongoing.css'

class OngoingListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className={"ongoingListItemCont"}>
        <div className={"ongoingListItemName"}> {this.props.ongoingItem.name}</div>
        <div className={"ongoingListItemName"}>
          <div className={"ongoingListItemHome"}> {this.props.ongoingItem.homeName} </div>
          <div className={"ongoingListItemDraw"}> Draw </div>
          <div className={"ongoingListItemAway"}> {this.props.ongoingItem.awayName} </div>
        </div>
        <div> {this.props.ongoingItem.group}, {this.props.ongoingItem.sport}, {this.props.ongoingItem.country}</div>
      </div>
    );
  }
}

export default OngoingListItem;
