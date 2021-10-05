import React from "react";

export default class ContacsForm extends React.Component {
  state = {
    name: "",
    number: "+",
  };

  handleInputChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: 0 });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Phonebook
        <label>
          Name
          <input
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
