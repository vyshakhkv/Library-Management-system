import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import '../styles/readBook.css'

const ReadBook = () => {

    let[book,setBook]=useState([])
    let params=useParams()

    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await fetch(`http://localhost:1400/books/${params.id}`)
            let data=await response.json()
            setBook(data)
        }
        fetchdata()

    })
   
    return ( 
        <div className="readBook">
            <h1>Read Book</h1>
            <div className="bookcard">
            <h2>{book.title}</h2>
           <p>{book.shortDescription}</p>
           <p>{book.longDescription}</p>
           </div>
        </div>
     );
}
 
export default ReadBook;