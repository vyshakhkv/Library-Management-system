import '../styles/addBook.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {

    let [title, setTitle] = useState("")
    let [authors, setAuthors] = useState("")
    let [categories, setCategories] = useState("")
    let [pageCount, setPage] = useState("")
    let [shortDescription, setShort] = useState("")
    let [longDescription, setLong] = useState("")
    let [thumbnailUrl, setUrl] = useState("")

    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault();
        //data to be posted
        let bookData = {title, categories, authors, pageCount, shortDescription, longDescription, thumbnailUrl}
        console.log(bookData);

        //postiong to server
        fetch('http://localhost:1400/books', {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
        })
        alert(`${title} added`)
        navigate('/admin/book-list')
    }

    return (
        <div className="addBook">
            
            <div className="addBook_form">
            <h1>Add Book</h1>
                <form action="" onSubmit={handleSubmit}>
                    <div className="title">
                        <input type="text" value={title} placeholder="Title of the book" onChange={(e) => setTitle(e.target.value)} required />
                    </div>
                    <div className="authors" type="text">
                        <input type="text" value={authors} placeholder="Author of the book" onChange={(e) => setAuthors(e.target.value)} required />
                    </div>
                    <div className="categories">
                        <input type="text" value={categories} onChange={(e) => setCategories(e.target.value)} placeholder="Category of the book" required />
                    </div>
                    <div className="pageCount" >
                        <input placeholder="Page Count of the book" value={pageCount} onChange={(e) => setPage(e.target.value)} required type="number" />
                    </div>
                    <div className="shortDescription" >
                        <textarea className="shortdes" value={shortDescription} placeholder="short Description" onChange={(e) => setShort(e.target.value)} cols="50" rows="9"></textarea>
                    </div>
                    <div className="longDescription">
                        <textarea className="longdes" value={longDescription} placeholder="Long Description" onChange={(e) => setLong(e.target.value)} cols="70" rows="10"></textarea>
                    </div>
                    <div className="thumbnailUrl">
                        <input type="text" value={thumbnailUrl} onChange={(e) => setUrl(e.target.value)} placeholder="thumbnail URL" />
                    </div>
                    <button className="but_book" type='submit'>Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default AddBook;