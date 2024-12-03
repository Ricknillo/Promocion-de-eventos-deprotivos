from django.contrib import admin
from .models import Event

# Register your models here.

# admin.site.register(Event)


@admin.register(Event)
class ItemAdmin(admin.ModelAdmin):
    """
    Datos del modelo Event:
    id
    name
    date
    location
    requirements
    sport
    """
    list_display = ('name', 'date', 'location', 'sport')
    list_display_links = ('name',)
    list_filter = ('date', 'location', 'sport')
    list_per_page = 10
    ordering = ('date', 'location', 'sport')
    search_fields = ('date', 'location', 'sport')
    exclude = ('id', )

