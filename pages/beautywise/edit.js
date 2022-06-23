import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Update from '../../components/update'




export default function Edit({myData}) {


  return (
    <div className={styles.container}>

      <main className={styles.mainedit}>
      {myData.length === 0 ? (
        <h2>No Data</h2>
      ) : (
        <div className={styles.upadtemain}>
        {myData.map((post) =>(
          <Update
            key={post.id}
            id={post.id}
            name={post.pname}
            image={post.image} />
        ))}
        </div>
      )}
      </main>
    </div>
  )
  
}

export async function getStaticProps() {
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;

  let response = await fetch(`https://ghanabraid.com/api/beautywise`)
  let mydata = await response.json();
console.log(mydata)
  return {
    props: {
      myData: mydata.message.map(data => ({
        id: data._id.toString(),
        pname: data.pname,
        image: data.image,
      }))
    }
  }
}