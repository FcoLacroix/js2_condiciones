function validBorder() {
    let imagen = document.getElementById("img");
    
    if(imagen.style.border.length === 0) { 
        imagen.style.border = "2px solid red";
    } else {
        imagen.style.border = "";
    }
}