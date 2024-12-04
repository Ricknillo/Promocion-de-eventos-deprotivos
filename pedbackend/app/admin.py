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
    limit_date
    min_age
    """
    list_display = ('name', 'date', 'limit_date', 'location', 'sport', 'min_age')
    list_display_links = ('name',)
    list_filter = ('date', 'location', 'sport', 'limit_date', 'min_age')
    list_per_page = 10
    ordering = ('date', 'location', 'sport')
    search_fields = ('name', 'location', 'sport', 'min_age')
    exclude = ('id', )

