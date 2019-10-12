import React, { Component } from 'react'
import List from '../List/List'
import '../style.css';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: '',
            list: []
        }

        this.handleInput = this.handleInput.bind(this)
        this.addListItem = this.addListItem.bind(this)
    }

    handleInput(e) {
        this.setState({
            input: e.target.value
        })
    }

    addListItem(e) {
        e.preventDefault()
        this.setState({
            input: '',
            list: [...this.state.list, this.state.input]
        })
    }

    deleteListItem = index => {
        const list = this.state.list.concat()
        list.splice(index, 1)

        this.setState({ list })
    }

    render() {
        return (
            <>
                <form onSubmit={this.addListItem} className="flex">
                    <input
                        type="text"
                        placeholder="Что добавим?"
                        onChange={this.handleInput}
                        value={this.state.input}
                    />
                    <button>+</button>
                </form>
                <List
                    state={this.state.list}
                    deleteListItem={this.deleteListItem}
                />
            </>
        )
    }
}

export default Form