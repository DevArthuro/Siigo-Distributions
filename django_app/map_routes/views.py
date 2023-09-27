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
def create_map_route(request):

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

    if request.data['ubicaciones'] is None or len(request.data['ubicaciones']) == 0:
        return Response(
            {'message':"Bad request"},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    locations_ids = set()

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
            creating_location.save()
            locations_ids.add(creating_location.id)
        except IntegrityError as e:
            """map_route.delete()
            for location in locations_ids:
                object_location = Location.objects.get(
                    id=location
                )
                object_location.delete()"""
            return Response(
                {'message':f'It was not possible to save the locations: {e}'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
    connections_ids = set()

    for connection in request.data['conexiones']:
        try:
            first_location = Location.objects.get(
                label=connection['ubicacion1'],
                map_route=map_route.id
            )

            second_location = Location.objects.get(
                label=connection['ubicacion2'],
                map_route=map_route.id
            )

            creating_connection = Connection.objects.create(
                first_location = first_location,
                second_location = second_location,
                weight = connection['peso'],
                map_route = map_route
            )
            creating_connection.save()
            connections_ids.add(creating_connection.id)
        except IntegrityError as e:
            """map_route.delete()
            for location in locations_ids:
                object_location = Location.objects.get(
                    id=location
                )
                object_location.delete()
            for connection in connections_ids:
                object_connection = Connection.objects.get(
                    id=connection
                )
                object_connection.delete()"""
            return Response(
                {'message':f'It was not possible to save the connections: {e}'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
    return Response(
        {'message':'Map route was successfully created'},
        status=status.HTTP_201_CREATED
    )
    

@api_view(['POST'])
def get_most_optimal_path(self, request, map_route_slug, format=None):

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

