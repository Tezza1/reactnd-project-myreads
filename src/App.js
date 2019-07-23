import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookTitle from './components/BookTitle';
import BookShelf from './components/BookShelf';
import SearchButton from './components/SearchButton';

class BooksApp extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       */
      /**
      *  TODO: react router for new page
      */
       /**
      *  TODO: fix-up algorithm & make efficient
      */
       /**
      *  TODO: change shelf with API call
      */
       /**
      * TODO: search functionality
      */
      showSearchPage: false,
      books: [
        {
          title: "",
          authors: [""]
        }
      ],
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  }


  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))

        this.filterBooks()
      })

  }

  filterBooks () {
    let currentlyReading= this.state.books.filter(book => {
      return book.shelf === "currentlyReading"
    })
    let wantToRead = this.state.books.filter(book => {
      return book.shelf === "wantToRead"
    })
    let read = this.state.books.filter(book => {
      return book.shelf === "read"
    })

    this.setState({
      currentlyReading,
      wantToRead,
      read
    })

  }

  render() {
    return (
      <div className="app" data-test="component-app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <Route exact path="/" render={() => (
            <div className="list-books">
              <BookTitle title={'MyReads'}/>
              <BookShelf
                title={['Currently Reading', 'Want to Read', 'Read']}
                currentlyReading={this.state.currentlyReading}
                wantToRead={this.state.wantToRead}
                read = {this.state.read}
              />
              <SearchButton />
            </div>
          )} />
        )}
      </div>
    )
  }
}

export default BooksApp
