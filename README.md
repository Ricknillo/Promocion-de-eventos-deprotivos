# Promocion-de-eventos-deprotivos
 Promocion de eventos deportivos


## Backend

El Backend está hecho usando:

* Python 3.12.3
* SQLite 3
* Django 5.1.3
* coreapi 2.3.3
* djangorestframework 3.15.2
* python-dotenv 1.0.1

Se pueden encontrar las dependencias en el archivo ```requirements.txt```

Para instalar las dependencias se debe ejecutar el comando:</br>
```pip install -r requirements.txt```


Aquí tienes una descripción que puedes añadir al archivo `README.md` sobre los endpoints de la aplicación Django:

---

## Endpoints de la Aplicación del backend

La aplicación proporciona una serie de endpoints para interactuar con el modelo `Event`. A continuación se detallan los endpoints disponibles:

### Endpoints de la API

1. **Listar Eventos**
   - **URL:** `/event/`
   - **Método HTTP:** GET
   - **Descripción:** Recupera una lista de todos los eventos almacenados en la base de datos.
   - **Respuesta:** Devuelve un JSON con todos los eventos.

2. **Crear Evento**
   - **URL:** `/event/`
   - **Método HTTP:** POST
   - **Descripción:** Crea un nuevo evento en la base de datos.
   - **Cuerpo de la Solicitud:** Debe incluir los campos necesarios para el modelo `Event`.

3. **Obtener Detalles de un Evento**
   - **URL:** `/event/<id>/`
   - **Método HTTP:** GET
   - **Descripción:** Recupera los detalles de un evento específico identificado por su `id`.
   - **Respuesta:** Devuelve un JSON con los detalles del evento.

4. **Actualizar Evento**
   - **URL:** `/event/<id>/`
   - **Método HTTP:** PUT
   - **Descripción:** Actualiza la información de un evento existente.
   - **Cuerpo de la Solicitud:** Debe incluir los campos a actualizar para el modelo `Event`.

5. **Eliminar Evento**
   - **URL:** `/event/<id>/`
   - **Método HTTP:** DELETE
   - **Descripción:** Elimina un evento específico de la base de datos.

### Documentación de la API

- **URL:** `/docs/`
- **Descripción:** Proporciona documentación interactiva para la API, facilitando la exploración y prueba de los endpoints disponibles.

### Administración de la aplicación

- **URL:** `/admin/`
- **Descripción:** Página de administración de Django.

### Notas Adicionales

- Todos los endpoints están gestionados por el `EventViewSet`, que utiliza el `EventSerializer` para la serialización de los datos del modelo `Event`.
- Asegúrate de tener configurado el entorno de Django y las dependencias necesarias para ejecutar la aplicación correctamente.

--- 
