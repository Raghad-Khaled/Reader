import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'


class BookList extends React.Component {
 state={
   SearchBook:[],
   query:""
 }

 booksinshelf=()=>{
  let Booksin=[];
  const fromsearch=this.state.SearchBook;
  const inshelfs=this.props.Books;
  //console.log(fromsearch);
  //console.log(inshelfs);
  let found=false;
 for(let i=0;i<fromsearch.length;i++){
   found=false;
   for(let j=0;j<inshelfs.length;j++){
     if(fromsearch[i].id===inshelfs[j].id){
       Booksin.push(inshelfs[j]);
       found=true;
       break;
       }
   }
   if(!found){
     fromsearch[i].shelf="None";
     Booksin.push(fromsearch[i]);
   }
 }
 this.setState(()=>({
   SearchBook:Booksin
  }))
  //console.log(Booksin);
 // console.log(this.state.SearchBook);
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
    this.booksinshelf();
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
                <input value={this.state.query} onChange={(e)=>this.Searchhandler(e.target.value)} type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              { this.state.SearchBook && this.state.SearchBook.length>0 ?
                ( this.state.SearchBook.map((book)=>(
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
