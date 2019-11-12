import React, { Component } from 'react';


class HeaderItem extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className={"headerItemCont"} onClick={() => this.props.changePage(this.props.changeName)}>
        {this.props.headerName}
      </div>
    );
  }
}

export default HeaderItem;
