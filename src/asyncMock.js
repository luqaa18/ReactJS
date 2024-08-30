export const getBooks = async () => {
    // const respuesta = await fetch ('https://fakestoreapi.com/products');
    const respuesta = await fetch ('../public/bicycles.json');
    const data = await respuesta.json();
    return data.bicicletas;
    //Este data recibe toda la información que esta en el json que se le pasa
}
