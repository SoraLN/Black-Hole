const form = document.getElementById("formulario_register")

form.addEventListener("submit", async(e)=>{
    e.preventDefault();

    const nome = document.getElementById("nome_registro").value
    const email = document.getElementById("email_registro").value
    const senha = document.getElementById("senha_registro").value

    const response = await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nome, email, senha})
    })

    if(response.ok){
        form.reset();
    }
})