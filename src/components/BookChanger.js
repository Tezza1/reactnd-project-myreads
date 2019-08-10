import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';

class BookChanger extends Component {

  constructor(props){
    super(props)
    this.state = {
      shelf: '',
      currentlyReading: "normal",
      wantToRead: "normal",
      read: "normal",
      none: "normal",
      other: "normal"
    }
  }

  componentDidMount(){
    let shelf = ''

    switch(this.props.book.shelf){
      case 'currentlyReading':
        shelf = 'currentlyReading';
        break;
      case 'wantToRead':
        shelf = 'wantToRead';
        break;
      case 'read':
        shelf = 'read';
        break;
      case 'none':
        shelf = 'none';
        break;
      default:
        shelf = 'other'
    }

    this.setState({
      [shelf]: 'bold'
    })
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
          <option style={{ color: "grey" }}>Move to...</option>
          <option value="currentlyReading" style={{ fontWeight: this.state.currentlyReading }}>Currently Reading</option>
          <option value="wantToRead" style={{ fontWeight: this.state.wantToRead }}>Want to Read</option>
          <option value="read" style={{ fontWeight: this.state.read}}>Read</option>
          <option value="none" style={{ fontWeight: this.state.none}}>None</option>
        </select>
      </form>
    )
  }
 }

export default BookChanger;
