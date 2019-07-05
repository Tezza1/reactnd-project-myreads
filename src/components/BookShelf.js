import React from 'react';
import Book from './Book'

function BookShelf(props) {
  console.log(props.books)
  return (
    <div className="list-books-content">
      <div>
        {props.title.map(t=>(
          <div className="bookshelf" key={t + "1"}>
            <h2 className="bookshelf-title" key={t + "2"}>{t}</h2>
            <div className="bookshelf-books" key={t + "3"}>
              <ol className="books-grid" key={t + "4"}>
                <Book />
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}

export default BookShelf;
