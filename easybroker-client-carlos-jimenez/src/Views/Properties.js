import React from "react";

//utils

//styles
import s from './Properties.module.css'

//components
import CardsDisplay from "../components/CardsDisplay";
import Pagination from "../components/Pagination";

export default function Properties () {

    return (
        <div className={s.mainContainer}>
            <div className={s.PropInfo}>
                <p>Propiedades publicadas.</p>
            </div>
            <div>
                <CardsDisplay />
                <Pagination />
            </div>
        </div>
    )
}