import React from 'react'
import cla from '../styles/form.module.css';
function users({userdata}) {
  return (
    <div>
       
        <main>
        <center>
       <h2>Ghana Twist Texas Giveaway Event</h2>
      <img src='https://bijouxhair.com/tim/ad/mainbanner.jpg' alt='banner'/>
        <div >
        {userdata.map( data => (
               <div key={data.id} className={cla.userbox}>
              <div className={cla.user}> {data.name} </div>
              <div className={cla.user}>{data.tel}</div>
               <div className={cla.user}>{data.email}</div>
               <div className={cla.user}>{data.prize}</div>
               <div className={cla.user}>{data.beautician}</div>
               <div className={cla.user2}>{data.date}</div>
               </div>
            ))}
       </div>
       </center>
       
      </main>
      {/* <!-- FOOTER --> */}


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

export default users

export async function getServerSideProps() {
let response = await fetch('https://ghanatwist.com/api/texasevent')
let post = await response.json()
    return{
        props: {
            userdata:post.message.map(data => ({
                id: data._id.toString(),
                name: data.name,
                tel: data.tel,
                email: data.email,
                prize: data.prize,
                beautician: data.beautician,
                date: data.date
            }))
        }
    }
}