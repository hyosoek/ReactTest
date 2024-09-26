class AddToDo extends React.Component {
  constructor(props) {}

  onInputChange = (e) => {
    const thisItem = this.state.thisItem;
    thisItem.title = e.target.value;
    this.setState({ item: thisItem });
  };

  onButtonClick = (e) => {
    this.add(this.state.item);
    this.setState({ item: { title: "" } });
  };

  //   Enter를 눌렀을 때 호출되는 함수
  enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      this.onButtonClick;();
    }
  };
}
