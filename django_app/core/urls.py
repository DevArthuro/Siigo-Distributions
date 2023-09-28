from django.contrib import admin
from django.urls import path, include
from users.views import UserActivationView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('map-routes/', include('map_routes.urls')),
    path('', include('djoser.urls')),
    path('', include('djoser.urls.authtoken')),
    path(r'^#/activate/(?P<uid>[\w-]+)/(?P<token>[\w-]+)/$', UserActivationView.as_view()),
]
