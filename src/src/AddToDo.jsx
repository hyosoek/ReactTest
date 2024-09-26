import React from "react";

class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: { title: "" }, // 입력된 항목의 상태
    };
  }

  onInputChange = (e) => {
    this.setState({ item: { title: e.target.value } });
  };

  onButtonClick = () => {
    this.props.add(this.state.item); // 부모 컴포넌트의 add 메서드 호출
    this.setState({ item: { title: "" } }); // 입력 필드 초기화
  };

  enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      this.onButtonClick(); // 버튼 클릭 함수 호출
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.item.title}
          onChange={this.onInputChange}
          onKeyDown={this.enterKeyEventHandler}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={this.onButtonClick}>+</button>
      </div>
    );
  }
}

export default AddToDo;
