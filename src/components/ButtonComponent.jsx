export default function ButtonComponent({texto, color}){
    const misEstilos ={
        backgroundColor:color,
        border:0,
        borderRadius:5,
        fontSize:25,
        pointer:true,
    }

    return(
        <>
        <button style={misEstilos}>{texto}</button>
        </>
    )
}