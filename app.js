let listaNombres = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value.trim();

    if (validarNombre(nombreAmigo)) {
        listaNombres.push(nombreAmigo);
        actualizarListaNombres();
    }

    document.getElementById("amigo").value = "";
}

function actualizarListaNombres() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < listaNombres.length; i++) {
        let amigoIngresado = document.createElement("li");
        amigoIngresado.textContent = listaNombres[i];
        listaAmigos.appendChild(amigoIngresado);
    }
}

function sortearAmigo() {
    if (listaNombres.length === 0) {
        alert("¡No ingresaste ningún nombre de tus amigos!");
        return;
    }

    let indice = Math.floor(Math.random() * listaNombres.length);
    let amigoElegido = listaNombres[indice];

    document.getElementById("resultado").innerHTML = "¡Tu amigo secreto es: " + amigoElegido + "!";
}

function validarNombre(nombre) {
    if (nombre === "") {
        alert("¡Ingresa un nombre por favor!");
        return false;
    }

    if (listaNombres.indexOf(nombre) !== -1) {
        alert("¡El nombre ya fue agregado!");
        return false;
    }

    return true;
}
