import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const BookShelf = (props) => {
  return (
    <div className="list-books-content" data-test='component-bookshelf'>
      <div className="bookshelf" >
        <h2 className="bookshelf-title">{props.title[0]}</h2>
        <div className="bookshelf-books">
          <Book bookList={props.currentlyReading} updateBooks={props.updateBooks}/>
        </div>
      </div>
      <div className="bookshelf" >
        <h2 className="bookshelf-title">{props.title[1]}</h2>
        <div className="bookshelf-books">
          <Book bookList={props.wantToRead} updateBooks={props.updateBooks}/>
        </div>
      </div>
      <div className="bookshelf" >
        <h2 className="bookshelf-title">{props.title[2]}</h2>
        <div className="bookshelf-books">
          <Book bookList={props.read} updateBooks={props.updateBooks}/>
        </div>
      </div>
    </div>
    )
}

BookShelf.propTypes = {
  title: PropTypes.array.isRequired,
  currentlyReading: PropTypes.array.isRequired,
  wantToRead: PropTypes.array.isRequired,
  read: PropTypes.array.isRequired
}

export default BookShelf;
