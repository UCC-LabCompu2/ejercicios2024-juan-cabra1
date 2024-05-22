/**
 * Descripción
 * @method convertirUnidades de la función
 * @param {String}id A
 * @param {number}value B
 */
function convertirUnidades(id, value) {
    //TODO: admitir numeros con coma
    if (isNaN(value)) {
        alert("Ingrese numeros unicamente");
        document.getElementById("metro").value = "";
        document.getElementById("pulgada").value = "";
        document.getElementById("pie").value = "";
        document.getElementById("yarda").value = "";
    } else if (id === "metro") {
        document.getElementById("pulgada").value = value * 39.3701;
        document.getElementById("pie").value = value * 3.28084;
        document.getElementById("yarda").value = value * 1.09361;
    } else if (id === "pulgada") {
        document.getElementById("metro").value = value * 0.0254;
        document.getElementById("pie").value = value * 0.0833333;
        document.getElementById("yarda").value = value * 0.0277778;
    } else if (id === "pie") {
        document.getElementById("metro").value = value * 0.3048;
        document.getElementById("pulgada").value = value * 12;
        document.getElementById("yarda").value = value * 0.333333;
    } else if (id === "yarda") {
        document.getElementById("metro").value = value * 0.9144;
        document.getElementById("pulgada").value = value * 36;
        document.getElementById("pie").value = value * 3;
    }
}

/**
 * Descripción conversor de grados a radianes o viceversa
 * @method convertirGR de la función
 * @param {String}id - grados - radianes
 */
function convertirGR(id) {
    let grad, rad;
    //TODO: agregar mensaje de error
    //TODO: admitir numeros con coma
    if (id === "grados") {
        grad = document.getElementById("grados").value;
        rad = grad * Math.PI / 180;
        document.getElementById("radianes").value = rad;
    } else {
        rad = document.getElementById("radianes").value;
        grad = rad * 180 / Math.PI;
        document.getElementById("grados").value = grad;
    }
}