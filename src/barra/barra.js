import React from "react";
import { Link } from 'react-router-dom';

const barra =()=>{
    return(
    <nav className="navegation">
        <ol>
            <Link to="home" className="Li"><li>home</li>
            </Link>
            <Link to="perifericos" className="Li"><li>perifericos</li>
            </Link>
            <Link to="sofware" className="Li"><li>sofware</li>
            </Link>
        </ol>
    </nav>
    )
}

export default barra