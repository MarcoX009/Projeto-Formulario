function logar(){
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");
    if(email.value == "admin@admin.com" && senha.value == "admin"){
        localStorage.setItem("acesso", true);
        window.location.href = "js/index.html";
    }else{
        alert("Email ou senha invalidos")
    }
}