/* criar função que configura os valores das chaves que serão usadas */
let button_criptografar = document.getElementById("button_criptografar");
let text = document.querySelector("textarea")
let text_cripto = ""
let a = "ai"
let e = "enter"
let i = "imes"
let o = "ober"
let u = "ufat"
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
  document.write(text_cripto)  
}




button_criptografar.onclick = criptografar;
