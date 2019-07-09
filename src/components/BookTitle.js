import React from 'react';

const BookTitle = (props) => {
    return (
        <div className="list-books-title">
            <h1>{props.title}</h1>
        </div>
    )
}

export default BookTitle;
