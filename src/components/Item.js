import React from "react"
import styles from "./Item.module.css"

const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }



class Item extends React.Component {

    state = {
        editing: false,
      }

    handleEditing = ()=> {
        this.setState({
            editing: true,
          })
    }

    handleUpdatedDone = event => {
        if (event.key === "Enter") {
            this.setState({ editing: false })
          }
      }

    render(){
        let viewMode = {}
        let editMode = {}

        if (this.state.editing) {
        viewMode.display = "none"
        } else {
        editMode.display = "none"
        }

        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
                <input 
                    type="checkbox" 
                    checked={this.props.todo.completed} 
                    onChange={()=>{this.props.handleCheck(this.props.todo.id)}}
                />
                <button onClick={()=>{this.props.handleDelete(this.props.todo.id)}}>Delete</button>
        
                <span style={this.props.todo.completed ? completedStyle : null}>      
                {this.props.todo.title}
                </span>
                </div>
                <input 
                    type="text"
                    value={this.props.todo.title} 
                    className={styles.textInput} 
                    style={editMode}
                    onChange={e => { this.props.updateItem(e.target.value, this.props.todo.id) }}
                    onKeyDown={this.handleUpdatedDone} 
                />
            </li>
            )
    }
}


export default Item