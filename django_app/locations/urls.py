from django.urls import path
from .views import create_location


urlpatterns = [
    path('<slug:map_route_slug>/create', create_location)
]
