import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import BookList from './BookList'
import './App.css'
import ShelfList from './ShelfList';

class BooksApp extends React.Component {
  state = {
    Books:[],
    val:'move',
    searchword:''
  }

  updateBook=(book,val)=>{
    this.setState(()=>({
      val:val
    }))
    book.shelf=val
    console.log(book)
    this.setState((currenState)=>({
      Books: currenState.Books.filter((Book)=>{return Book.id!==book.id })
    }))
    this.setState((currenState)=>({
      Books: [...currenState.Books,book]
    }))
    BooksAPI.update(book,val)
  }

  componentDidMount(){
    BooksAPI.getAll()
    .then((Books)=>
      {this.setState(()=>({
        Books:Books
      }))

      //console.log(this.state.Books);
     }
    )
   }

  render() {
    return (
      <div className="app">
      <Route exact path="/" render={()=>(
      <ShelfList Books={this.state.Books} updateBook={this.updateBook} val={this.state.val}/>
      )} />
      <Route path="/search" render={()=>(
        <BookList Books={this.state.Books} updateBook={this.updateBook} val={this.state.val} />
      )}
      />
      </div>
    )
  }
}

export default BooksApp
