import React from "react";

import ContacsForm from "./components/ContacsForm/ContacsForm";
import ContasctsList from "./components/ContactList/ContactsList";
import Filter from "./components/Filter/Filter";

class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
  };

  //   removeContact = (contact){
  // this.setState({contacts: []})
  //   }

  changeFilter = (value) => {
    this.setState({ filter: value });
  };

  onSubmit = (formState) => {
    this.setState({
      contacts: [...this.state.contacts, formState],
    });
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <ContacsForm onSubmit={this.onSubmit} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.changeFilter} />
        <ContasctsList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
