import React from "react";
import { v4 as uuidv4 } from "uuid";

export default class ContasctsList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map((contact) => (
          <li key={uuidv4()}>
            {contact.name}
            {contact.number}
          </li>
        ))}
      </ul>
    );
  }
}
