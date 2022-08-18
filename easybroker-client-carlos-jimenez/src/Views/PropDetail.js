import React, { useState } from "react";  
import chat from '../img/chat.png';
import sni from '../img/sni.png';
import { useDispatch, useSelector } from 'react-redux'
import { sendForm } from '../store/actions'


//styles 
import s from './PropDetail.module.css';

export default function PropDetail () {
    const dispatch = useDispatch();
    let p = useSelector((state) => state.property);

    let [formCont, setFormCont] = useState({
        name: "",
        phone: "",
        email: "",
        property_id: "",
        message: "",
        source: "youProperties.com"
    })

    function handleOnChange (e) {
        setFormCont((prevState)=>{
            return {
                ...prevState,
                [e.target.name]: e.target.value,
                property_id: p.length === 0 ? "noID": p.public_id 
            }
        })
    }

    function handleOnSubmit (e) {
        e.preventDefault();
        dispatch(sendForm(formCont))
        alert("El formulario ha sido enviado")
    }


    return (
        <div className={s.mainContainer}>
            <div className={s.detailContainer}>
                <div className={s.imgContainer}>
                    <img src={p.length === 0 ? sni : p.property_images[0].url} alt="property"/>
                </div>
                <div className={s.infoContainer}>
                    <div className={s.info}>
                        <span id={s.title}>{p.length === 0 ? "cargando...": p.title }</span>
                        <span><b>Id:</b> {p.length === 0 ? "cargando...": p.public_id }</span>
                        <span><b>Descripción:</b><br/><br/>{p.length === 0 ? "cargando..." : p.description}</span>
                        <span><b>Tipo:</b> {p.length === 0 ? "cargando..." : p.property_type}</span>
                        <span><b>Locacion:</b> {p.length === 0 ? "cargando..." : p.location.name}</span>
                    </div>
                </div>
            </div>
            <div className={s.formTitle}>
                <h1>Formulario de contacto</h1>
                <p>Nos encantaria ponernos en contacto contigo y resolver tus dudas,
                    si deseas atencion personalizada porfavor rellena el formilario de contacto
                </p>
            </div>
            
            <div className={s.formContainer}>
                
                <div className={s.contactMess}>
                    <img src={chat} alt="chat"/>
                </div>
                
                <form onSubmit={handleOnSubmit} className={s.form}>
                    <label>Nombre:</label>
                    <input onChange={handleOnChange} type='text' name='name' placeholder="Nombre y Apellido" />
                    <label>Telefono:</label>
                    <input onChange={handleOnChange} type='text' name='phone' placeholder="Numero de contacto"/>
                    <label>Correo:</label>
                    <input onChange={handleOnChange} type='email' name='email' placeholder="Email"/>
                    <label>Mensaje:</label>
                    <input onChange={handleOnChange} type='text' name='message'  placeholder="Mensaje"/>
                    <button>Enviar</button>
                </form>
            </div>
        </div>
    )
}

/* 

Public ID
● Title
● Description
● The first image (Optionally add a slideshow with all photos)*
● Property type
● Location
● A contact form to create new leads


    Name
● Phone
● Email
● Message
*/