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

    const data = await response.json()

    console.log(data)
})