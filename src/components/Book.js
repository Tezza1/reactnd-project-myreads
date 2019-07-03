import React from 'react';
import BookChanger from './BookChanger';

function Books(props){
  return(
    <div>
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
            <div className="book-shelf-changer">
              <BookChanger />
            </div>
          </div>
          {/* <div className="book-title">{this.state.books[0].title}</div> */}
          <div className="book-title">To Kill A Mockingbird</div>
          {/* <div className="book-authors">{this.state.books[0].authors[0]}</div> */}
          <div className="book-authors">Harper Lee</div>
        </div>
      </li>
    </div>
  )
}

export default Books;