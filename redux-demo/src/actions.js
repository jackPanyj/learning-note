// action 类型

export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// 其他常量

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// action 创建函数

function addTodo (text) {
    return {type: ADD_TODO, text}
}

function completeTodo (index) {
  return {type: COMPLETE_TODO, index}
}

function setVisibilityFilter (filter) {
  return {type: SET_VISIBILITY_FILTER, filter}
}

export {addTodo, completeTodo, setVisibilityFilter}
