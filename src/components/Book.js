import React from 'react';
import BookChanger from './BookChanger';

function Books(props){
  return(
    <ol className="books-grid">
      {props.bookList.map(book =>(
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover"
                style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}
              ></div>
              <div className="book-shelf-changer">
                  <BookChanger />
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors[0]}</div>
        </div>
      </li>
      ))}
    </ol>
  )
}

export default Books;
