import React, { Component } from 'react';
import MainPollItem from './MainPollItem.js'

import '../css/poll.css'
import '../css/general.css'

class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pollIndex: 0,
      voteStatus: "onGoing"
    }
  }
  renderNewPollItem = (eventItem) => {
    if(eventItem === "votesComplete"){
      return <div className={"finishedVoting"}> You've voted for all available </div>
    }
    else{
      return <MainPollItem
                newPollIndex={this.newPollIndex}
                updateOngoingVotes={this.props.updateOngoingVotes}
                eventItem={eventItem}
                chosenList={this.props.chosenList}
                ongoingVotes={this.props.ongoingVotes}
                chosenCategory={this.props.chosenCategory}
              />
    }
  }

  newPollIndex = (chosenList, ongoingVotes, findFunction, chosenCategory) => {
    if(ongoingVotes[chosenCategory] && ongoingVotes[chosenCategory].length >= chosenList.length){
      this.setState({
        pollIndex: 0,
        voteStatus: "votesComplete"
      })
    }
    else {
      let newIndex = this.props.randomizeCategory(chosenList, ongoingVotes[chosenCategory], findFunction)
      this.setState({pollIndex: newIndex})
    }
  }
  render() {
    let chosenItem = (this.props.chosenList ? this.props.chosenList[this.state.pollIndex] : null)
    if(this.state.voteStatus === "votesComplete"){
      chosenItem = "votesComplete"
    }
    return (
      <div className={"pollHomeCont"}>
        {(chosenItem ? this.renderNewPollItem(chosenItem) : <div> Empty! </div>)}
      </div>
    )
  }
}

export default MainPage;
