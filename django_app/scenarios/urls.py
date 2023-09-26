from django.urls import path
from .views import *


urlpatterns = [
    path('', ScenariosList.as_view()),
    path('<slug:scenario_slug>/', BestWay.as_view())
]