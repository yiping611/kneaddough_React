import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {

	keycodeenter=(event)=>{
		const {target,keyCode}=event
			  if(keyCode!=13) return
			  if(target.value.trim()==''){
				  alert('输入不能为空！')
				  return
			  }
			  this.props.addtodofn( {id:Date.now(),name:target.value,done:false})
			  target.value=''
	}
	render() {
		return (
			<div className="todo-header">
				<input type="text" onKeyUp={this.keycodeenter} placeholder="请输入你的任务名称，按回车键确认"/>
			</div>
		)
	}
}