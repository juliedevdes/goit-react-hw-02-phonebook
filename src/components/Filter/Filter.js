import React from "react";

export default class Filter extends React.Component {
  state = {
    filterValue: "",
  };

  handleFilterChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    this.props.onChange(e.currentTarget.value);
  };

  render() {
    return (
      <label>
        Search through your contacts{" "}
        <input
          name="filterValue"
          onChange={this.handleFilterChange}
          value={this.state.filterValue}
        />
      </label>
    );
  }
}
