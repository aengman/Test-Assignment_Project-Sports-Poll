import React, { Component } from 'react';
import OngoingList from './OngoingList.js'
import Header from './Header.js'
import PollHome from './PollHome.js'

import eventList from '../json/test-assignment.json'

import '../css/main.css'

class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: "home",
      eventLists: this.filterEventList(eventList),
      chosenCategory: "",
      ongoingVotes: this.fetchOngoingVotes()
    }
  }
  changePage = (newPage) => {
    this.setState({
      currentPage: newPage
    })
  }
  pageFilter = () => {
    switch(this.state.currentPage){
      case "home":
        return <PollHome
                  updateOngoingVotes={this.updateOngoingVotes}
                  ongoingVotes={this.state.ongoingVotes}
                  chosenList={this.state.eventLists.currentList[this.state.chosenCategory]}
                  randomizeCategory={this.randomizeCategory}
                  chosenCategory={this.state.chosenCategory}
                />
        break;
      case "ongoing":
        return <OngoingList
                  ongoingVotes={this.state.ongoingVotes}
                  currentList={this.state.eventLists.currentList}
                />
        break;
      default:
        return null
    }
  }
  filterEventList = (eventList) => {
    let newFinishedList = []
    let newCurrentList = []
    eventList.forEach((listItem) => {
      if(listItem.state === "FINISHED"){
        newFinishedList.push(listItem)
      }
      else {
        newCurrentList.push(listItem)
      }
    })
    newCurrentList = this.filterCurrentList(newCurrentList)
    return {
      currentList: newCurrentList,
      finishedList: newFinishedList
    }
  }
  findItemInList = (list, check) => {
    return list.find((element) => {
      return element === check
    })
  }
  filterCurrentList = (currentList) => {
    let checkList = [];
    let listObject = {}
    currentList.forEach((currentItem) => {
      if(!this.findItemInList(checkList, currentItem.country)){
        checkList.push(currentItem.country)
        listObject[currentItem.country] = []
      }
      listObject[currentItem.country].push(currentItem)
    })
    return listObject
  }

  randomizeCategory = (categoryList, usedCategories, findFunction) => {
    let rngIndex = Math.floor(Math.random() * categoryList.length)
    if(usedCategories && usedCategories.length > 0){
      while(findFunction(usedCategories, categoryList[rngIndex])){
        rngIndex = Math.floor(Math.random() * categoryList.length)
      }
    }
    return rngIndex
  }
  setRandomCategory = (currentList, findFunction) => {
    let categoryList = Object.keys(currentList)
    let usedCategories = (localStorage.getItem("usedCategories") ? JSON.parse(localStorage.getItem("usedCategories")) : [])
    if(categoryList.length <= usedCategories.length){
      usedCategories = []
    }
    let randomCategory = categoryList[this.randomizeCategory(categoryList, usedCategories, findFunction)]
    usedCategories.push(randomCategory)
    localStorage.setItem("usedCategories", JSON.stringify(usedCategories))
    this.setState({chosenCategory: randomCategory})
  }
  fetchOngoingVotes = () => {
    return (localStorage.getItem("ongoingVotes") ? JSON.parse(localStorage.getItem("ongoingVotes")) : this.onggoingVoteCategorization({}))
  }
  onggoingVoteCategorization = (ongoingVotes, categoryList) => {
    let newOngoingVotes = ongoingVotes
    if(categoryList){
      if(categoryList.length > 0){
        categoryList.forEach((category) => {
          if(!newOngoingVotes[category]){
            newOngoingVotes[category] = []
          }
        })

      }
    }
    return newOngoingVotes
  }
  updateOngoingVotes = (newVote, chosenOption) => {
    newVote["chosenOption"] = chosenOption
    let ongoingVotes = this.onggoingVoteCategorization(this.state.ongoingVotes, Object.keys(this.state.eventLists.currentList))
    ongoingVotes[this.state.chosenCategory].push(newVote)
    localStorage.setItem("ongoingVotes", JSON.stringify(ongoingVotes))
    this.setState({ongoingVotes: ongoingVotes})
  }

  componentDidMount(){
    this.setRandomCategory(this.state.eventLists.currentList, this.findItemInList)
  }

  render() {
    return (
      <div className={"mainPage"}>
        <div className={"backgroundStyle"}>
          <Header changePage={this.changePage}/>
          {this.pageFilter()}
        </div>
      </div>
    );
  }
}

export default MainPage;
