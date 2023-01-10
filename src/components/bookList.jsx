
import { useNavigate } from "react-router-dom";
import '../styles/bookList.css'
import { useState,useEffect } from "react";
// import ReadBook from './readBook';
const BookList = () => {
 let[books,setBooks]=useState([])

 useEffect(()=>{
    let fetchData=async()=>{
      let response=await  fetch('http://localhost:1400/books/')
      let data=await response.json()

      setBooks(data)
   }
    fetchData()

 },[books])

 let handleDelete=(id,title)=>{
      fetch(`http://localhost:1400/books/${id}`,{
      method:'DELETE'
   } )
   alert(`${title} will be deleted permenantly`)
 }

 
 let navigate=useNavigate();
 let handleRead=(id)=>{
     navigate(`/admin/book-list/${id}`)
 }

 return ( 
        <div className="bookList">
        <h1>Book List:{books.length}</h1>
        
        <div className="book_section">
            {books.map(data=>(
               
                <div className="book_card">
                  <div className="photo">
                     <img src={data.thumbnailUrl} alt="" />
                  </div>
                  <div className="details">
                 
                    <h4>{data.title}</h4>
                    <h6>{data.authors}</h6>
                    <h6>{data.pageCount}</h6>
                    <div className="but">
                    <button onClick={()=>handleRead(data.id)}>Read more</button>
                    <button onClick={()=>handleDelete(data.id,data.title)}>Delete</button>
                    </div>
                    </div>
                   
                 
                </div>
                 ))}

        </div>
        </div>
     );
}
export default BookList;