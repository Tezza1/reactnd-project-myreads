import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Books from './Book';

class SearchPage extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      searchTerm: '',
      books: []
    }
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit= (e) => {
    e.preventDefault();

    BooksAPI.search(this.state.searchTerm)
      .then((books) => {
        if (books.length !== undefined){
          this.setState({
            books
          })
        } else {
          this.setState({
            searchTerm: '',
            books: []
          })
        }
      })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>
            <button className="close-search">Close</button>
          </Link>
          <form onSubmit={this.handleSubmit}>
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
                onChange={e => this.handleChange(e)}
              />

            </div>
          </form>
        </div>
        <div className="search-books-results">
            <Books bookList={this.state.books} />
        </div>
      </div>
    )
  }
}

export default SearchPage;
