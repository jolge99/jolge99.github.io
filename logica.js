// Esperar a que la página se cargue completamente
window.addEventListener('load', function() {
    // Obtener el elemento de audio
    const audio = document.getElementById('background-music');

    // Reproducir la canción automáticamente
    audio.play().catch(error => {
        console.log("La reproducción automática fue bloqueada. Haz clic en la página para reproducir.");
    });

    // Habilitar la reproducción al hacer clic en la página (para navegadores que bloquean la reproducción automática)
    document.body.addEventListener('click', function() {
        audio.play();
    });
});