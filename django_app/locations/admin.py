from django.contrib import admin
from .models import Location


@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    list_display = [
        'label',
        'map_route',
        'position_x',
        'position_y',
    ]