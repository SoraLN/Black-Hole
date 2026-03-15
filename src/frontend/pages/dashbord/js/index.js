const iframe_button = document.getElementById("botao_iframe")

iframe_button.addEventListener("click", () => {

    const iframe = document.getElementById("iframe_code")

    if(iframe.style.display == "grid"){
        iframe.style.display = "none"
    }else{iframe.style.display = "grid"}
})