import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="flex items-center mb-3">
        <h1 className="mr-5">{this.state.count}</h1>
        <button
          className="px-3 py-1 text-white bg-black rounded"
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +
        </button>
        <button
          className="px-3 py-1 ml-2 text-white bg-red-600 rounded"
          onClick={() => {
            this.setState({ count: 0 });
          }}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;
