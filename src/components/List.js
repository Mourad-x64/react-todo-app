import React from "react"
import Item from "./Item"

class List extends React.Component {
    render(){
        return (
        <ul>
        {this.props.todos.map(todo => (
        <Item 
        key={todo.id} 
        todo={todo} 
        handleCheck={this.props.handleCheck}
        handleDelete={this.props.handleDelete}
        updateItem={this.props.updateItem}
        />
        ))}
        </ul>
        )
    }
}

export default List
