import React from "react";

import ContacsForm from "./components/ContacsForm/ContacsForm";
import ContasctsList from "./components/ContactList/ContactsList";

class App extends React.Component {
  state = {
    contacts: [],
    name: "",
  };

  onSubmit = (formState) => {
    this.setState({
      contacts: [...this.state.contacts, formState],
    });
  };

  render() {
    return (
      <div>
        <ContacsForm onSubmit={this.onSubmit} />
        <ContasctsList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
