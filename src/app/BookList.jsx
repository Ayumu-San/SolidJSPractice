import { createSignal, For, Index } from "solid-js";



export function BookList(props) {
    
    const totalBooks = () => props.bookstttttttttttttt.length;
    return(
        <>
        <p> Total Buku : {totalBooks()}</p>
            <ul>
                <For each={props.bookstttttttttttttt}>
                    {(buku) => {
                        return(
                            <li>
                            {buku.title}{" "}
                            <span style={{ "font-style":"italic" }}>({buku.author})</span>
                            </li>
                        ); 
                    }}
                </For>
               
            </ul>
        </>
    );
} 


























{/* <li>
                    {books()[0].title}{" "}
                    <span style={{ "font-style":"italic" }}>({books()[0].author})</span>
                </li>
                <li>
                    {books()[1].title}{" "}
                
                    <span style={{ "font-style":"italic" }}>(Osaka Shizuku)</span>
                </li> */}