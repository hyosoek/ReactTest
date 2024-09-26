import React from "react";

class ToDo extends React.Component {
  render() {
    const { item } = this.props; // props에서 item을 직접 사용
    return (
      <div className="ToDo">
        <input
          type="checkbox"
          id={item.id}
          name={item.id}
          checked={item.done}
          readOnly // 체크박스는 읽기 전용으로 설정
        />
        <label htmlFor={item.id}>{item.title}</label>
      </div>
    );
  }
}

export default ToDo;
