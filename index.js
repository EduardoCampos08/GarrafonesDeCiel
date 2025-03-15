// Suponiendo que los datos vienen de un backend o API en tiempo real
// Este es solo un ejemplo con valores estáticos para simular el flujo de datos
let detectionsCar = 0;
let detectionsPeaton = 0;

// Función para simular cambios en las detecciones
setInterval(() => {
  detectionsCar = Math.floor(Math.random() * 10);
  detectionsPeaton = Math.floor(Math.random() * 5);

  document.getElementById('car-status').textContent = `Carros detectados: ${detectionsCar}`;
  document.getElementById('pedestrian-status').textContent = `Peatones detectados: ${detectionsPeaton}`;

  // Cambiar el semáforo basado en el número de detecciones
  if (detectionsCar > detectionsPeaton) {
    document.getElementById('light-color').textContent = 'Verde';
    document.getElementById('light-color').style.color = 'green';
  } else if (detectionsPeaton > detectionsCar) {
    document.getElementById('light-color').textContent = 'Rojo';
    document.getElementById('light-color').style.color = 'red';
  } else {
    document.getElementById('light-color').textContent = 'Amarillo';
    document.getElementById('light-color').style.color = 'yellow';
  }
}, 2000); // Actualizar cada 2 segundos
