from .models import Location
from .serializers import LocationSerializer
from map_routes.models import MapRoute
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

@api_view(['POST'])
def create_location(request, map_route_slug):
    serializer = LocationSerializer(data=request.data)
	
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

    if len(Location.objects.filter(
        map_route = map_route.id,
        label = serializer.validated_data['label']
    )) != 0:
        return Response(
            {'detail':' There is already an existing location with that label'},
            status=status.HTTP_400_BAD_REQUEST
        )
	
    if len(Location.objects.filter(
        map_route = map_route.id,
        position_x = serializer.validated_data['position_x'],
        position_y = serializer.validated_data['position_y']
    )):
        return Response(
            {'detail':' There is already an existing location at these positions'},
            status=status.HTTP_400_BAD_REQUEST
        )
	
    try:
        Location.objects.create(
            **serializer.validated_data,
            map_route = map_route
        )
    except:
        return Response(
            {'detail':'It was not possible to create the location'},
            status=status.HTTP_400_BAD_REQUEST
        )
        
    return Response(
        {'detail':'Ubicación creada satisfactoriamente'},
        status=status.HTTP_201_CREATED
    )