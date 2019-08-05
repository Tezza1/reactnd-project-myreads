import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookTitle from './components/BookTitle';
import BookShelf from './components/BookShelf';
import SearchButton from './components/SearchButton';
import SearchPage from './components/SearchPage';

class BooksApp extends React.Component {

  constructor(props){
    super(props)
    this.state = {
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

    this.filterBooks = this.filterBooks.bind(this)
    this.updateBooks = this.updateBooks.bind(this)
  }


  componentDidMount() {
    this.updateBooks()
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

  updateBooks () {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({
        books
      })

      this.filterBooks()
    })
  }

  render() {
    return (
      <div className="app" data-test="component-app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <BookTitle title={'MyReads'} />
            <BookShelf
              title={['Currently Reading', 'Want to Read', 'Read']}
              currentlyReading={this.state.currentlyReading}
              wantToRead={this.state.wantToRead}
              read = {this.state.read}
              updateBooks={this.updateBooks}
            />
            <SearchButton />
          </div>
        )} />
      {/*<Route path="/search" component={SearchPage} /> */}
      <Route
        path="/search"
        render={(props) => (<SearchPage {...props} updateBooks={this.updateBooks} />)}
      />
      </div>
    )
  }
}

export default BooksApp
