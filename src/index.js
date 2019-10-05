import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class Task extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: '',
      list: []
    }

    this.handleInput = this.handleInput.bind(this)
    this.addListItem = this.addListItem.bind(this)
  }

  handleInput(event) {
    this.setState({
      input: event.target.value
    })
  }

  addListItem() {
    this.setState({
      input: '',
      list: this.state.list.concat(this.state.input)
    })
  }

  listDelete(index) {
    const list = this.state.list.concat()
    list.splice(index, 1)

    this.setState({ list })
  }

  render() {
    const val = this.state

    return (
      <div className="block">
        <div className="flex">
          <input
            type="text"
            placeholder="Что добавим?"
            onChange={this.handleInput}
            value={this.state.input}
          />
          <button onClick={this.addListItem}>+</button>
        </div>
        <ul className="list">
          {val.list.map((val, index) => {
            return (
              <li className="flex" key={index}>{val} <span onClick={this.listDelete.bind(this, index)}>x</span></li>
            )
          })}
        </ul>
      </div>
    )
  }
}

render(<Task />, document.getElementById('task'))