from django.shortcuts import render
from django.shortcuts import get_object_or_404, get_list_or_404

from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Scenario
from connections.models import Connection
from locations.models import Location
from .serializers import ScenarioSerializer
from utils.views import build_graph


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
            edges.append((
                connection.first_location, 
                connection.second_location), 
                connection.weight,
                connection.bidirectional
            )

        locations = get_list_or_404(
            Location,
            scenario=scenario
            )
        
        build_graph(edges, locations)
        

