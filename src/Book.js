import React from 'react'
import './App.css'


class Book extends React.Component {
  
  render() {
      const book=this.props.book;
    return (
         
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:(book.imageLinks && book.imageLinks.smallThumbnail) ? (`url(${book.imageLinks.smallThumbnail})`):("none") }}></div>
                      <div className="book-shelf-changer">
                      <select value={this.props.val} onChange={(e)=>this.props.updateBook(book,e.target.value)} >
                            <option value="move" disabled>Move to...</option>
                            {
                                book.shelf==="currentlyReading" ?( <option style={{backgroundColor:'green'}} value="currentlyReading">Currently Reading</option>)
                                :( <option  value="currentlyReading">Currently Reading</option>)
                            }
                            {
                                book.shelf==="wantToRead"?( <option style={{backgroundColor:'green'}} value="wantToRead">Want to Read</option>)
                                :( <option  value="wantToRead">Want to Read</option>)
                            }
                            {
                                book.shelf==="read"?( <option  style={{backgroundColor:'green'}} value="read">Read</option>)
                                :( <option  value="read">Read</option>)
                            }
                            {
                                book.shelf==="None"?( <option style={{backgroundColor:'green'}} value="none">None</option>)
                                :( <option value="None">None</option>)
                            }
                      </select>
                       </div>
                    </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors&&book.authors.length>0 && book.authors.map((one)=>(<span key={one}>
                    {one} , 
                    </span>))}</div>
                </div>
                    
    )
  }
}

export default Book
