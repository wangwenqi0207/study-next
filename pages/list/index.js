import Link from 'next/link'
import { useRouter } from 'next/router';

let arr =['新闻1','新闻2','新闻3']

const List = ()=>{
    const router = useRouter();
    const fn = ()=>{
        router.push('/list/[id]','list/1')
    }
    return (
        <>
            <h2>list 列表</h2>
            <hr/>
            {
                arr.map((item,index)=>{
                    return(
                        <div key={item} className='list'>
                            <Link href='/list/[id]' as={`/list/${item}`}  ><a>新闻列表{item}</a></Link>
                            <style jsx>
                            {
                                `
                                .list{
                                    margin-bottom:10px;
                                }
                                `
                            }
            </style>
                        </div>    
                    )
                })
            } 
            <hr/>
            <button onClick={fn}>路由跳转详情页面</button>         
        </>
    )
}

export default List