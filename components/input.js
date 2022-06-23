import React from 'react';
import {useRef, useState} from 'react';
import cla from './input.module.css'


function Input(props) {
    const [image, setImage] = useState(null);
    
    const [createObjectURL, setCreateObjectURL] = useState(null);
   
    const refName = useRef();
    const refPrice = useRef();
    const refDesc = useRef();

    async function submitHandler(event){
        event.preventDefault();
        const enteredName = refName.current.value;
        const enteredPrice = refPrice.current.value;
        const enteredDesc = refDesc.current.value;
        const inputData = {
            name: enteredName,
            tel: enteredPrice,
            email: enteredDesc,
            image: './uploads/'+image.name,
        }
        props.addEnterData(inputData);
       
        const body = new FormData();
     
        body.append("file", image);    
        const response = await fetch("/api/uploads", {
        method: "POST",
        body
        });

        document.getElementById('name').value='';
        document.getElementById('price').value='';
        document.getElementById('desc').value='';
        
    }
    function uploadToClient(event) {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
          }
    }
  
    

    return (
        <div className={cla.formbox}>
           
            <form onSubmit={submitHandler}>
                 <div className={cla.form1}>
                    <input type='text' id='name' ref={refName} placeholder='Product Name' className={cla.inputbox}></input>
                </div>
                <div className={cla.form1}>
                    <input type='text' id='tel' ref={refPrice} placeholder='Price' className={cla.inputbox}></input>
                </div>
                
                <div className={cla.form1}>
                    <input type='text' id='email' ref={refDesc} placeholder='Description' className={cla.inputbox}></input>
                </div>
               
              
                <div>
                    <h4> Upload Photo</h4>
                    <input type='file' name='myImage' onChange={uploadToClient} /><br/>
                   
                   
                    {/* <button type='submit'  onClick={uploadToServer}>Send to server</button> */}
                </div>

                <div >
                    <button className={cla.btn}>Submit</button>
                </div>
              
            </form>
        </div>
    )
}

export default Input