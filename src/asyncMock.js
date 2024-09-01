export const getBikes = async () => {
    const respuesta = await fetch ('/bicycles.json');
    const data = await respuesta.json();
    return data.bicicletas;
}

export const getBike = async (id) => {
    const respuesta2 = await getBikes();
    return respuesta2.find(prod => prod.id == id);
}

export const getCategory = async (category) => {
    const respuesta3 = await getBikes();
    return respuesta3.filter(prod => prod.category === category)
}