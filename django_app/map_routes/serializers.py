from rest_framework import serializers
from .models import MapRoute
from locations.serializers import LocationSerializer
from connections.serializers import ConnectionSerializer


class MapRouteSerializer(serializers.ModelSerializer):

    locations = LocationSerializer(many=True)
    connections = ConnectionSerializer(many=True)
    class Meta:
        model = MapRoute
        fields = [
            'id',
            'name',
            'slug',
            'created_at',
            'updated_at',
            'locations',
            'connections'
        ]

        read_only_fields = [
            'id',
            'slug',
            'created_at',
            'updated_at',
        ]


class CreateMapRouteSerializer(serializers.Serializer):

    pass