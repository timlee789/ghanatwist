
import cla from '../styles/form.module.css';
import {useRef, useState} from 'react';
import {useRouter} from 'next/router'
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  
     const refName = useRef();
     const refTel = useRef();
     const refEmail = useRef();
    
     const router = useRouter()
     const [Radio, setRadio] = useState();
     const [Check, setCheck] = useState();
     async function submitHandler(event) {
       event.preventDefault();
       const enteredName = refName.current.value;
       const enteredTel = refTel.current.value;
       const enteredEmail = refEmail.current.value;
       const enteredPrize = Radio;
       const enteredCheck = Check;
      
       const inputData ={
         name: enteredName,
         tel: enteredTel,
         email: enteredEmail,
         prize: enteredPrize,
         beautician: enteredCheck,
         date: Date(),
       }
       console.log(inputData);
       addDataHandler(inputData)

        document.getElementById('name').value='';
        document.getElementById('tel').value='';
        document.getElementById('email').value='';
        document.getElementsByName('prize').value='';
        document.getElementsByName('beautician').value='';
     }
     async function addDataHandler(inputData) {

      const response = await fetch('/api/texasevent',
          {
              method: 'POST',
              body: JSON.stringify(inputData),
              headers: {
                  'Content-type': 'application/json'
              }
          })
      const data = await response.json();
      router.push('/thanks')
  }

  return (
    <div className={cla.main}>
       <Head>  
       <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Ghana Twist Giveaway Event</title>
        <meta name="description" content="Ghana Twist Giveaway Event" />
        <link rel="image_src" href="https://bijouxhair.com/tim//ad/butterfly_mainimage.jpg" />     
        <meta property="og:title" content="Ghana Twist Giveaway Event" />    
        <meta property="og:image" content="https://bijouxhair.com/tim//ad/butterfly_mainimage.jpg"/>
        <meta property="og:description" content="Ghana Twist Giveaway Event"/>
        <meta property="og:site_name" content="Beauty Elements"/> 
    </Head>
      <main className={cla.body}>
        <center>
       <h2 className={cla.formback2}>Beauty Elements Giveaway Event</h2>
      
      <Image src='https://bijouxhair.com/tim/ad/butterfly_mainimage3.jpg' alt='banner' width='600px' height='821px'/>
       <div className={cla.formback}>
       <form onSubmit={submitHandler}>
         <input type='text' id='name' ref={refName} placeholder='Name' className={cla.inputbox} required /><br/>
         <input type='text' id='tel' ref={refTel} placeholder='Phone Number' className={cla.inputbox} required /><br/>
         <input type='text' id='email' ref={refEmail} placeholder='email' className={cla.inputbox} required />
         <fieldset  className={cla.fieldset}>
			<legend>Which Hair do you prefer</legend>
			<label className={cla.container}>Butterfly Locs 24 inch 
				<input  type="checkbox" value='butterflylocs' checked={Radio ==='butterflylocs'} onChange={(e) =>setRadio(e.target.value)} name='prize' className={cla.inputbox}/>       
        <span className={cla.checkmark}></span>
			</label>
      <label className={cla.container}>Passion Twist 24 inch
				<input  type="checkbox" value='passiontwist' checked={Radio ==='passiontwist'} onChange={(e) =>setRadio(e.target.value)} name='prize' className={cla.inputbox} />       
        <span className={cla.checkmark}></span>
			</label>
     
		</fieldset>
    <fieldset  className={cla.fieldset}>
    <legend>Beautician ?</legend>
          <label className={cla.container}>I am a beautician.
              <input  type="radio" value='beautician' checked={Check ==='beautician'} onChange={(e) =>setCheck(e.target.value)} name='beautician' className={cla.inputbox} />       
              <span className={cla.checkmark}></span>
            </label>
          <label className={cla.container}>I am not a beautician.
              <input  type="radio" value='nobeautician' checked={Check ==='nobeautician'} onChange={(e) =>setCheck(e.target.value)} name='beautician' className={cla.inputbox} />       
              <span className={cla.checkmark}></span>
            </label>
      </fieldset>
         <button className={cla.btn}>Submit</button>
       </form>
       </div>
       <div className={cla.textbox}>
       <h3>To get the free giveaway Ghana Twist Hair: </h3>
       <ul className={cla.ula}>
         <li>Fill out the registration above.</li>
         <li>Select the Ghana Twist Hair you want bellow.</li>
         
         <li>5 winners are selected every 2 weeks.</li>
         <li>The hair (3 packs each winner) will be sent by mail.</li>
       </ul>
         
       </div>
       </center>
       <div className={cla.phototitle}>Ghana Twist </div>
       <div className={cla.album}>
       <div className={cla.box} >
          <Image src='https://bijouxhair.com/tim/ad/butterfly2.jpg' alt='dlfd' className={cla.image} width='600px' height='720'/>
          
        </div>
        </div>
        <div className={cla.album} >
        <div className={cla.box} >
          <Image src='https://bijouxhair.com/tim/ad/passiontwist2.jpg' alt='dlfd' className={cla.image}  width='600px' height='720'/>
          
        </div>
        </div>
        
        <div className={cla.album} >
        <div className={cla.box} >
        <iframe width="600" height="280" src="https://www.youtube.com/embed/zHF94OrbGZs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
           <center className={cla.name}>Ghana Butterfly Locs</center>
        </div>
        </div>
        <div className={cla.album} >
        <div className={cla.box} >
        <iframe width="600" height="280" src="https://www.youtube.com/embed/HxiXwmNJ8Kw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
           <center className={cla.name}>Ghana Butterfly Locs</center>
        </div>
        </div>
        <div className={cla.album} >
        <div className={cla.box} >
        <iframe width="600" height="280" src="https://www.youtube.com/embed/BJN6GuMt4Qc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
           <center className={cla.name}>Ghana Butterfly Locs</center>
        </div>
       </div>
       <div className={cla.album} >
        <div  className={cla.box} >
        <iframe width="600px" height="280" src="https://www.youtube.com/embed/hXoOTDoaLvc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
           <center className={cla.name}>Ghana Passion Tiwst</center>
        </div>
        </div>
       {/* <div className={cla.phototitle}>Giveaway Wigs</div>
       <div className={cla.album}>
       {landingdata.map(data => (
        <div key={data.id} className={cla.box} >
          <img src={data.image} alt='dlfd' className={cla.image} />
           <center className={cla.name}> {data.name}</center>
        </div>
       ))} */}
       
       <div className={cla.footer}>
        <div className={cla.footimage}>
        <a href="https://bijouxhair.com/" target='_blank' rel="noreferrer"
          ><img alt=""  src="https://bijouxhair.com/catalog/webmain/beautyelementlogo.jpg" /></a>
      </div>
      </div>
     
      </main>

      {/* <!-- FOOTER --> */}


  
</div>
  )
}

// export async function getStaticProps(){
 
//   const client = await MongoClient.connect(
//           `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@clustertim.koved.mongodb.net/Landing?retryWrites=true&w=majority`
//           );
//   const db = client.db();
//   const myCollection = db.collection('insta-event');
//   const products = await myCollection.find({}).toArray(); 
// return{
//   props: {
//     landingdata: products.map(meetup => ({
//       id: meetup._id.toString(),
//       image: meetup.image || null,
//       name: meetup.name
//     })),
//   }
//  }
  
// }