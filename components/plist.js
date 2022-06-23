import React from 'react'
import styles from './compo.module.css';
import Image from 'next/image';
import Link from 'next/link'
function plist(props) {
    
  return (
    <div>
         <div>
              
              <div className={styles.maincard}>
                   
                <div>
                  <Link href={props.image} >
                  <Image src={props.image} alt='dfsl' width={350} height={550} className={styles.image}/>
                  </Link>
                </div>
                
                <div className={styles.price} >{props.price}</div>
                <div className={styles.desc} >{props.desc}</div>
                <div className={styles.ptitle}>{props.pname}</div>
              </div>
            
            </div>
    </div>
  )
}

export default plist