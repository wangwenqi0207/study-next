import { useRouter } from 'next/router';

const ListItem = ()=>{
    const router = useRouter();
    const { id } =router.query
    return (
        <>
            <h2>{id}</h2>
        </>
    )
}

export default ListItem

export const getStaticPaths = async ()=>{
    return {
        paths:[],
        fallback:false
    }
}

export const getStaticProps = async ()=>{
    return {
        props:{}
    }
}