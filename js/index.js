const botao_registrar = document.getElementById("btn_registrar")

botao_registrar.addEventListener("click", ()=>{

    const nome = document.getElementById("nome_registro").value
    const email = document.getElementById("email_registro").value
    const senha = document.getElementById("senha_registro").value

    const info = {
        nome_d: nome,
        email_d: email,
        senha_d: senha
    }

    const url = 'http://localhost:3000/registrar'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(info)
    })

    .then(response => {
        if(!response.ok){
            throw new Error('Erro na requicição: ' + response.status)
        }

        return response.json()
    })

    .then(data => {
        console.log("Deu Boa!!", data)
    })

    .catch(error => {
        console.error('Erro:', error);
    });

})