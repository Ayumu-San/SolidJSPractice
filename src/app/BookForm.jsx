import { createSignal } from "solid-js";



const emptyBook = {title: "", author:""};

export function BookForm(props){
    const [newBook, setNewBook] = createSignal(emptyBook)
    const handleSubmit = (e) => {
    e.preventDefault()
    props.setBooksu((books) => [...books, newBook()])
    setNewBook(emptyBook)
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label for="title">Judul Buku / Book Title</label>
                <input 
                id="title" 
                value={newBook().title}
                onInput= {(e) =>{
                    setNewBook({...newBook(), title: e.currentTarget.value});
                }}
                />
            </div>
            <div>
                <label for="author">Author</label>
                <input 
                id="author" 
                value={newBook().author}
                onInput= {(e) =>{
                    setNewBook({...newBook(), author: e.currentTarget.value});
                }}/>
            </div>
            <div>
                <button type="submit">Add Book</button>
            </div>
        </form>
    );
}