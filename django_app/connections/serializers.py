from rest_framework import serializers
from .models import Connection


class ConnectionSerializer(serializers.Serializer):
    
    first_location = serializers.CharField()
    second_location = serializers.CharField()
    
    weight = serializers.IntegerField()
    