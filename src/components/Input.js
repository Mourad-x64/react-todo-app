import React from "react"

class Input extends React.Component {
    state = {
        title: ""
    }

    onChange = e => {
        this.setState({    
            title: e.target.value  
        })
    }

    handleSubmit = e => {
      e.preventDefault()
      if (this.state.title.trim()) {
        this.props.addItem(this.state.title)
        this.setState({ title : "" })
      } else {
        alert("Please write an item.")
      }
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input 
        type="text" 
        className="input-text"
        placeholder="Add Todo..." 
        value={this.state.title} 
        onChange={this.onChange} 
        />
        <button className="input-submit">Submit</button>
      </form>
    )
  }
}
export default Input