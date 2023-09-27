from django.urls import path
from .views import *


urlpatterns = [
    path('', MapRouteList.as_view()),
    path('<slug:map_route_slug>/', get_most_optimal_path),
    path('create', create_map_route)
]