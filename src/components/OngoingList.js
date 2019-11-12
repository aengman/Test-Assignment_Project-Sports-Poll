import React, { Component } from 'react';
import OngoingListItem from './OngoingListItem.js'


class OngoingList extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  renderOngoingListItems = (ongoingList, currentList) => {
    let renderList = []
    for(let country in currentList){
      if(ongoingList[country]){
        ongoingList[country].forEach((ongoingItem) => {
          renderList.push(ongoingItem)
        })
      }
    }
    if(renderList && renderList.length > 0){
      return renderList.map((ongoingItem, i) => {
        return <OngoingListItem
                  ongoingItem={ongoingItem}
                  key={ongoingItem.name + i}
                />
      })
    }
    else {
      return <div> Empty! </div>
    }
  }
  render() {
    return (
      <div>
        {this.props.ongoingVotes ? this.renderOngoingListItems(this.props.ongoingVotes, this.props.currentList) : <div> Empty! </div>}
      </div>
    );
  }
}

export default OngoingList;
