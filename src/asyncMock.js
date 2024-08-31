// const bicicletas = [
//         {
//             id: 1,
//             name: "875 Madison RS Proteam Black Glossy",
//             brand: "Madison",
//             category: "Fixed Gear",
//             price: 500,
//             image: "./img/fixie/875-MADISON-RS-PROTEAM-BLACK-GLOSSY.jpg"
//         },
//         {
//             id: 2,
//             name: "Aventon Mataro midnight blue",
//             brand: "Aventon",
//             category: "Fixed Gear",
//             price: 1500,
//             image: "./img/fixie/aventon mataro midnight blue.jpeg"
//         },
//         {
//             id: 3,
//             name: "Aventon Mataro white",
//             brand: "Aventon",
//             category: "Fixed Gear",
//             price: 800,
//             image: "./img/fixie/aventon mataron white.jpeg"
//         },
//         {
//             id: 4,
//             name: "BLB La Piovra atk",
//             brand: "BLB",
//             category: "Fixed Gear",
//             price: 1000,
//             image: "./img/fixie/blb la piovra atk.jpeg"
//         },
//         {
//             id: 5,
//             name: "BLB Viper Pro",
//             brand: "BLB",
//             category: "Fixed Gear",
//             price: 1400,
//             image: "./img/fixie/blb viper pro.jpeg"
//         },
//         {
//             id: 6,
//             name: "Cinelli Vigorelli al 2018",
//             brand: "Cinelli",
//             category: "Fixed Gear",
//             price: 3200,
//             image: "./img/fixie/cinelli bigorelli al 2018.jpg"
//         },
//         {
//             id: 7,
//             name: "Endorfina 2023 tig",
//             brand: "Baf",
//             category: "Fixed Gear",
//             price: 3000,
//             image: "./img/frames/fixie - endorfina 2023 tig.jpg"
//         },
//         {
//             id: 8,
//             name: "Endorfina Tig Burnout",
//             brand: "Baf",
//             category: "Fixed Gear",
//             price: 1200,
//             image: "./img/frames/fixie - endorfina tig burnout.jpg"
//         },
//         {
//             id: 9,
//             name: "Look Pista 895 Vitesse Carbon",
//             brand: "Look",
//             category: "Fixed Gear",
//             price: 1300,
//             image: "./img/frames/fixie - Look Pista 895 Vitesse Carbon.png"
//         },
//         {
//             id: 10,
//             name: "Mercuri Pista Eddy Merckx",
//             brand: "Mercuri",
//             category: "Fixed Gear",
//             price: 2800,
//             image: "./img/frames/fixie - mercuri.jpg"
//         },
//         {
//             id: 11,
//             name: "Sars Elite Pista Aluminio Con Horquilla Frente Cónico",
//             brand: "Sars",
//             category: "Fixed Gear",
//             price: 2200,
//             image: "./img/frames/fixie - Sars Elite Pista Aluminio Con Horquilla Frente Cónico.png"
//         },
//         {
//             id: 12,
//             name: "Twitter Smile Ruta Horquilla Carbono",
//             brand: "Twitter",
//             category: "Road",
//             price: 650,
//             image: "./img/frames/road - Twitter Smile Ruta Horquilla Carbono.png"
//         },
//         {
//             id: 13,
//             name: "Cannondale-CAAD-10-Black-Ink-Disc-S-1",
//             brand: "Cannondale",
//             category: "Road",
//             price: 900,
//             image: "./img/road/Cannondale-CAAD-10-Black-Ink-Disc-S-1.jpg"
//         },
//         {
//             id: 14,
//             name: "Cannondale-Caad-12-M-A-comision-1",
//             brand: "Cannondale",
//             category: "Road",
//             price: 2500,
//             image: "./img/road/Cannondale-Caad-12-M-A-comision-1.jpg"
//         },
//         {
//             id: 15,
//             name: "Giant-Contend-2-Tiagra-S-A-comision-1",
//             brand: "Giant",
//             category: "Road",
//             price: 1600,
//             image: "./img/road/Giant-Contend-2-Tiagra-S-A-comision-1.jpg"
//         },
//         {
//             id: 16,
//             name: "Wilier-0-SL-Ultegra-Di2-12v-S-0-Km.-Consignacion-1",
//             brand: "Willier",
//             category: "Road",
//             price: 550,
//             image: "./img/road/Wilier-0-SL-Ultegra-Di2-12v-S-0-Km.-Consignacion-1.jpg"
//         },
//         {
//             id: 17,
//             name: "Wilier-Garda-105-12v-Di2-S-0-Km.-Consignacion-1",
//             brand: "Willier",
//             category: "Road",
//             price: 700,
//             image: "./img/road/Wilier-Garda-105-12v-Di2-S-0-Km.-Consignacion-1.jpg"
//         },
//         {
//             id: 18,
//             name: "Wilier-Garda-105-mecanico-12v-XS-0-Km.-Consignacion-1",
//             brand: "Willier",
//             category: "Road",
//             price: 4000,
//             image: "./img/road/Wilier-Garda-105-mecanico-12v-XS-0-Km.-Consignacion-1.jpg"
//         }
//     ];


export const getBooks = async () => {
    // const respuesta = await fetch ('https://fakestoreapi.com/products');
    const respuesta = await fetch ('/bicycles.json');
    const data = await respuesta.json();
    return data.bicicletas;
    //Este data recibe toda la información que esta en el json que se le pasa
}

export const getBikes = async (id) => {
    const respuesta2 = await getBooks();
    return respuesta2.find(prod => prod.id == id);
}
