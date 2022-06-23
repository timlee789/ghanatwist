import styles from '../../styles/Home.module.css'
import PList from '../../components/plist';
import Image from 'next/image';
import Video from '../../components/video';
import Input from '../../components/input';

export default function Home({mydata}) {

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
     
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <div>
         <div  >
            <div><Image src='https://bijouxhair.com/tim/landing/head-beautywise.jpg' width={720} height={288} className={styles.head} alt='head'/></div>
        </div>
        <div >
            <Image src='https://bijouxhair.com/tim/landing/3xghanabanner2.jpg' width={720} height={490} alt='banner' />
        </div>
      
        <div className={styles.title}>Our Hot Items for April</div>
    </div>
            <div className={styles.maincard} >       
                {mydata.map((data) => (
                  <PList 
                    key={data.id}
                    image={data.image}
                    pname={data.pname}
                    price={data.price}
                    desc={data.desc}
                    />
                ))}               
            </div>
            <div>
            <div className={styles.title}>Hot Items Videos</div>
            <Video />
          
            </div>
      </main>
    </div>
  )
}
export async function getServerSideProps() {
  let response = await fetch('https://ghanabraid.com/api/beautywise');
  let post = await response.json();

  return {
    props: {
      mydata:post.message.map(data => ({
        id: data._id.toString(),
        pname: data.pname || null,
        price: data.price || null,
        image: data.image,
        desc: data.desc || null,
      }))
    }
  }
}