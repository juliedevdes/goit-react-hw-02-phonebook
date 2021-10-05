import React from "react";

export default class ContasctsListItem extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.number}
        <button onClick={this.props.removeContact}>Delete</button>
      </div>
    );
  }
}
