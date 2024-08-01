import { createSignal } from "solid-js";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BookForm } from "./BookForm";
import { BookList } from "./BookList";

const initialBooks =[
    { title: "TitleBook1-a", author: "Author1 testing"},
    { title: "TitleBook2", author: "Author2"},
    { title: "TitleBook3", author: "Author3"},
    { title: "4", author: "4"},
];

export function BukuSy(props){
    const[books, setBooks] = createSignal(initialBooks);
    
    return(
        <>
        <h3>{props.title}</h3>
        <Header/>
        <BookList bookstttttttttttttt={books()} />
        <BookForm setBooksu={setBooks}/>
        <Footer/>
        </>
    );
}