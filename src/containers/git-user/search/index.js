import React from 'react'

class Search extends React.Component {
  render() {
    return (<div className="details-container">
        <input type="text" ref={input => { this.textInput = input }}/>
        <button onClick={() => {this.props.getUser(this.textInput.value)}}>Search</button>
    </div>);
  }

}

export default Search