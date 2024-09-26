import React from "react";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    // 상위 컴포넌트로부터 넘겨받은 item 속성의 값을 item이라는 이름으로 저장
    this.state = { item: props.item };
  }
  render() {
    return (
      <div className="ToDo">
        <input
          type="checkbox"
          id={this.state.item.id}
          name={this.state.item.id}
          checked={this.state.item.done}
        />
        <label id={this.state.item.id}>{this.state.item.title}</label>
      </div>
    );
  }
}
export default ToDo;
