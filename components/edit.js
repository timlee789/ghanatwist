import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Update from '../components/update'
import { useSession, signIn, signOut } from "next-auth/react"



export default function Edit({myData}) {
  const [session, loading] = useSession();

  return (
    <div className={styles.container}>

      <main className={styles.main}>
      {myData.length === 0 ? (
        <h2>No Data</h2>
      ) : (
        <div>
        {myData.map((post) =>(
          <Update
            key={post.id}
            id={post.id}
            name={post.name}
            tel={post.tel}
            email={post.email}
            country={post.country}
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

  let response = await fetch(`http://localhost:3000/api/posts`)
  let mydata = await response.json();
console.log(mydata)
  return {
    props: {
      myData: mydata.message.map(data => ({
        id: data._id.toString(),
        name: data.name,
        tel: data.tel,
        email: data.email,
       country: data.country,
        image: data.image,
      }))
    }
  }
}