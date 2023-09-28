from django.urls import path
from .views import get_most_optimal_path


urlpatterns = [
    path('', get_most_optimal_path),
]