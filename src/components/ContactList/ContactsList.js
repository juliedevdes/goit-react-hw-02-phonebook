import React from "react";
import ContasctsListItem from "../ContactsListItem/ContactsListItem";
import { v4 as uuidv4 } from "uuid";

export default class ContasctsList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map((contact) => {
          return (
            <li key={uuidv4()}>
              <ContasctsListItem
                name={contact.name}
                number={contact.number}
                removeContact={this.props.removeContact}
                id={contact.id}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
