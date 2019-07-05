import React from 'react';
import Book from './Book'

function BookShelf(props) {
  return (
    <div className="list-books-content">
      <div className="bookshelf" >
        <h2 className="bookshelf-title">{props.title[0]}</h2>
        <div className="bookshelf-books">
          <Book bookList={props.currentlyReading}/>
        </div>
      </div>
      <div className="bookshelf" >
        <h2 className="bookshelf-title">{props.title[1]}</h2>
        <div className="bookshelf-books">
          <Book bookList={props.wantToRead}/>
        </div>
      </div>
      <div className="bookshelf" >
        <h2 className="bookshelf-title">{props.title[2]}</h2>
        <div className="bookshelf-books">
          <Book bookList={props.read}/>
        </div>
      </div>
    </div>
    )
}

export default BookShelf;
