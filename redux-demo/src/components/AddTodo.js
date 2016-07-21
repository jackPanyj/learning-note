import React, {Component, PropTypes} from 'react'

export default class AddTodo extends Component {
  constructor (props) {
    super(props)
    this.propTypes = {
      onAddClick: PropTypes.func.isRequired
    }
  }
  render () {
    return (
      <div>
        <input type='text' ref='input'/>
        <button onClick={this._handleClick.bind(this)}>Add</button>
      </div>
    )
  }
  _handleClick (e) {
    const node = this.refs.input
    const text = node.value.trim()
    this.props.onAddClick(text)
    node.value = ''
  }
}
