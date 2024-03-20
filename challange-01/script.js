
const btn_encriptar = document.querySelector("#encriptar");
const btn_desencriptar = document.querySelector("#desencriptar");

const input = document.querySelector("textarea");
const resultado = document.querySelector("#result");
const imagem = document.querySelector("#image");
const textoPadrao1 = document.querySelector("#text-default1");
const textoPadrao2 = document.querySelector("#text-default2");
const btn_copiar = document.querySelector("#button-copy");

var codigos = [ ["a","ai"], ["e","enter"], ["i","imes"], ["o","ober"], ["u","ufat"] ];

function comprovar_texto_encriptado(){
    if(input.value != ""){
        encriptar();
    } else {
        mostrar_busca_vazia();
    }
}

function comprovar_texto_desencriptado(){
    if(input.value != ""){
        desencriptar();
    } else {
        mostrar_busca_vazia();
    }
}

function encriptar(){
    let texto = input.value;
    let texto_processado = "";
    let encontrado = false ;

    for(let i = 0; i < texto.length; i++){
        for(let j = 0; j < codigos.length; j++){
            if(texto[i] == codigos[j][0]){
                encontrado = true;
                texto_processado += codigos[j][1];
                break;
            }
        }
        if(encontrado == false){
            texto_processado += texto[i];       
        }
        encontrado = false;
    }
    mostrar_resultado(texto_processado);
}

function desencriptar(){
    let texto = input.value;

    for(let i = 0; i < codigos.length; i++){
            texto = texto.replaceAll(codigos[i][1], codigos[i][0]);
        }

    mostrar_resultado(texto);
}

function copiar_p_area_de_transferencia(){
    navigator.clipboard.writeText(resultado.innerHTML)
        .then(() => {
        console.log("Copiado")
    })
        .catch(err => {
        console.log('Error', err);
    })
}

function mostrar_resultado(texto_processado){
    resultado.innerHTML = texto_processado;
    resultado.style.display = "block";
    imagem.style.display = "none";
    textoPadrao1.style.display = "none";
    textoPadrao2.style.display = "none";
    btn_copiar.style.display = "block";
}

function mostrar_busca_vazia(){
    resultado.style.display = "none";
    imagem.style.display = "block";
    textoPadrao1.style.display = "block";
    textoPadrao2.style.display = "block";
    btn_copiar.style.display = "none";
}

input.focus();
btn_encriptar.onclick = comprovar_texto_encriptado;
btn_desencriptar.onclick = comprovar_texto_desencriptado;
btn_copiar.onclick = copiar_p_area_de_transferencia;

/*
encriptar 1
    for(let i = 0; i < texto.length; i++){
        for(let j = 0; j < codigos.length; j++){
            if(texto[i] == codigos[j][0]){
                encontrado = true;
                texto_processado += codigos[j][0];
                i += codigos[j][1].length - 1;
                break;
            }
        }
        if(encontrado == false){
            texto_processado += texto[i];       
        }
        encontrado = false;
    }

encriptar 2

    for(var index = 0; index < texto.length; index++){
        switch(texto[index]) {
            case "a":
                texto_processado += "ai";
                break;
            case "e":
                texto_processado += "enter";
                break;
            case "i":
                texto_processado += "imes";
                break;   
            case "o":
                texto_processado += "ober";
                break;
            case "u":
                texto_processado += "ufat";
                break;
            default:
                texto_processado += texto[index];
          }
    }
*/

/*
desencriptar
    for(var index = 0; index < texto.length; index++){
        switch(texto[index]) {
            case "a":
                texto_processado += "a";
                index++
                break;
            case "e":
                texto_processado += "enter";
                index += 4
                break;
            case "i":
                texto_processado += "imes";
                index += 3
                break;   
            case "o":
                texto_processado += "ober";
                index += 3
                break;
            case "u":
                texto_processado += "ufat";
                index += 3
                break;
            default:
                texto_processado += texto[index];
          }
    }
*/
