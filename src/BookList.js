import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'
import {Link} from 'react-router-dom'

class BookList extends React.Component {
 state={
   SearchBook:[],
   query:""
 }

 Searchhandler=(query)=>{
  this.setState(()=>({
    query:query
  }))

  if(query !== ""){ 
  BooksAPI.search(query)
  .then((Books)=>{
    this.setState(()=>({
     SearchBook:Books,
    }))
  })
 }else{
  this.setState(()=>({
    SearchBook:[],
   }))
 }
 }

  render() {
    return (
      <div className="app">
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input value={this.state.query} onChange={(e)=>this.Searchhandler(e.target.value)} type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              { this.state.SearchBook && this.state.SearchBook.length>0 ?
                (this.state.SearchBook.map((book)=>(
                  <li key={book.id}> <Book  key={book.id} updateBook={this.props.updateBook} book={book} val={this.props.val}/> </li>
                   ))
                ) : (<div>
                  You can find these search terms here: <hr/>
                  'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball',
                  'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes',
                  'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design',
                  'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything',
                  'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi',
                  'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn',
                  'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting',
                  'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River',
                  'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale',
                  'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
                  
                  </div>)
              }
              </ol>
            </div>
          </div>
        </div>  
    ) 
  }
}

export default BookList
