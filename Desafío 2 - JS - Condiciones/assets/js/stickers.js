function calcular() {
    const sticker1 = Number(document.getElementById("p1").value); //"2" -> 2 "a" -> Nan -> not a number
    const sticker2 = Number(document.getElementById("p2").value); //"2" -> 2 "a" -> Nan -> not a number
    const sticker3 = Number(document.getElementById("p3").value); //"2" -> 2 "a" -> Nan -> not a number
    const mensaje = document.getElementById("result");

    let total = sticker1 + sticker2 + sticker3;

    if (sticker1 < 0 || sticker2 < 0 || sticker3 < 0) {
        mensaje.textContent = "Los valores ingresados deben ser mayor o igual a 0";    
    } else if (total > 10) {
        mensaje.textContent = "Llevas demasiados stickers";
    } else {
        mensaje.textContent = "Llevas " + total + " stickers";
    }    
}