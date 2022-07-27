import { withRouter } from "next/router"
import home from './css/home.module.css'  //模块级别css

const Homes = ({router})=> {
  console.log(router.query,'query')
    return (
      <div className={home.color}>
        home
      </div>
    )
  }

export default withRouter(Homes)