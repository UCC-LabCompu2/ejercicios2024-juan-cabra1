/**
 * Descripción
 * @method convertirUnidades de la función
 * @param {String}id A
 * @param {number}value B
 */
let convertirUnidades = (id, value) => {
    //TODO: admitir numeros con coma
    let metro,pie,yarda,pulgada;
    if (isNaN(value)) {
        alert("Ingrese numeros unicamente");
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    } else if (id === "metro") {
        metro = value;
        pulgada = value * 39.3701;
        pie = value * 3.28084;
        yarda = value * 1.09361;
    } else if (id === "pulgada") {
        pulgada = value;
        metro = value * 0.0254;
        pie = value * 0.0833333;
        yarda = value * 0.0277778;
    } else if (id === "pie") {
        pie = value;
        metro = value * 0.3048;
        pulgada = value * 12;
        yarda = value * 0.333333;
    } else if (id === "yarda") {
        yarda = value;
        metro = value * 0.9144;
        pulgada = value * 36;
        pie = value * 3;
    }
    document.getElementById("metro").value = metro;
    document.getElementById("pulgada").value = pulgada;
    document.getElementById("pie").value = pie;
    document.getElementById("yarda").value = yarda;
}

/**
 * Descripción conversor de grados a radianes o viceversa
 * @method convertirGR de la función
 * @param {String}id - grados - radianes
 */
convertirGR = (id) => {
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
/**
 * Permite mostrar u ocultar un div en base a la seleccion de un radio button
 * @method mostrar_ocultar
 * @param {String} value - Contiene: val_mostrar, val_ocultar
 */
   let mostrar_ocultar = (value) => {
    if(value==="val_mostrar"){
        document.getElementById("unDiv").style.display = 'block'
    }else if(value==="val_ocultar"){
        document.getElementById("unDiv").style.display = 'none'
    }
   }
   let suma = () => {

    const s1 = Number(document.getElementById("nums1").value);
       const s2 = document.getElementById("nums2").value;
    document.getElementById("totalS").innerHTML = s1+Number(s2);
   }
let resta = () => {

    const s1 = document.getElementById("numr1").value;
    const s2 = document.getElementById("numr2").value;
    document.getElementById("totalR").innerHTML = s1-s2;
}
let multiplicar = () => {

    const s1 = (document.getElementById("numm1").value);
    const s2 = document.getElementById("numm2").value;
    document.getElementById("totalM").innerHTML = s1*s2;
}
let dividir = () => {

    const s1 = (document.getElementById("numd1").value);
    const s2 = document.getElementById("numd2").value;
    document.getElementById("totalD").innerHTML = s1/s2;
}



let pasarvalores= () => {
       const distancia=document.getElementById("distancia").value;
       const unidad=document.getElementById("unidadades").value;
       window.open(`segundaWeb.html#${distancia}#${unidad}`)
}