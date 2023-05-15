let listaCompras = prompt("Ingrese un número del 1 al 4")

while (listaCompras !== "ESC") {
    switch (Number(listaCompras)) {
        case 1:
            alert("Papa")
            break;
        case 2:
            alert("Tomate")
            break;
        case 3:
            alert("Carne")
            break;
        case 4:
            alert("Pollo")
            break;
        default :
            alert("No se encuentra dentro de la lista")
            break;
    }
    listaCompras = prompt("Ingrese un número del 1 al 4")
}
