from django.db import models

# Create your models here.

class Event(models.Model):

    SPORT_CHOICES = [
    ('Fútbol', 'Fútbol'),
    ('Baloncesto', 'Baloncesto'),
    ('Tenis', 'Tenis'),
    ('Natación', 'Natación')
    ]

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255) # Nombre del evento
    date = models.DateField() # Fecha del evento
    location = models.CharField(max_length=255) # Lugar del evento
    requirements = models.CharField(max_length=255) # Requisitos del evento
    sport = models.CharField(max_length=255, choices=SPORT_CHOICES, null=False) # Deporte del evento
    limit_date = models.DateField() # Fecha fin de inscripcion
    min_age = models.SmallIntegerField() # Edad mínima para participar

    def __str__(self):
        # Definiendo la estructura del nombre que mostrará el objeto al ser llamado sin atributos
        return f"{self.name} en {self.location} el {self.date}"

# Datos de ejemplo que deben ser enviados y almacenados
"""[
  {
    "name": "Clásico Bogotano de Fútbol 7",
    "date": "2024-03-15",
    "location": "Canchas del Parque El Virrey",
    "requirements": "Inscripción previa y equipo completo",
    "sport": "Fútbol",
    "limit_date": "2024-03-05",
    "min_age": 16
  },
  {
    "name": "Torneo de Baloncesto 3x3",
    "date": "2024-04-20",
    "location": "Canchas del Parque Nacional",
    "requirements": "Inscripción previa por equipo",
    "sport": "Baloncesto",
    "limit_date": "2024-04-15",
    "min_age": 15
  },
  {
    "name": "Torneo de Tenis Dobles",
    "date": "2024-06-15",
    "location": "Club Campestre de Bogotá",
    "requirements": "Inscripción previa por pareja",
    "sport": "Tenis",
    "limit_date": "2024-06-05",
    "min_age": 14
  },
  {
    "name": "Acuatlón Parque El Virrey",
    "date": "2024-07-20",
    "location": "Lago del Parque El Virrey",
    "requirements": "Inscripción previa",
    "sport": "Natación",
    "limit_date": "2024-07-10",
    "min_age": 16
  },
  {
    "name": "Torneo de Fútbol Playa",
    "date": "2024-09-14",
    "location": "Playa Salitre",
    "requirements": "Inscripción previa y equipo completo",
    "sport": "Fútbol",
    "limit_date": "2024-09-04",
    "min_age": 16
  },
  {
    "name": "Copa Bogotá de Baloncesto",
    "date": "2024-10-19",
    "location": "Coliseo El Campín",
    "requirements": "Inscripción previa por equipo",
    "sport": "Baloncesto",
    "limit_date": "2024-10-10",
    "min_age": 18
  },
  {
    "name": "Torneo de Tenis de Mesa",
    "date": "2024-11-16",
    "location": "Coliseo cubierto de Teusaquillo",
    "requirements": "Inscripción previa",
    "sport": "Tenis",
    "limit_date": "2024-11-05",
    "min_age": 12
  },
  {
    "name": "Travesía a Nado en el Lago de Guatavita",
    "date": "2025-02-15",
    "location": "Lago de Guatavita",
    "requirements": "Inscripción previa y certificado médico",
    "sport": "Natación",
    "limit_date": "2025-02-05",
    "min_age": 18
  },
  {
    "name": "Copa Ciudad de Bogotá de Fútbol",
    "date": "2025-04-12",
    "location": "Estadio Metropolitano",
    "requirements": "Inscripción previa y equipo completo",
    "sport": "Fútbol",
    "limit_date": "2025-04-02",
    "min_age": 18
  },
  {
    "name": "Torneo de Baloncesto Juvenil",
    "date": "2025-05-17",
    "location": "Coliseo cubierto de Teusaquillo",
    "requirements": "Inscripción previa por equipo",
    "sport": "Baloncesto",
    "limit_date": "2025-05-07",
    "min_age": 14
  }
]

"""