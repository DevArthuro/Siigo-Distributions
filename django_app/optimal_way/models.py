from django.db import models
from locations.models import Location
from map_routes.models import MapRoute
from utils.models import BaseModel


class OptimalWay(BaseModel):

    starts_at = models.ForeignKey(
        Location,
        related_name='optimal_way',
        on_delete=models.CASCADE,
        null=True
    )

    map_route = models.ForeignKey(
        MapRoute,
        related_name='locations',
        on_delete=models.CASCADE,
        default=MapRoute.get_default_pk
    )

    def __str__(self):
        return f'{self.map_route.name}-{self.starts_at.label}'

