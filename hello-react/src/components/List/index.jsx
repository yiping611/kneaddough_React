import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

	render() {
		const {todos,deletetodo,updateTodo}=this.props
		return (
			<ul className="todo-main">
				{
					todos.map(todo=>{
						return <Item key={todo.id} {...todo} deletetodo={deletetodo} updateTodo={updateTodo}/>
					})
				}
			</ul>
		)
	}
}