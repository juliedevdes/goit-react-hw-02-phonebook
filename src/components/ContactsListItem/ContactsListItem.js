import React from "react";

export default class ContasctsListItem extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.number}
        <button
          name={this.props.name}
          onClick={() => this.props.removeContact(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}
