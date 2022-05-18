import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
	allupdate=(event)=>{
		this.props.allupdate(event.target.checked)
	}
	
	render() {
		const {todos,alldone}=this.props
			const doneCount = todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0),0)
		return (
			<div className="todo-footer">
				<label>
					<input checked={alldone} onChange={this.allupdate} type="checkbox" />
				</label>
				<span>
					<span>已完成{doneCount}</span> / 全部{todos.length}
				</span>
				<button className="btn btn-danger" onClick={this.props.clearover}>清除已完成任务</button>
			</div>
		)
	}
}
