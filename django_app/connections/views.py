from .models import Connection
from locations.models import Location
from .serializers import ConnectionSerializer
from map_routes.models import MapRoute
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from django.http import Http404


@api_view(['POST'])
def create_connection(request, map_route_slug):
    serializer = ConnectionSerializer(data=request.data)
	
    serializer.is_valid(raise_exception=True)
	
    try:
        map_route = MapRoute.objects.get(
            slug=map_route_slug
        )
    except MapRoute.DoesNotExist:
        return Response(
            {'detail':'Mapa de ruta no encontrado'},
            status=status.HTTP_404_NOT_FOUND
        )
    
    try:
        first_location = Location.objects.get(
            id = serializer.validated_data['first_location'],
            map_route = map_route.id
        )
    except Location.DoesNotExist:
        return Response(
            {'detail':'Primera ubicacion no existe'},
            status=status.HTTP_404_NOT_FOUND
        )
        
    try:
        second_location = Location.objects.get(
            id = serializer.validated_data['second_location'],
            map_route = map_route.id
        )
    except Location.DoesNotExist:
        return Response(
            {'detail':'Segunda ubicacion no existe'},
            status=status.HTTP_404_NOT_FOUND
        )
    
    if Connection.objects.filter(
        map_route = map_route.id,
        first_location = serializer.validated_data['first_location'],
        second_location = serializer.validated_data['second_location']
    ).exists():
        return Response(
            {'detail':'There is already a connection between this locations'},
            status=status.HTTP_400_BAD_REQUEST
        )
        
    try:
        Connection.objects.create(
        first_location = first_location,
        second_location = second_location,
        map_route = map_route,
        weight = serializer.validated_data['weight']
        
    )
    except Exception as e:
        return Response(
            {'detail':f'It was not possible to create the connection {e}'},
            status=status.HTTP_400_BAD_REQUEST
        )
        
    return Response(
        {'detail':'Conexión creada satisfactoriamente'},
        status=status.HTTP_201_CREATED
    )