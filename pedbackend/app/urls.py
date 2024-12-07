from django.urls import path, include
from rest_framework import routers
from app import views

#from .views import json_events

router = routers.DefaultRouter()
router.register(r'event', views.EventViewSet)

urlpatterns=[
    path('', include(router.urls)),
]