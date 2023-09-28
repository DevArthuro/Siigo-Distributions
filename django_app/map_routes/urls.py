from django.urls import path
from .views import *


urlpatterns = [
    path('', MapRouteList.as_view()),
    path('create', create_set)
]