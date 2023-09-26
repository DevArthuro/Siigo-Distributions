from django.shortcuts import render
from django.shortcuts import get_object_or_404, get_list_or_404
from django.db.models.functions import Cast
from django.db.models import CharField

from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Scenario
from connections.models import Connection
from locations.models import Location
from .serializers import ScenarioSerializer
from utils.views import build_graph, Vertex


class ScenariosList(APIView):
    def get(self, request, format=None):
        scenarios = Scenario.objects.all()
        serializer = ScenarioSerializer(
            scenarios, many=True
        )
        return Response(
            serializer.data,
            status=status.HTTP_200_OK
        )

class BestWay(APIView):

    def get(self, request, scenario_slug, format=None):

        scenario = get_object_or_404(
            Scenario, 
            slug=scenario_slug
        )

        edges = []

        connections = get_list_or_404(
            Connection, 
            scenario=scenario.id
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
            scenario=scenario
            )
        
        vertexes = []

        for location in locations:
            data = [location.position_x, location.position_y]
            new_vertex = Vertex(location.id.hex, data)
            vertexes.append(new_vertex)
        
        starts_at = scenario.starts_at.id.hex
        ends_at = scenario.ends_at.id.hex
        
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

