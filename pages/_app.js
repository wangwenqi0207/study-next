import '../styles/globals.css'  //全局引入css

//根组件
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
