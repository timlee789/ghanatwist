
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

      const response = await fetch('/api/posts',
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
        <meta name="viewport" content="width=1150"/>
        <title>Ghana Braid Evènman kado</title>
        <meta name="description" content="Ghana Braid Evènman kado" />
        <link rel="image_src" href="https://bijouxhair.com/tim//ad/xpressionhead.jpg" />     
        <meta property="og:title" content="Ghana Braid Evènman kado" />    
        <meta property="og:image" content="https://bijouxhair.com/tim//ad/xpressionhead.jpg"/>
        <meta property="og:description" content="Ghana Braid Evènman kado"/>
        <meta property="og:site_name" content="Beauty Elements"/> 
    </Head>
      <main className={cla.body}>
        <center>
       <h2 className={cla.formback2}>Beauty Elements Evènman kado</h2>
      
      <Image src='https://bijouxhair.com/tim/ad/xpressionhead.jpg' alt='banner' width='600px' height='713px'/>
       <div className={cla.formback}>
       <form onSubmit={submitHandler}>
         <input type='text' id='name' ref={refName} placeholder='Non' className={cla.inputbox} required /><br/>
         <input type='text' id='tel' ref={refTel} placeholder='Telefòn' className={cla.inputbox} required /><br/>
         <input type='text' id='email' ref={refEmail} placeholder='imel' className={cla.inputbox} required />
         <fieldset  className={cla.fieldset}>
			<legend>Chwazi atik kado ou vle a</legend>
			<label className={cla.container}>Xpression 84 x 5Pake 
				<input  type="checkbox" value='xpression' checked={Radio ==='xpression'} onChange={(e) =>setRadio(e.target.value)} name='prize' className={cla.inputbox}/>       
        <span className={cla.checkmark}></span>
			</label>
      <label className={cla.container}>3X Ghana Braid 60 x 5Pake
				<input  type="checkbox" value='ghanabraid50' checked={Radio ==='ghanabraid50'} onChange={(e) =>setRadio(e.target.value)} name='prize' className={cla.inputbox} />       
        <span className={cla.checkmark}></span>
			</label>
     
		</fieldset>
    <fieldset  className={cla.fieldset}>
    <legend>Estetisyen ?</legend>
          <label className={cla.container}>Mwen se yon èstetisyen
              <input  type="radio" value='beautician' checked={Check ==='beautician'} onChange={(e) =>setCheck(e.target.value)} name='beautician' className={cla.inputbox} />       
              <span className={cla.checkmark}></span>
            </label>
          <label className={cla.container}>Mwen pa yon èstetisyen
              <input  type="radio" value='nobeautician' checked={Check ==='nobeautician'} onChange={(e) =>setCheck(e.target.value)} name='beautician' className={cla.inputbox} />       
              <span className={cla.checkmark}></span>
            </label>
      </fieldset>
         <button className={cla.btn}>Soumèt</button>
       </form>
       </div>
       <div className={cla.textbox}>
       <h3>Pou jwenn kado a gratis Cheve: </h3>
       <ul className={cla.ula}>
         <li>Ranpli enskripsyon an pi wo a.</li>
         <li>Chwazi alonj ou vle anba a.</li>
         <li>Swiv @Bijouxhairusa</li>
         <li>Chwazi 20 ganyan chak mwa.</li>
       </ul>
         
       </div>
       </center>
       <div className={cla.phototitle}>Kado Galon</div>
       <div className={cla.album}>
       <div className={cla.box} >
          <Image src='https://bijouxhair.com/tim/ad/xpression1.jpg' alt='dlfd' className={cla.image} width='600px' height='720'/>
           <center className={cla.name}>Xpression Braid 84</center>
        </div>
        </div>
        <div className={cla.album} >
        <div className={cla.box} >
          <Image src='https://bijouxhair.com/tim/ad/xpression2.jpg' alt='dlfd' className={cla.image}  width='600px' height='720'/>
           <center className={cla.name}>Xpression Braid 84</center>
        </div>
        </div>
        <div className={cla.album} >
        <div className={cla.box} >
          <Image src='https://bijouxhair.com/tim/landing/headbanner.jpg' alt='dlfd' className={cla.image} width='600px' height='422px' />
           <center className={cla.name}>3X Ghana Braid</center>
        </div>
        </div>
        <div className={cla.album} >
        <div className={cla.box} >
          <Image src='https://bijouxhair.com/tim/landing/3xghana1.jpg' alt='dlfd' className={cla.image} width='600' height='776px'/>
           <center className={cla.name}>3X Ghana Braid</center>
        </div>
        </div>
        <div className={cla.album} >
        <div className={cla.box} >
        <iframe width="590" height="338" src="https://www.youtube.com/embed/xN0WFhVQxV0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
           <center className={cla.name}>3X Ghana Braid</center>
        </div>
        </div>
        <div className={cla.album} >
        <div className={cla.box} >
        <iframe width="590" height="338" src="https://www.youtube.com/embed/mnM5Noi_W7c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
           <center className={cla.name}>3X Ghana Braid</center>
        </div>
        </div>
        <div className={cla.album} >
        <div className={cla.box} >
        <iframe width="590" height="338" src="https://www.youtube.com/embed/uDyX878Q8mc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
           <center className={cla.name}>3X Ghana Braid</center>
        </div>
       </div>
       <div className={cla.album} >
        <div  className={cla.box} >
        <iframe width="590" height="338" src="https://www.youtube.com/embed/UQmoK6Zu36k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
           <center className={cla.name}>Xpression Braid 84</center>
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