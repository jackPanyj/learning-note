import React, {Component, PropTypes} from 'react'
import Todo from './Todo'
export default class TodoList {
  constructor(props) {
    super(props)
  }

  render () {
    <ul>
      {this.props.todos.map((todo, index) => {
        <Todo {...todo} key={index} onClick={e => this.props.onTodoClick(index)}></Todo>
      })}
    </ul>
  }

}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}
