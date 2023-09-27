from django.urls import path
from .views import *


urlpatterns = [
    path('', MapRouteList.as_view()),
    path('<slug:map_route_slug>/', RouteDetail.as_view()),
    path('create', create_route)
]