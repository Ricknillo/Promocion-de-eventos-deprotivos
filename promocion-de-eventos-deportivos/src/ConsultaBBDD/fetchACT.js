
const [respuesta, setrespuesta] = [{}];

const fetchJson = async () => {
    try {
      console.log("Iniciando la petición...");
      const response = await fetch(url, {
        method: "GET",
        mode: "no-cors",  // Esto deshabilita la verificación CORS
      });
  
      // Si usas `no-cors`, no podrás acceder al cuerpo de la respuesta directamente
      console.log("Datos obtenidos response:", response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // En `no-cors`, no puedes obtener los datos como JSON, solo el status
      // Si el modo es no-cors, la respuesta no será completamente accesible.
      const data = await response.json();  // Esto no funcionará como esperas con `no-cors`
      console.log("Datos obtenidos data:", data);
  
      setrespuesta(data);
    } catch (error) {
      console.error("Error al realizar la solicitud:", error.message);
    }
  };
  

  // Ejemplo de uso
  const url = 'http://127.0.0.1:8000/json_events/';

  fetchJson(url);

