
// Botón para cambiar de colocar el fondo (Oscuro o Claro)
const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;

// Verificar si hay una preferencia guardada en el almacenamiento local
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '☀️';
} else {
    toggleButton.textContent = '🌙';
}

// Añadir un evento al botón para alternar el modo
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Cambiar el icono del botón según el modo
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️'; // Sol para modo oscuro
        localStorage.setItem('theme', 'dark'); // Se guardar preferencia
    } else {
        toggleButton.textContent = '🌙'; // Luna para modo claro
        localStorage.setItem('theme', 'light'); // Se guardar preferencia
    }
});


// Funcionalidad de filtro de eventos
const filtroUbicacion = document.getElementById('filtro-ubicacion');
const eventos = document.querySelectorAll('.evento-item');

filtroUbicacion.addEventListener('change', () => {
    const seleccion = filtroUbicacion.value;

    eventos.forEach(evento => {
        const ubicacion = evento.querySelector('.texto p:nth-child(4)').textContent.toLowerCase();

        if (seleccion === 'Todos') {
            evento.style.display = 'flex';
        } else {
            if (ubicacion.includes(seleccion)) {
                evento.style.display = 'flex';
            } else {
                evento.style.display = 'none';
            }
        }
    });
});
