from django.db import models

# Create your models here.

class Event(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255) # Nombre del evento
    date = models.DateField() # Fecha del evento
    location = models.CharField(max_length=255) # Lugar del evento
    requirements = models.CharField(max_length=255) # Requisitos del evento
    sport = models.CharField(max_length=255) # Deporte del evento
    limit_date = models.DateField() # Fecha fin de inscripcion
    min_age = models.SmallIntegerField() # Edad mínima para participar

    def __str__(self):
        # Definiendo la estructura del nombre que mostrará el objeto al ser llamado sin atributos
        return f"{self.name} en {self.location} el {self.date}"

# Datos de ejemplo que deben ser enviados y almacenados
"""[
    {
      name: "Carrera 5K",
      date: "2023-09-10",
      location: "Parque Simón Bolívar",
      requirements: "Inscripción previa",
      deporte: "Correr",
    },

    {
      name: "Torneo de Fútbol Amateur",
      date: "2024-01-10",
      location: "Estadio Nacional",
      requirements: "Inscripción de equipos",
      deporte: "Fútbol",
    },
]"""


"""
[
    {
        "name": "Carrera 5K",
        "date": "2023-09-10",
        "location": "Parque Simón Bolívar",
        "requirements": "Inscripción previa",
        "deporte": "Correr"
    },
    {
        "name": "Torneo de Fútbol Amateur",
        "date": "2024-01-10",
        "location": "Estadio Nacional",
        "requirements": "Inscripción de equipos",
        "deporte": "Fútbol"
    },
    {
        "name": "Ciclopaseo Nocturno",
        "date": "2023-11-15",
        "location": "Ciclovía de la 7ma",
        "requirements": "Bicicleta en buen estado",
        "deporte": "Ciclismo"
    },
    {
        "name": "Torneo de Tenis de Mesa",
        "date": "2024-03-20",
        "location": "Coliseo El Campín",
        "requirements": "Raqueta propia",
        "deporte": "Tenis de Mesa"
    },
    {
        "name": "Festival de Yoga al Aire Libre",
        "date": "2023-12-22",
        "location": "Cerro de Monserrate",
        "requirements": "Esterilla",
        "deporte": "Yoga"
    },
    {
        "name": "Triatlón Sprint",
        "date": "2024-05-12",
        "location": "Embalse de Tominé",
        "requirements": "Inscripción previa, equipo de natación, bicicleta",
        "deporte": "Triatlón"
    },
    {
        "name": "Partido de Básquetbol 3x3",
        "date": "2024-07-04",
        "location": "Parque El Virrey",
        "requirements": "Formar equipo de 3 jugadores",
        "deporte": "Básquetbol"
    },
    {
        "name": "Caminata Ecológica",
        "date": "2024-09-21",
        "location": "Quebrada La Vieja",
        "requirements": "Calzado cómodo",
        "deporte": "Senderismo"
    },
    {
        "name": "Torneo de Pádel",
        "date": "2023-10-28",
        "location": "Club Campestre",
        "requirements": "Palas de pádel",
        "deporte": "Pádel"
    },
    {
        "name": "Competencia de Skateboarding",
        "date": "2024-02-14",
        "location": "Skatepark de Usaquén",
        "requirements": "Skateboard",
        "deporte": "Skateboarding"
    }
]"""