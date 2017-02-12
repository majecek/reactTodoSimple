import React, { Component, PropTypes } from 'react';
import TodoBanner from './todo_banner';
import TodoInput from './todo_input';
import TodoList from './todo_list';
import 'bootstrap/dist/css/bootstrap.css';

class TodoApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: ['milk','water']
    };

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem(newItem){
    console.log(`new item ${newItem}`);
    const items = [...this.state.items, newItem];
    this.setState({
      items
    })
  }

  removeItem(itemIndex) {
    const items = this.state.items.filter((item,index) => {
      return index !== itemIndex;
    });
    this.setState({items});
  }

  render() {
    return (
      <div className="container-fluid">
        <TodoBanner/>
        <TodoInput addItem={this.addItem}/>
        <TodoList items={this.state.items} removeItem={this.removeItem} />
      </div>
    );
  }

};

TodoApp.propTypes = {};
TodoApp.defaultProps = {};

export default TodoApp;
