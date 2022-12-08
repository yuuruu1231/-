import React, { Component, Fragment } from "react";
import './style.css'

class APP extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
    this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  render() {
    return (
      <Fragment >
        <div className={this.state.show ? 'show' : 'hide'}>hello</div>
        <button onClick={this.handleBtnClick}>toggle</button>
      </Fragment>
    );
  }

  handleBtnClick() {
    this.setState(() => ({
      show: this.state.show ? false : true
    }))
  }

}
export default APP;