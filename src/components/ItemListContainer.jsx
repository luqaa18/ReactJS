export default function ItemListContainer({greeting}){

    const greetingStyle = {
        fontSize:35,
        fontFamily:'Calibri',
        fontWeight:'bold',
        color:'orange',
    }

    return(
        <>
        <div>
            <p style= {greetingStyle}>{greeting}</p>
        </div>       
        </>
    )
}