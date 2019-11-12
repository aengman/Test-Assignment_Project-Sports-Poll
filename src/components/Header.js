import React, { Component } from 'react';
import HeaderItem from './HeaderItem'

import headerList from '../json/headerList.json'

import '../css/header.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  renderHeaderItems = (itemList) => {
    return itemList.map((item, i) => {
      return <HeaderItem key={item.name + i} headerName={item.name} changeName={item.changeName} changePage={this.props.changePage}/>
    })
  }
  render() {
    return (
      <div className={"headerMain"}>
        <div className={"headerCont"}>
          {this.renderHeaderItems(headerList)}
        </div>
      </div>

    );
  }
}

export default Header;
