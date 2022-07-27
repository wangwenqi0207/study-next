import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router';
import Router from 'next/router'

export default function Home() {
  const [count,setCount]  = useState(0);
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Link href='/home' prefetch><button>href跳转</button></Link>
      <Link href='/home?name=123'><button>传参跳转</button></Link>
      <Link href={{pathname:'/home',query:{name:'456'}}}><button>query传参跳转</button></Link>
      <button onClick={()=>{router.push('/home')}}>useRouter跳转</button>
      <button onClick={()=>{Router.push('/home')}}>Router跳转</button>
      <div>
        <p>{count}</p>
        <button onClick={()=>{setCount(count+1)}}>加1</button>
      </div>

      <div>
      <button onClick={()=>{Router.push('/list')}}>跳转list页面</button>
      </div>
    </div>
  )
}


//prefetch 开启网页预加载
//router.prefetch 开启网页预加载