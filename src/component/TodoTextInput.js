import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'
class TodoTextInput extends Component {
    render() {
        return (
        <input
        type="text"
        autoFocus="true"
        placeholder="What needs to be done?"
        className='new-todo'
        />
        )
        }
}
export default TodoTextInput;