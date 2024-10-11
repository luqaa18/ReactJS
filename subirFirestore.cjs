const admin = require('firebase-admin');
const fs = require('fs');

// Ruta al archivo de credenciales del admin SDK
//ir a configuracion de proyecto en firebase => cuentas de servicio=> generar nueva clave privada
//descargar el json y guardarlo en la carpeta de proyecto.
//generar un script que tenga ESTE CUERPO QUE APARECE ACA, modificar la ruta de aca abajo para que coincida con el json descargado de firebase

const serviceAccount = require('./coderhouse-ecommerce-4fd8e-firebase-adminsdk-ellqo-d20ddc6d05.json');

// Inicializar la app de Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Leer el archivo JSON local
const productos = JSON.parse(fs.readFileSync('./public/bicycles.json', 'utf8'));

// Función para subir los datos a Firestore
const uploadData = async () => {
  const collectionRef = db.collection('bicicletas'); // Cambia "productos" por el nombre de tu colección

  for (const producto of productos) {
    // Puedes usar 'producto.id' como ID del documento o dejar que Firestore lo genere automáticamente
    await collectionRef.doc(producto.id).set(producto); // Asume que el JSON tiene un campo 'id'
  }

  console.log('Datos subidos a Firestore');
};

uploadData().catch(console.error);


//SI EL DOCUMENTO TIENE REQUIRE, CAMBIAR EL FORMATO DEL ARCHIVO A .CJS
//UNA VEZ HECHO TODO ESO, EN LA TERMINAL ESCRIBIR: " node nombreDelScriptCreado.cjs"
// Esperar a que se suba a firestore. Tener en cuenta que los id en firestore tiene que ser de tipo string, asi que revisar el json.