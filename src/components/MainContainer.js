import React from "react"
import List from "./List"
import Header from "./Header"
import Input from "./Input"

class MainContainer extends React.Component {
    state = {
        todos: [
          {
            id: 1,
            title: "Setup development environment",
            completed: true
          },
          {
            id: 2,
            title: "Develop website and add content",
            completed: false
          },
          {
            id: 3,
            title: "Deploy to live server",
            completed: false
          }
        ]
    }

    handleCheck = (id) => {
        this.setState(prevState => {
            return {
                todos : prevState.todos.map(todo => {
                    if (todo.id === id){
                        
                        return {...todo ,completed: !todo.completed}                       
                    }                
                    return todo
                })
            }            
        })
    }

    handleDelete = (id) => {
        this.setState({
            todos: [      
                ...this.state.todos.filter(todo => {        
                    return todo.id !== id;      
                })              
            ]
        })        
    }

    addItem = title => {
        const newId = (this.state.todos.at(-1).id + 1)        
        const newTodo = {    id: newId,    title: title,    completed: false  }
        this.setState({    todos: [...this.state.todos, newTodo]  })
    }

    updateItem = (title, id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
              if (todo.id === id) {
                todo.title = title
              }
              return todo
            }),
        })
    }

  render() {
    return (
        <div className="container">
            <div className="inner">
            <Header />
            <Input 
                addItem ={this.addItem}
            />
            <List 
                todos={this.state.todos} 
                handleCheck={this.handleCheck} 
                handleDelete={this.handleDelete}
                updateItem={this.updateItem}
            />  
            </div>
        </div>      
    )
  }
}

export default MainContainer