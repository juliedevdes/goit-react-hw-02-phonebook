import React from "react";

import ContacsForm from "./components/ContacsForm/ContacsForm";
import ContasctsList from "./components/ContactList/ContactsList";
import Filter from "./components/Filter/Filter";

class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
  };

  onSubmit = (formState) => {
    //cheking if there alredy exist such contacts
    const checkedForMatch = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(formState.name.toLowerCase())
    );

    //depend on that two variants
    if (checkedForMatch.length === 0) {
      this.setState({
        contacts: [...this.state.contacts, formState], //add new contact
      });
    } else {
      alert("There is already contact with the same name"); //or notify user
    }
  };

  removeContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  updateFilter = (value) => {
    this.setState({ filter: value });
  };

  getVisibleContacts = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h2>Phonebook</h2>
        <ContacsForm onSubmit={this.onSubmit} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.updateFilter} />
        <ContasctsList
          contacts={visibleContacts}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
