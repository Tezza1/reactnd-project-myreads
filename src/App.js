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
       /**
      *  TODO: change shelf with API call
      */
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
        <Route path="/search" component={SearchPage} />
      </div>
    )
  }
}

export default BooksApp
