import react from "react";

const CasePage = (props)=>{
    console.log(props,'props')
    return (
        <div>
           {
            props && props.daily && props.daily.map(item=>{
                return(
                    <ul key={item.fxDate}>
                        <li>{item.fxDate}</li>
                        <li>{item.moonPhase}</li>
                        <li>{item.textDay}</li>
                        <style jsx>
                            {
                                `ul{
                                    display:flex;
                                }
                                li{
                                    list-style:none;
                                    margin-right:10px;
                                }
                                `
                            }
                        </style>
                    </ul>
                    
                )
            })
           }
        </div>
    )
}

export default CasePage

export const getServerSideProps = async()=>{
    let res = await fetch('https://devapi.qweather.com/v7/weather/3d?location=101010100&key=add1f2786be94382996838c3602f1926')
    let data = await res.json()
    return {
        props:data
    }
}