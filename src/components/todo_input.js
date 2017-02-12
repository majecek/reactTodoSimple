import React, { Component } from "react";

class TodoInput extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      item: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.item.length > 1) {
      this.props.addItem(this.state.item);
    }
    this.setState({item: ''});
  }

  handleChange(event) {
    this.setState({item: event.target.value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-inline">
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.item}
            className="form-control"
            placeholder="New Item"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

}

export default TodoInput;