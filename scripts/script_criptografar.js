/* criar função que configura os valores das chaves que serão usadas */


let button_criptografar = document.getElementById("button_criptografar");
let text = document.querySelector("textarea");
let text_cripto = "";
let a = "ai";
let e = "enter";
let i = "imes";
let o = "ober";
let u = "ufat";
function criptografar(){
   

    for (index=0; index<text.value.length; index++){
        if (text.value[index] == "a"){
            text_cripto += a;
        }else if(text.value[index] == "e"){
            text_cripto += e;
        }else if (text.value[index] == "i"){
            text_cripto += i;
        }else if (text.value[index] == "o"){
            text_cripto += o;
        }else if (text.value[index] == "u"){
            text_cripto += u;
        }else{
            text_cripto += text.value[index];
        }
    }
    // mais pra frente quero refatorar essa parte alguns sites uteis para isso: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model e https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples
    
    // tiro a imagem e o paragrafo do display
    document.getElementById("img_output").style.display = "none";
    document.getElementById("div_output_p").style.display = "none";

    // estou criando um elemento <p> contendo o texto criptografado
    let p_ = document.createElement("p");
    let texto_formatado = document.createTextNode(text_cripto);
    p_.appendChild(texto_formatado);
    
    
    // aqui estou incluindo o elemento p com meu texto criptografado na minha div_output
    document.getElementById("div_output").replaceChild(p_, document.getElementById("div_output").childNodes[0])
    text_cripto = "";  
}




button_criptografar.onclick = criptografar;
