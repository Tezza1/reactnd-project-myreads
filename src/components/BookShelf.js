import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class BookShelf extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      item: ''
    }
  }

  bookListProps = (title) => {
    if(title === 'Currently Reading'){
      return this.props.currentlyReading
    } else if (title === 'Want to Read') {
      return this.props.wantToRead
    } else if (title === 'Read') {
      return this.props.read
    } else {
      console.log('Error with book props')
    }
  }

  render(){
    return (
      <div className="list-books-content" data-test='component-bookshelf'>
        {this.props.title.map(title => (
          <div className="bookshelf" key={title}>
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
              <Book bookList={this.bookListProps(title)} updateBooks={this.props.updateBooks}/>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

BookShelf.propTypes = {
  title: PropTypes.array.isRequired,
  currentlyReading: PropTypes.array.isRequired,
  wantToRead: PropTypes.array.isRequired,
  read: PropTypes.array.isRequired
}

export default BookShelf;
