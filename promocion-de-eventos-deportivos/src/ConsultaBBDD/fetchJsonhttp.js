import http from 'http'; 

function fetchJson(url) {
  http.get(url, (res) => {
    let data = '';

    
    res.on('data', (chunk) => {
      data += chunk;
    });

    
    res.on('end', () => {
      try {
        const jsonData = JSON.parse(data);
        console.log(jsonData);
        return jsonData;
      } catch (error) {
        console.error('Error al parsear JSON:', error.message);
      }
    });
  }).on('error', (err) => {
    console.error('Error en la petición:', err.message);
  });
}


const url = 'http://127.0.0.1:8000/json_events/'; 
fetchJson(url);
