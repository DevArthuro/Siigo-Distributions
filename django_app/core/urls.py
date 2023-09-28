from django.contrib import admin
from django.urls import path, include
from users.views import UserActivationView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('map-routes/', include('map_routes.urls')),
    path('locations/', include('locations.urls')),
    path('connections/', include('connections.urls')),
    path('optimal-way/', include('optimal_way.urls')),
    path('', include('djoser.urls')),
    path('', include('djoser.urls.authtoken')),
    path(f'#/activate/<uid>/<token>/', UserActivationView.as_view()),
]
