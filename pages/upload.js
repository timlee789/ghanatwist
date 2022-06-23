import styles from '../styles/Home.module.css'
import PList from '../components/plist';
import Input from '../components/input';
import {MongoClient} from 'mongodb'; 
import { useRouter } from 'next/router'


export default function Home({mydata}) {
  const router = useRouter();
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
      router.push('/gallery')
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <Input addEnterData={addDataHandler}/>
      </main>
    
    </div>
  )
}
export async function getServerSideProps() {

  const MONGODB_URI = process.env.MONGODB_URI;
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db();
  const post = await db
                    .collection('aa')
                    .find()
                    .sort({ published: -1})
                    .toArray()
  client.close;
  return {
    props: {
      mydata:post.map(data => ({
        id: data._id.toString(),
        pname: data.pname || null,
        price: data.price || null,
        image: data.image|| null,
        desc: data.desc || null,
      }))
    }
  }
}