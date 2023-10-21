// mais pra frente quero refatorar essa parte alguns sites uteis para isso: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model e https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
let text = document.querySelector("textarea");
let text_cripto = "";
let text_descripto = ""
let texto_copiar = ""
let  p_ = "";


let a = "ai";
let e = "enter";
let i = "imes";
let o = "ober";
let u = "ufat";



let button_copiar = document.getElementById("button_copiar");
function copiar(){ 
    if(texto_copiar != ""){
        navigator.clipboard.writeText(texto_copiar)
        .then(() => {
            alert("Copiado");
        })
                
    } 
}


function limparImagem(){
    document.getElementById("img_output").style.display = "none";
    document.getElementById("div_output_p").style.display = "none";
    
}

function mudarMensagem(texto){   
    p_ = document.createElement("p");
    p_.setAttribute("id", "texto_output")  
    texto_formatado = document.createTextNode(texto);
    p_.appendChild(texto_formatado); 
    document.getElementById("div_output").replaceChild(p_, document.getElementById("div_output").childNodes[0])
}


function criptografar(){
   

    for (index=0; index < text.value.length; index++){
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
    

    if(text_cripto != ""){limparImagem()};
    mudarMensagem(text_cripto);
    texto_copiar = text_cripto;
    text_cripto = "";  

}



function descriptografar(){
    for (index=0; index < text.value.length; index++){
        if(text.value[index] == "a" && text.value[index+1] == "i"){
            text_descripto += text.value[index]
            index+=1
        }else if(text.value[index] == "e" && text.value[index+1] == "n" && text.value[index+2] == "t" && text.value[index+3] == "e" && text.value[index+4] == "r"){
            text_descripto += text.value[index]
            index+=4

        }else if(text.value[index] == "i" && text.value[index+1] == "m" && text.value[index+2] == "e" && text.value[index+3] == "s"){
            text_descripto += text.value[index]
            index+=3
            
        }else if(text.value[index] == "o" && text.value[index+1] == "b" && text.value[index+2] == "e" && text.value[index+3] == "r"){
            text_descripto += text.value[index]
            index+=3
            
        }else if(text.value[index] == "u" && text.value[index+1] == "f" && text.value[index+2] == "a" && text.value[index+3] == "t"){
            text_descripto += text.value[index]
            index+=3
            
        }else{
            text_descripto += text.value[index]

        }

    }

    if(text_descripto != ""){limparImagem()}

    mudarMensagem(text_descripto);

    texto_copiar = text_descripto;

    text_descripto = ""
}


