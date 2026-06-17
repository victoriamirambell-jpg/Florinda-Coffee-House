const productos = [
    "Flat White Flo",
    "Carrot Cake",
    "Capuccino",
    "Cheesecake de Pistacho",
    "Limonada Frutos Rojos"
];

function recomendarProducto() {

    const nombre =
        document.getElementById("nombre").value;

    const indice =
        Math.floor(Math.random() * productos.length);

    document.getElementById("mensaje").innerText =
        "Hola " + nombre +
        ". Hoy te recomendamos: " +
        productos[indice];
}





function verHorario() {

    const hora = new Date().getHours();

    if (hora >= 8 && hora < 20) {

        document.getElementById("estado").innerText =
            "¡Sí! Estamos abiertos. Te esperamos en Florinda.";

    } else {

        document.getElementById("estado").innerText =
            "En este momento estamos cerrados. Nuestro horario es de 8:00 a 20:00.";

    }

}