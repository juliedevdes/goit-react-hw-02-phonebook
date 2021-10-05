import React from "react";
import { v4 as uuidv4 } from "uuid";

export default class ContacsForm extends React.Component {
  state = {
    name: "",
    number: "",
    id: uuidv4(),
  };

  handleInputChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "", id: uuidv4() });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            placeholder="Jane Wayeet"
            name="name"
            onChange={this.handleInputChange}
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            type="text"
          />
        </label>
        <label>
          Number
          <input
            placeholder="+ 00-000-00"
            name="number"
            onChange={this.handleInputChange}
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            type="tel"
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
