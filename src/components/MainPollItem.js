import React, { Component } from 'react';

import '../css/general.css'

import swedenFlag from '../media/swedenFlag.png'
import englandFlag from '../media/englandFlag.png'
import franceFlag from '../media/franceFlag.png'
import icehockeySilhouette from '../media/icehockeySilhouette.png'
import footballSilhouette from '../media/footballSilhouette.png'
import handballSilhouette from '../media/handballSilhouette.png'
import snookerSilhouette from '../media/snookerSilhouette.jpg'
import tennisSilhouette from '../media/tennisSilhouette.png'

class MainPollItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: "main",
      chosenOption: ""
    }
  }
  changeOption = (choice) => {
    this.setState({chosenOption: choice})
  }
  findEventMatch = (eventList, itemToCheck) => {
    if(!eventList){
      return 0
    }
    else {
      return eventList.find((eventItem) => {
        return eventItem.id === itemToCheck.id && eventItem.objectId === itemToCheck.objectId && eventItem.name === itemToCheck.name
      })
    }
  }
  mainPollConfirmation = () => {
    if(this.state.chosenOption !== "Skip"){
      this.props.updateOngoingVotes(this.props.eventItem, this.state.chosenOption)
    }
    this.props.newPollIndex(this.props.chosenList, this.props.ongoingVotes, this.findEventMatch, this.props.chosenCategory)
    this.setState({chosenOption: ""})
  }
  renderOptionBtns = (btnType, stateType) => {
    let active = (btnType === stateType ? "activeConfirm" : "")
    let content = this.btnContentSwitch(btnType)
    return <button className={"mainPoll" + btnType + "Btn" + " " + active} onClick={() => {this.changeOption(btnType)}}> {content} </button>
  }
  btnContentSwitch = (btnType) => {
    switch(btnType){
      case "Home":
        return this.props.eventItem.homeName
        break;
      case "Draw":
        return "Draw"
        break;
      case "Away":
        return this.props.eventItem.awayName
        break;
      case "Skip":
        return "Skip"
        break;
      default:
        return "";
    }
  }
  countryFlagSwitch = (country) => {
    switch(country){
      case "SWEDEN":
        return swedenFlag
        break;
      case "FRANCE":
        return franceFlag
        break;
      case "ENGLAND":
        return englandFlag
        break;
      default:
        return "";
    }
  }
  sportSwitch = (sport) => {
    switch(sport){
      case "FOOTBALL":
        return footballSilhouette;
        break;
      case "ICE_HOCKEY":
        return icehockeySilhouette;
        break;
      case "TENNIS":
        return tennisSilhouette;
        break;
      case "SNOOKER":
        return snookerSilhouette;
        break;
      case "HANDBALL":
        return handballSilhouette;
        break;
      default:
        return ""
    }
  }
  //<div> include somewhere: {this.props.eventItem.group}</div>

  componentDidMount(){
    this.props.newPollIndex(this.props.chosenList, this.props.ongoingVotes, this.findEventMatch, this.props.chosenCategory)
  }
  render() {

    return (
      <div className={"mainPollCont"}>
        <div className={"mainPollName"}> {this.props.eventItem.name}</div>
        {this.renderOptionBtns("Skip", this.state.chosenOption)}
        <div className={"mainPollBtnCont"}>
          {this.renderOptionBtns("Home", this.state.chosenOption)}
          {this.renderOptionBtns("Draw", this.state.chosenOption)}
          {this.renderOptionBtns("Away", this.state.chosenOption)}
        </div>
        <div className={"mainPollSport"}>
          <img className={"mainPollSportImage"} src={this.sportSwitch(this.props.eventItem.sport)} alt={this.props.eventItem.sport}/>
        </div>
        <div className={"mainPollCountry"}>
          <img className={"mainPollCountryImage"} src={this.countryFlagSwitch(this.props.eventItem.country)} alt={this.props.eventItem.country}/>
        </div>
        <button className={"mainPollConfirmBtn"} onClick={this.mainPollConfirmation}> Confirm </button>
      </div>
    );
  }
}

export default MainPollItem;
