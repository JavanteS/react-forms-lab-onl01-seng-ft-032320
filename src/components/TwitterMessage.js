import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChanges = (event) =>{
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let difference = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value ={this.state.message} onChange={this.handleChanges} name="message" id="message" />
        <p>{difference}</p>
      </div>
    );
  }
}

export default TwitterMessage;
