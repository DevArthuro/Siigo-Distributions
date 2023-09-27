from rest_framework import serializers
from .models import MapRoute


class MapRouteSerializer(serializers.ModelSerializer):
    class Meta:
        model = MapRoute
        fields = [
            'id',
            'name',
            'slug',
            'starts_at',
            'created_at',
            'updated_at',
        ]

        read_only_fields = [
            'id',
            'slug',
            'created_at',
            'updated_at',
        ]


class CreateMapRouteSerializer(serializers.Serializer):

    pass