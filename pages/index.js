import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main >
     <h1>Cookies</h1>
     <button type='button'onClick={()=>{
       cookie.set("token","ABCD",{expires: 1/24})
     }}></button>

    </main>
  )
}
