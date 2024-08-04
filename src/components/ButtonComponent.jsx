export default function ButtonComponent({texto, color}){
    const misEstilos ={
        backgroundColor:color,
        border:0,
        borderRadius:5,
        fontSize:25,
        pointer:true,
    }

    const handleClick = () => {
        alert(`Estas en la sección ${texto}.`)
    }

    return(
        <>
        <button onClick = {handleClick} style={misEstilos}>{texto}</button>
        </>
    )
}