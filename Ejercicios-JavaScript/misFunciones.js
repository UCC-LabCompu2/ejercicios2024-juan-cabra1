/**
 * Descripción
 * @method Nombre de la función
 * @param id A
 * @param value B
 * @return Valor que retorna
 */
function convertirUnidades(id, value) {
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