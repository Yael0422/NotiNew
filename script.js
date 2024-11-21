// Usuario y contraseña predefinidos
const validUser = "Yael"; // Cambiar por el usuario deseado
const validPassword = "2129668"; // Cambiar por la contraseña deseada

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario recargue la página

    // Obtiene los valores ingresados por el usuario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica las credenciales
    if (username === validUser && password === validPassword) {
        alert("Inicio de sesión exitoso");
        // Redirige al panel de administrador (puedes cambiar la ruta)
        window.location.href = "admin.html";
    } else {
        // Muestra un mensaje de error
        document.getElementById('error-message').style.display = 'block';
    }
});
