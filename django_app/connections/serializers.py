from rest_framework import serializers
from .models import Connection


class ConnectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Connection
        fields = [
            'id',
            'first_location',
            'second_location',
            'weight',
        ]