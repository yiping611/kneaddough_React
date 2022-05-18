import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
	state={show:false}
	hoverdelete=(flag)=>{
        this.setState({show:flag})
	}
	deletetodo=(id)=>{
		console.log(this.props,'1')
	    if(window.confirm('确定删除吗？')){
		   this.props.deletetodo(id)
		}
	}
	changechecked=(event,id)=>{
		const {target}=event
		this.props.updateTodo(id,event.target.checked)
	}
	render() {
		const {name,done,id}=this.props
		const {show}=this.state
		return (
			<li style={{backgroundColor:show?'#ccc':''}} onMouseEnter={()=>this.hoverdelete(true)} onMouseLeave={()=>this.hoverdelete(false)}>
				<label>
					<input  checked={done} onChange={(event=>this.changechecked(event,id))} type="checkbox"/>
					<span>{name}</span>
				</label>
				<button onClick={()=>this.deletetodo(id)} className="btn btn-danger" style={{display:show?'block':'none'}}>删除</button>
			</li>
		)
	}
}