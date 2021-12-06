import React from "react";
import foto1 from "./mouse.jpg"



function Mouse (){
    const[counter, setCounter] = React.useState(0)

    const creciente = () =>{
        setCounter(counter + 1)
    }
    const decreciente = () =>{
        setCounter(counter - 1)
    };
    return(
        <>
        
        <header>Perifericos</header>
       
            
            <div id="art">
            
            <div class="articulos">
            <h1>teclado</h1>
            <img src={foto1} class="fotoArt"alt="foto teclado"/>
            <h2>Contador</h2>
            <h3>{counter}</h3>
            <button onClick={decreciente}>decrecer</button>
            <button onClick={creciente}>crecer</button>
            </div>
        </div>
        
        </>
    )
}
export default Mouse
