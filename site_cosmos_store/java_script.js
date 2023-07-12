
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar nome de usuário e senha (exemplo)
    if (username === "admin" && password === "12345") {
        alert("Login bem-sucedido!");
        window.location = "produtos.html";
    } else {
        alert("Nome de usuário ou senha inválidos. Tente novamente.");
    }
});

document.getElementById("forgot-password").addEventListener("click", function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link

    // Redirecionar para a página de redefinição de senha
    window.location = "redefinir_senha.html";
});


document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    var email = document.getElementById("email").value;

    // Aqui você pode adicionar a lógica para redefinir a senha
    alert("Uma mensagem de redefinição de senha foi enviada para o email: " + email);
    // Aqui você pode redirecionar o usuário para uma página de confirmação ou realizar outras ações
});



function resetPassword() {
    // Lógica para redefinir a senha

    // Exibir o popup
    showPopup();
}

function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";

    // Redirecionar para a página de login
    window.location.href = "index.html";
}
