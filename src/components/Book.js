import React from 'react';
import BookChanger from './BookChanger';
import PropTypes from 'prop-types';

const Books = (props) => {
  return(
    <ol className="books-grid">
      {props.bookList.map(book =>(
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              {book.imageLinks
                  ? <div className="book-cover"
                      style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}
                    ></div>
                  : <div className="book-cover"
                      style={{ width: 128, height: 193, backgroundImage: '' }}
                    ></div>
              }
              <div className="book-shelf-changer">
                <BookChanger book={book} updateBooks={props.updateBooks}/>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">
              {book.authors
                ? book.authors.map(author =>(
                    <div key={author}>{author}</div>
                  ))
                : ''
              }
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}

Books.propTypes = {
  bookList: PropTypes.array.isRequired
}

export default Books;
