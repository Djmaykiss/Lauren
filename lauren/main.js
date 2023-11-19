document.addEventListener('DOMContentLoaded', function () {
    // Obtener la fecha y hora actual
    var now = new Date();
    
    // Establecer la fecha y hora de la graduación (por ejemplo)
    var graduationDate = new Date('2023-06-30T16:00:00');
    
    // Mostrar la fecha y hora en la página
    document.getElementById('date').textContent = graduationDate.toLocaleDateString('es-ES');
    document.getElementById('time').textContent = graduationDate.toLocaleTimeString('es-ES');

    // Manejar el clic en el botón de confirmar asistencia
    document.getElementById('rsvpBtn').addEventListener('click', function () {
        alert('¡Gracias por confirmar tu asistencia!');
    });
});
