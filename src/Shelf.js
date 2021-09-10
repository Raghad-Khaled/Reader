import React from 'react'
import './App.css'
import Book from './Book'

function Shelf ({shelfName,Books,name,updateBook,val}) {
    return (
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelfName}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                        Books.filter((book)=>(book.shelf===name)).map((book)=>(
                          <li key={book.id}>  <Book  key={book.id} updateBook={updateBook} book={book} val={val}/> </li>
                           ))
                      }
                   </ol>
          </div>
          </div>
    )
 
}

export default Shelf
