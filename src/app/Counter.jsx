import { createSignal, createEffect } from "solid-js";

function Counter(){
    const [count, setCount]=createSignal(0);

    // setCount(count()+1) //Better way when the signal state is always berubah
    
    createEffect(() =>{ //Create effect running setiap data count berubah
        console.log(count()) //efek hanya bergantung pada datacount, karena hanya menampilkan signal yg berubah
    })

    // const timer = setInterval(() =>{
    //     setCount(count()+ 1);
    //     if(count() == 10){
    //         clearInterval(timer)
    //     }
    // }, 3000)// setCount(count()+1) jika diginiin jg gak bakal berubah, susunan tak mempengaruhi


    const increment = () => {
        setCount(count()+1)
    }
    
    return<div>
    <h2>{count()}</h2>
    <button onclick={increment}>Increment</button>
    </div>;
}
export default Counter;