import HomePage from '../../page'


export default function Docs({
    params,} : {params:{
        slug: String[];
    };
}) {
    if (params.slug?.length === 2 ){
        return(
            <h1>Page 2</h1>
        )
    }else if (params.slug?.length === 1){
        return (
            <h1>Page 1</h1>
        )
    }
    return (
            <HomePage />
    )
}