import React from 'react'
import {Link,} from 'react-router-dom'
import './App.css'
import Shelf from './Shelf';


function ShelfList({Books,updateBook,val})  {
 
    return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              <Shelf key="currentlyReading" shelfName="Currently Reading" Books={Books} name="currentlyReading" updateBook={updateBook} val={val}/>
              <Shelf key="wantToRead" shelfName="Want to Read" Books={Books} name="wantToRead" updateBook={updateBook} val={val}/>
              <Shelf key="read" shelfName="Read" Books={Books} name="read" updateBook={updateBook} val={val}/>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search"> Add a book</Link>
              
            </div>
          </div>
     

    )
}

export default ShelfList
