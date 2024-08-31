export default function CartWidget(){
    const imgStyle = {
        height: 50,
        width: 50,
    }

    return(
        <>
        <img style= {imgStyle} src="/shopping-cart.png" alt="shopping-cart" />
        <p style={{fontSize:16}}>3</p>
        </>
    )
}