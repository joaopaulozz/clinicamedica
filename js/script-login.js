// Adiciona um evento de escuta para o envio do formulário
    loginForm.addEventListener("submit", function (event) {
        // Impede o comportamento padrão de envio do formulário
        event.preventDefault();

        // Obtém os valores de nome de usuário e senha dos campos de entrada
        const username_forms = document.getElementById("username").value;
        const password_forms = document.getElementById("password").value;

        // Simula autenticação usando um arquivo JSON
        fetch("users.json")
            .then((response) => response.json())
            .then((data) => {
                // Procura por um usuário que corresponda a preenchida pelo usuario
                const user = data.find((user) => user.username == username_forms && user.password == password_forms);

                console.log(user);
                // Verifica se um usuário válido foi encontrado
                if (user) {
                    // Exibe uma mensagem de login bem-sucedido
                    message.textContent = "Login bem-sucedido!";
                    message.style.color = "green";
                } else {
                    // Exibe uma mensagem de erro
                    message.textContent = "Usuário ou senha incorretos.";
                    message.style.color = "red";
                }
            });
    });