import "./App.css";

import React, { Component } from "react"; // Component를 추가해야 합니다.
import Todo from "./src/ToDo";

class App extends Component {
  // App을 Component로 변경
  constructor(props) {
    super(props);
    this.state = {
      item: { id: 0, title: "안녕 React", done: true },
    };
  }

  add = (item) => {
    // react의 state와 props는 불변의 객체
    // 수정 작업을 할 때는, 다른 곳에  복사를 한 후, 수정을 하고 다시 state나 props에 설정
    // 기존 state를 복사
    const thisItems = this.state.item;

    // 하기 전에 리스트로 바꿔주기
    item.id = thisItems.length;
    item.done = false;
    thisItems.push(item);
    this.setState({ items: thisItems });
  };

  render() {
    const item = this.state.item;
    return (
      <div className="App">
        {/* <Container maxWidth="md">
          <AddToDo add={this.add} />
          <div>{todoItems}</div>
        </Container> */}
        <Todo item={this.state.item} /> {/* item의 오타 수정 */}
      </div>
    );
  } // render 메서드의 닫는 괄호 추가
}

export default App;
