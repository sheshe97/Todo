import React, { Component } from 'react'
import "./App.css"
export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state={
            input:"",
            todo:[]
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.deleteTodo=this.deleteTodo.bind(this)
        this.deleteid=this.deleteid.bind(this)
    }
        handleChange(e){
            this.setState({
                input:e.target.value
            })
        }
        handleSubmit(e){
            e.preventDefault()
            if(this.state.input.length>=2){
                this.setState({
                    todo:this.state.todo.concat(this.state.input)
                })
                if(this.state.input!==""){
                    this.setState({
                        input:""
                    })
                }
            }
        }
        deleteTodo(){
            this.setState({
                todo:[]
            })
        }
        deleteid(id){
            this.setState({
                todo:this.state.todo.splice(id,this.state.todo.length-1)
            })
        }
    render() {
        let inputStyle={
            border:'1px solid green'
        }
        if(this.state.input.length>15){
            inputStyle.border="5px solid red"
        }
        return (
            <div className="App1">
                <h1>Todo List</h1>
                      <form className="todo-app">
               
                    <input style={inputStyle} type="text" placeholder="TODO LIST" className="todo-input" onChange={this.handleChange} value={this.state.input}></input>
               <button className="todo-button" onClick={this.handleSubmit} >Add TODO</button>
              <ol>
                  {this.state.todo.map((val,index)=><li key={index}>{val}<button onClick={(id)=>this.deleteid(index.id)}>X</button></li>)}
              </ol>
            
                   <button className="deletebtn" onClick={this.deleteTodo}>claer all</button>
               
            </form>
                
            </div>
        )
    }
}
