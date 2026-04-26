const form_login = document.getElementById("formulario_login").addEventListener("submit", async(e)=>{
    e.preventDefault()

    const email = document.getElementById("email_login").value
    const senha = document.getElementById("senha_login").value

    const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, senha})
    })
    .then(res => res.json())
    .then(data => {
        if(data.mensagem == "OK"){
            window.location.replace("../dashbord/index.html")
        }
    })

    const data = await response.json()
})