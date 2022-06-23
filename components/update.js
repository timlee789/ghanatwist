import React, { useState } from 'react';
import {useRouter} from 'next/router';
import cla from './update.module.css';
function Update(props) {

    const [updating, setUpdating] = useState(false);
    const [deleting, setDeleting] = useState(false);
   // const [id, setId] = useState(props.id)
    const [name, setName] = useState(props.name);
    const [tel, setTel] = useState(props.tel);
    const [email, setEmail] = useState(props.email);
    const [country, setCountry] = useState(props.country);
    const [image, setImage] = useState(props.image);
    const [createObjectURL, setCreateObjectURL] = useState(null);
    const router = useRouter();

     // Publish post
     const updatePost = async (id) => {
         console.log(id)
        // change publishing state
        setUpdating(true);

         // post structure
         let post = {
             id,
             name,
             tel,
             email,
             country,
             image,
         };

        try {
            // Update post
            await fetch('/api/posts', {
                method: 'PUT',
                body: JSON.stringify(post)
            });
            console.log(req.body)
            // reset the publishing state
            setUpdating(false);

            // reload the page
            return router.push(router.asPath);
        } catch (error) {
            // Stop publishing state
            return setUpdating(false);
        }
    };
    // Delete post
    const deletePost = async (id) => {
        //change deleting state
        setDeleting(true);

        try {
            // Delete post
            await fetch('/api/posts', {
                method: 'DELETE',
                body: id,
            });

            // reset the deleting state
            setDeleting(false);

            // reload the page
            return router.push(router.asPath);
        } catch (error) {
            // stop deleting state
            return setDeleting(false);
        }
    };

    function uploadToClient(event) {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
          }
    }
  return (
    <div className={cla.body}>
        <div className={cla.card}>
        <img src={props.image} alt="tt" width='120px' height='200px' objectFit='contain' />
        <div><input type='file' name='image' onChange={uploadToClient}/></div>
        <br /> 
        <div>Product Name:</div>
        <input  defaultValue={props.name} onChange={e => setName(e.target.value)} /><br/>
        <div>Price:</div>
        <input  defaultValue={props.price} onChange={e => setTel(e.target.value)} /><br/>
        <div>Description:</div>
        <input  defaultValue={props.desc} onChange={e => setEmail(e.target.value)} /><br/>
        {/* <input defaultValue={props.image} onChange={e => setImage(e.target.value)} /> <br/> */}
       
        <button type="button" onClick={() => updatePost(props.id)}>
            {updating ? 'Updating' : 'Update'}
        </button>
        <button type="button" onClick={() => deletePost(props.id)}>
            {deleting ? 'Deleting' : 'Delete'}
        </button>
 
    </div>
</div>
  )
}

export default Update;
