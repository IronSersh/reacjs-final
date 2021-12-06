import React from "react";
import foto1 from "../contenido/monitor.jpg"
import foto2 from "../contenido/mouse.jpg"
import foto3 from "../contenido/teclado.jpg"

import { BrowserRouter as Router, Switch , Link , Route } from "react-router-dom";
import Teclado from "../perofericos/teclado";
import Mouse from "../perofericos/mouse";
import Monitor from "../perofericos/monitor";
function Per (){
 
    return(
        <>
        <Router>
        <header>Perifericos</header>
        <div id="art">
            <Link to="/Telcado">
            <div class="articulos">
            <h1>teclado</h1>
            <img src={foto3} class="fotoArt"alt="foto teclado"/>
            </div>
            </Link>
            <Link to="/Mouse">
            <div class="articulos">
            <h1>Mouse</h1>
            <img src={foto2} class="fotoArt"alt="foto teclado"/>
            </div>
            </Link>
            <Link to="/Monitor">
            <div class="articulos">
            <h1>Monitor</h1>
            <img src={foto1} class="fotoArt"alt="foto teclado"/>
            </div>
            </Link>
        </div>
            <Switch>
            <div id="art2">
                <div class="articulos">
            <Route path="/Telcado">
            <Teclado/>
            </Route>
            </div>
            <div class="articulos">
            <Route path="/Mouse">
            <Mouse/>
            </Route>
            </div>
            <div class="articulos">
            <Route path="/Monitor">
            <Monitor/>
            </Route>
            </div>
        
        </div>
        </Switch>
        </Router>
        </>
    )
}
export default Per

