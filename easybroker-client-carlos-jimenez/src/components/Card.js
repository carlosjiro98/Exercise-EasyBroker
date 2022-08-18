import React from "react";
import { useDispatch } from 'react-redux';
import { getProperty, resetProperty } from '../store/actions';
import { useNavigate } from 'react-router-dom';

//styles
import s from './Card.module.css';
import sni from '../img/sni.png'

export default function Card ({property}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const p = property;
    function handleOnClick () {
        dispatch(resetProperty());
        dispatch(getProperty(p.public_id));
        window.scrollTo(0,0);
        navigate("../detalle");
    }
    return (
        <div className={s.mainContainer} onClick={handleOnClick}>
            <div className={s.img__container}>
                <img src={p.title_image_thumb || sni} alt='thumbnail' />
            </div>
            <div className={s.info__container}>
                <span id={s.id}>{p.public_id}</span>

                <span id={s.title}>{p.title}</span>

                <span id={s.location}><b>Locación:</b> {p.location}</span>

                <span id={s.type}><b>Tipo:</b> {p.property_type}</span>
            </div>
        </div>
    )
}