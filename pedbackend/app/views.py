from rest_framework import viewsets
from .serializer import EventSerializer
from .models import Event

# Create your views here.
# def json_events(_request):
#     # Esta view ("/json_events") está hecha para devolver los valores almacenados en el modelo "Event" en formato Json
#     events = Event.objects.values('name','date','location','requirements','sport', 'limit_date', 'min_age') # Obtiene los valores de la base de datos bajo el modelo Event en tipo de dato QuerySet
#     events = list(events) # Transforma el tipo de dato a lista
#     return JsonResponse(data=events, safe=False) # Devuelve los valores en formato Json

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer