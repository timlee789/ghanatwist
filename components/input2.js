import React from 'react';
import {useRef, useState} from 'react';
import cla from './input.module.css'


function Input(props) {
   
    const refName = useRef();
    const refTel = useRef();
    const refEmail = useRef();

    async function submitHandler(event){
        event.preventDefault();
        const enteredName = refName.current.value;
        const enteredTel = refTel.current.value;
        const enteredEmail = refEmail.current.value;
        const inputData = {
            name: enteredName,
            tel: enteredTel,
            email: enteredEmail,
        }
        props.addEnterData(inputData);
       
        const body = new FormData();
        document.getElementById('name').value='';
        document.getElementById('tel').value='';
        document.getElementById('email').value='';
    }

    return (
        <div className={cla.formbox}>
           
            <form onSubmit={submitHandler}>
                 <div className={cla.form1}>
                    <input type='text' id='name' ref={refName} placeholder='Name' className={cla.inputbox}></input>
                </div>
                <div className={cla.form1}>
                    <input type='text' id='tel' ref={refTel} placeholder='WhatsApp-Tel' className={cla.inputbox}></input>
                </div>
                
                <div className={cla.form1}>
                    <input type='text' id='email' ref={refEmail} placeholder='E-mail' className={cla.inputbox}></input>
                </div>
                <div >
                    <button className={cla.btn}>Submit</button>
                </div>
              
            </form>
        </div>
    )
}

export default Input