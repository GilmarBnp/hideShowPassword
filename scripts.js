const togglePassword = document.querySelector("#togglePassword")//icone do olho
const password = document.querySelector("#password")//pegando o input do password do html

//pegando o evento de clique

togglePassword.addEventListener("click", function(){

    //verifica se o password está em texto, sendo omitido ***** ou se estar como senha normal
    //ao clicar, se a senha estiver escondida ele vai mostrar, se a senha estiver mostrando normal
    //ele vai trocar os caracteres da senha pelo ******
    const type = password.type === "password" ? "text" : "password"
    password.type = type

     // Toggle the icon classes
     if (password.type === "password") {
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
    } else {
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
    }

    //this = o elemento, ou seja, o ícone do olho
    this.classList.toggle("fa-eye-slash")
    this.classList.toggle("fa-eye")
})
