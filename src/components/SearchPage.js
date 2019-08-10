import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Books from './Book';

class SearchPage extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      searchTerm: '',
      books: [
        {
          title: "",
          authors: [""]
        }
      ]
    }
  }


  // https://stackoverflow.com/questions/28773839/react-form-onchange-setstate-one-step-behind
  handleChange = (e) => {
    this.setState(() => ({
      searchTerm: e.trim()
    }))

    this.handleSubmit(e);
  }

  handleSubmit= (e) => {
    if(e === ''){
      this.setState({
        books: [
          {
          title: "",
          authors: [""]
          }
        ]
      })
    } else {
      BooksAPI.search(this.state.searchTerm)
        .then((books) => {
          if(books) {
            this.setState({
              books
            })
          } else {
            this.setState({
              books: []
            })
          }
        }
      )
    }
  }


  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>
            <button className="close-search" onClick={this.props.updateBooks}>Close</button>
          </Link>
            <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={e => this.handleChange(e.target.value)}
              // value={this.state.query}
            />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.books.length > 1
            ? <Books bookList={this.state.books} updateBooks={this.props.updateBooks} />
            : ''
          }
        </div>
      </div>
    )
  }
}

export default SearchPage;
