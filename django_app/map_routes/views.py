from django.shortcuts import render
from django.shortcuts import get_object_or_404, get_list_or_404
from django.db.models.functions import Cast
from django.db.models import CharField
from django.db import IntegrityError

from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import MapRoute
from locations.models import Location
from connections.models import Connection
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

    map_route_name = ''

    if 'nombre' in request.data.keys():
        map_route_name = request.data['nombre']

    try:
        creating_map_route = MapRoute.objects.create(
            name = map_route_name
        )
        creating_map_route.save()
        route_id = creating_map_route.id
    except IntegrityError as e:
        return Response(
            {'message':f'It was not possible to save the route: {e}'},
            status=status.HTTP_400_BAD_REQUEST
        )

    if request.data['ubicaciones'] is None:
        return Response(
            {'message':"Bad request"},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    locations = set()

    map_route = MapRoute.objects.get(
        id=route_id
    )
    
    for location in request.data['ubicaciones']:
        try:
            creating_location = Location.objects.create(
                label = location['nombre'],
                position_x = location['posX'],
                position_y = location['posY'],
                map_route = map_route
            )
            print(creating_location)
            creating_location.save()
            locations.add(creating_location.id)
        except IntegrityError as e:
            return Response(
                {'message':f'It was not possible to save the locations: {e}'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
    connections = set()

    for connection in request.data['conexiones']:
        try:
            creating_connection = Connection.objects.create(
                first_location = connection['ubicacion1'],
                second_location = connection['ubicacion2'],
                weight = connection['peso'],
                map_route = map_route
            )
            creating_connection.save()
            connections.add(creating_connection.id)
        except:
            return Response(
                {'message':'It was not possible to save the connections'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
    return Response(
        {'message':'Successful'},
        status=status.HTTP_201_CREATED
    )

    map_route_name = ''

    if 'nombre' in request.data:
        map_route_name = request.data['nombre']

    beginning = Location.objects.get()

    try:
        MapRoute.objects.create(
            name = map_route_name,
            starts_at = 1,
            connections=connections,
            locations=locations,
        )
    except:
        return Response(
            {'message':'It was not possible to save the route'},
            status=status.HTTP_400_BAD_REQUEST
        )
    

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

