import React from "react";

//style 
import s from './CardsDisplay.module.css';

//components
import Card from "./Card";

//utils
import { useSelector } from "react-redux";


export default function CardsDisplay () {
    const properties = useSelector((state) => state.properties);
    //console.log(properties);
    
    return (
        <div className={s.mainContainer}>
            {properties.length > 0
                ? properties.map((p) => <Card property ={p} key={p.public_id} />)
                : "cargando ..."
            }
        </div>
    )
}