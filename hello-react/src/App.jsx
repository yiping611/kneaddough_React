import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
	state={
    todos:[
      {id:'001',name:'吃饭',done:true},
      {id:'002',name:'睡觉',done:true},
      {id:'003',name:'打代码',done:false},
      {id:'004',name:'逛街',done:false}
    ],
    alldone:false
  }
  addtodofn=(obj)=>{
    this.setState({
      todos:[ obj,  ...this.state.todos ]
    })
  }
  deletetodo=(id)=>{
    // his.setState 是在 render 时, state 才会改变调用的, 也就是说, setState 是异步的. 组件在还没有渲染之前,
    // this.setState 还没有被调用.这么做的目的是为了提升性能, 在批量执行 State 转变时让 DOM 渲染更快.
    this.setState({
      todos:this.state.todos.filter(item=>item.id!=id),
      alldone:this.state.todos.filter(item=>item.id!=id).length==0?false:this.state.alldone
    },()=>{
      console.log(this.state,'state数据有更新')
    })
   console.log(this.state,'state数据没有更新')
  }
  updateTodo=(id,flag)=>{
    this.setState({
      todos:this.state.todos.map(item=>{if(item.id==id){item.done=flag} return item}),
    })
      this.setState({
        alldone:this.state.todos.every(item=>item.done)?true:false
      })
  }
  allupdate=(flag)=>{
    this.setState({
      todos:this.state.todos.map(item=>{{item.done=flag} return item}),
      alldone:flag
    })
  }
  clearover=()=>{
    this.setState({
      todos:this.state.todos.filter(item=>!item.done),
      alldone:false,
    })
  
  }
	render() {
    const {todos}= this.state
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header  addtodofn={this.addtodofn}/>
					<List todos={todos} deletetodo={this.deletetodo} updateTodo={this.updateTodo}/>
					<Footer alldone={this.state.alldone} todos={todos} allupdate={this.allupdate} clearover={this.clearover} />
				</div>
			</div>
		)
	}
}
