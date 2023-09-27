from django.shortcuts import render
from django.shortcuts import get_object_or_404, get_list_or_404
from django.db.models.functions import Cast
from django.db.models import CharField

from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import MapRoute
from locations.models import Location
from connections.models import Connection
from locations.models import Location
from .serializers import MapRouteSerializer
from utils.views import build_graph, Vertex


class MapRouteList(APIView):
    def get(self, request, format=None):
        map_routes = MapRoute.objects.all()
        serializer = MapRouteSerializer(
            map_routes, many=True
        )
        return Response(
            serializer.data,
            status=status.HTTP_200_OK
        )
    

@api_view(['POST'])
def create_route(request):
    if request.data['ubicaciones'] is None:
        return Response(
            {'message':"Bad request"},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    for location in request.data['ubicaciones']:
        try:
            Location.objects.create(
                label = location['nombre'],
                position_x = location['posX'],
                position_y = location['posY'],
            )
        except:
            pass
    

class RouteDetail(APIView):

    def get(self, request, map_route_slug, format=None):

        map_route = get_object_or_404(
            MapRoute, 
            slug=map_route_slug
        )


        edges = []

        connections = get_list_or_404(
            Connection, 
            map_route=map_route.id
            )
        
        for connection in connections:
            new_connection = tuple((
                connection.first_location.id.hex, 
                connection.second_location.id.hex,
                connection.weight,
                connection.bidirectional)
            )
            edges.append(new_connection)

        locations = get_list_or_404(
            Location,
            map_route=map_route
            )
        
        vertexes = []

        for location in locations:
            data = [location.position_x, location.position_y]
            new_vertex = Vertex(location.id.hex, data)
            vertexes.append(new_vertex)
        
        starts_at = map_route.starts_at.id.hex
        ends_at = map_route.ends_at.id.hex
        
        try:
            build_graph(
                edges, 
                vertexes, 
                starts_at, 
                ends_at
            )
        except:
            pass

        return Response({'message': 'Did it'})

