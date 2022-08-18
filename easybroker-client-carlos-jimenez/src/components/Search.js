import React from "react";

//styles
import s from './Search.module.css';

export default function Search () {
    return (
        <div className={s.mainContainer}>
            <form>
                <input type='text' placeholder='Busqueda por titulo...' />
                <button>Buscar</button>
            </form>
        </div>
    )
}