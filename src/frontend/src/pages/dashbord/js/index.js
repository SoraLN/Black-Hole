const iframe_button = document.getElementById("botao_iframe")
iframe_button.addEventListener("click", () => {

        const iframe = document.getElementById("iframe_code")

        if (!iframe) return;

        if (iframe.style.display == "grid") {
            iframe.style.display = "none"
        } else {

            iframe.style.display = "grid"

                const iframeDoc = iframe.contentWindow.document;
                const loading = iframeDoc.getElementById("iframe_loading");

                if (loading) {
                    setTimeout(() => {
                        loading.style.display = "none";
                    }, 2000);
            }
    }
})

function lancamento (id){

    if(!id){
        console.log("Elemento não encontrado")
        return
    }

    id.addEventListener("click", () => {
            const iframe = document.getElementById("iframe_code_2")

            const main = document.getElementById("main")

            if(iframe.style.display == "grid"){
                iframe.style.display = "none"
                main.classList.remove("blur")
            }else{
                iframe.style.display = "grid"
                main.classList.add("blur")
            }
    })
}

const novo_lancamento = document.getElementById("novo_lancamento")

const iframe_button_2 = document.getElementById("botao_iframe_2")

lancamento(novo_lancamento)
lancamento(iframe_button_2)

console.log(novo_lancamento)
console.log(iframe_button_2)