import React, {Component, PropTypes} from 'react'

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.propTypes = {
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      completed: PropTypes.bool.isRequired
    }
  }
  render () {
    return (
      <li onClick={this.props.onClick} style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer'
        }}>
        {this.props.text}
      </li>
    )
  }
}
