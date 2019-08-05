import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';

class BookChanger extends Component {

  constructor(props){
    super(props)
    this.state = {
      shelf: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault()

    let shelf = e.target.value
    BooksAPI.update(this.props.book, shelf)
      .then((book) => {
        this.setState({
          shelf
        })

        this.props.updateBooks()
      })
  }

  render(){
     return (
      <form onChange={this.handleChange}>
        <select>
          <option>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </form>
    )
  }
 }

export default BookChanger;
