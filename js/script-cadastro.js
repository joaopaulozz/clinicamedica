document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById("userForm");

    userForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtém os valores do formulário
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const tipo = document.getElementById("tipo").value;

        // Cria um objeto com os dados do usuário
        const userData = {
            username: username,
            password: password,
            tipo: tipo
        };

        // Envia os dados do formulário para o servidor
        fetch("/cadastro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.text())
        .then(message => {
            console.log(message);
            // Exibe uma mensagem para o usuário (por exemplo, em um elemento HTML)
            const messageElement = document.getElementById("message");
            messageElement.textContent = message;
        })
        .catch(error => {
            console.error(error);
        });
    });
});
