from django.shortcuts import render
from locations.models import Location
from django.shortcuts import get_list_or_404, get_object_or_404
from rest_framework.decorators import api_view
from map_routes.models import MapRoute
from connections.models import Connection
from utils.views import build_graph_copy, Vertex
from rest_framework.response import Response


@api_view(['POST'])
def get_most_optimal_path(request):

    map_route = get_object_or_404(
        MapRoute, 
        slug=request.data['map_route_slug']
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
        #data = [location.position_x, location.position_y]
        new_vertex = Vertex(location.id.hex)
        vertexes.append(new_vertex)
    
    
    """starts_at = Vertex(request.data['starts_at'])
    ends_at = Vertex(request.data['ends_at'])"""

    starts_at = request.data['starts_at']
    ends_at = request.data['ends_at']
    
    try:
        optimal_way = build_graph_copy(
            edges, 
            vertexes, 
            starts_at,
            ends_at
        )

        return Response(
            {'data': optimal_way}
        )
    except:
        pass

    return Response({'message': 'Did it'})

