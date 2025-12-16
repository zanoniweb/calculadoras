// Dados dos usuários para login
        const users = [
            { username: "jzanoni", password: "180804", page: "geracaodocumentosservidores.html" },
            { username: "dloni", password: "senha457adm", page: "geracaodocumentosservidores.html" },
            { username: "danicadastramento", password: "senha897adm", page: "geracaodocumentosservidores.html" },
            { username: "joaocadastramento", password: "senha675adm", page: "geracaodocumentosservidores.html" },
            { username: "aimecadastramento", password: "senha436adn", page: "geracaodocumentosservidores.html" },
            { username: "alemaodiretor", password: "senha236adm", page: "geracaodocumentosservidores.html" },
            { username: "carlosdivida", password: "senha423adn", page: "geracaodocumentosservidores.html" },

        ];

        function login() {
            const usernameInput = document.getElementById("username").value;
            const passwordInput = document.getElementById("password").value;
            const errorMessage = document.getElementById("error-message");

            // Limpa a mensagem de erro
            errorMessage.textContent = "";

            // Encontra o usuário correspondente no array
            const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

            if (user) {
                // Se o usuário e a senha estiverem corretos, redireciona para a página apropriada
                window.location.href = user.page;
            } else {
                // Se o login falhar, exibe uma mensagem de erro
                errorMessage.textContent = "Usuário ou senha incorretos!";
            }
        }