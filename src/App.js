import "./App.css";
import React, { Component } from "react";
import AddToDo from "./src/AddToDo";
import Todo from "./src/ToDo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [], // 할 일 목록
    };
  }

  add = (item) => {
    if (item.title) {
      const newItem = {
        id: this.state.items.length,
        title: item.title,
        done: false,
      };
      this.setState({
        items: [...this.state.items, newItem],
      });
    }
  };

  render() {
    return (
      <div className="App">
        <AddToDo add={this.add} />
        <div>
          {this.state.items.map((item) => (
            <Todo key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
