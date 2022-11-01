import React from "react";
const mystyle = {
  display: "flex-wrap",
};
class Star extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ on: true });
  }

  render() {
    return (
      <>
        <img
          style={mystyle}
          src={
            this.state.on
              ? process.env.PUBLIC_URL + "/staron.jpg"
              : process.env.PUBLIC_URL + "/staroff.jpg"
          }
          onClick={this.handleClick}
        />
      </>
    );
  }
}
export default Star;
