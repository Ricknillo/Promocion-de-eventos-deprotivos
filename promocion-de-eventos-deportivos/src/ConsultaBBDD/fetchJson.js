import https from 'https';

function fetchJson(url) {
  https.get(url, (res) => {
    let data = '';

    // Recibir datos en fragmentos
    res.on('data', (chunk) => {
      data += chunk;
    });

    // Cuando todos los datos hayan sido recibidos
    res.on('end', () => {
      try {
        const jsonData = JSON.parse(data);
        console.log(jsonData);
      } catch (error) {
        console.error('Error al parsear JSON:', error.message);
      }
    });
  }).on('error', (err) => {
    console.error('Error en la petición:', err.message);
  });
}

// Ejemplo de uso
const url = 'https://jsonplaceholder.typicode.com/todos/1'; // Cambia esto a la URL de tu elección
fetchJson(url);
