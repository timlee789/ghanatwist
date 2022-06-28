import React from 'react'
import cla from '../styles/form.module.css';
function Thanks() {
  return (
    <div>
         
        <main>
        <center>
       <h2>Ghana Twist Braid Giveaway Event</h2>
      <img src='https://bijouxhair.com/tim/ad/ADimage.jpg' alt='banner'/>
        <div className={cla.thanks}>
       Thank you for Participating<br/>
        We will announce the winners on July 12  2022
       <br/> 
       </div>
       </center>
       
      </main>
    


      <div>
      <div className={cla.footer}>
        <div className={cla.footimage}>
        <a href="https://bijouxhair.com/"
          ><img alt=""  src="https://bijouxhair.com/catalog/webmain/beautyelementlogo.jpg" /></a>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Thanks