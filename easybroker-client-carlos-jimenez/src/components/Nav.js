import React from "react";

//style 
import s from './Nav.module.css'

//utils
import { NavLink } from 'react-router-dom'

//components
/* import Search from "./Search"; */

export default function Nav () {
    return (
        <div className={s.NavContainer}>
            <div className={s.NavContainer__info}>

                <h1>YouProperties</h1>

                <nav>
                    <NavLink to='/'>Propiedades</NavLink>
                    <NavLink to='/acerca'>Acerca</NavLink>
                    {/* <Search /> */}
                </nav>
                

            </div>
        </div>
    )
}
