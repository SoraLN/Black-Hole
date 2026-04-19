const iframe_button = document.getElementById("botao_iframe")

iframe_button.addEventListener("click", () => { //codigo para dar o efeito tchola de spin na page

    const iframe = document.getElementById("iframe_code")

    const iframeDoc = iframe.contentWindow.document;
    const loading = iframeDoc.getElementById("iframe_loading");

    if(iframe.style.display == "grid"){

        iframe.style.display = "none"
        loading.style.display = "flex";

    }else{

        setTimeout(() => {
        if (loading) {
            loading.style.display = "none";
            }
        }, 2000);

        iframe.style.display = "grid"
    }
})