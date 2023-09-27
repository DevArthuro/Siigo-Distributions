from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('map-routes/', include('map_routes.urls')),
    path('', include('djoser.urls')),
    path('', include('djoser.urls.authtoken')),
]
