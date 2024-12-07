





function App() {

const [newEvents, setnewEvents] = useState([]);
const url = "http://127.0.0.1:8000/event/";


const fetchJson = async () => {
  try {
    console.log("Iniciando la petición...");
    const response = await fetch(url);
    console.log("Datos obtenidos response:", response);
    if (!response.ok) {
      console.log("Error en peticion", response.ok);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Datos obtenidos response:", response);
    console.log("Datos obtenidos data:", data);
    setrespuesta(data); // Actualizamos respuesta con los datos obtenidos
  } catch (error) {
    console.error("Error al realizar la solicitud:", error.message);
  }
};

return (
    <div>
      <h1>Eventos deportivos</h1>
      <pre>{data}</pre>
    </div>
  );
}

export default App;