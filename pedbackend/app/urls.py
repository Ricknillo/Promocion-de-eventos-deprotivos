from django.urls import path
from . import views
#from .views import json_events

urlpatterns=[
    path('json_events/', views.json_events, name='json_items'),
]