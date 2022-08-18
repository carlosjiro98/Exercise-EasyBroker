import React from "react";

//styles
import s from './Main.module.css';

export default function Main ({ children }) {
    return (
        <div className={s.mainContainer}>
            {children}
        </div>
    )
}