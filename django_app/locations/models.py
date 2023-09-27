from django.db import models
from django.template.defaultfilters import slugify

from uuid import uuid4

from utils.models import BaseModel
from map_routes.models import MapRoute


class Location(BaseModel):

    label = models.CharField(
        max_length=20,
        null=False,
        blank=False,
        default=str(uuid4().hex[:20])
    )

    position_x = models.IntegerField(
        null=False,
        blank=False,
        default=0
    )

    position_y = models.IntegerField(
        null=False,
        blank=False,
        default=0
    )

    map_route = models.ForeignKey(
        MapRoute,
        related_name='locations',
        on_delete=models.CASCADE,
        default=MapRoute.objects.first().id
    )


    class Meta:
        unique_together = [
            'position_x', 
            'position_y'
        ]

        constraints = [
            models.UniqueConstraint(
                fields=[
                    'label',
                    'map_route'
                ],
                name='unique_label_per_map_route'
            ),
            models.UniqueConstraint(
                fields=[
                    'position_x',
                    'position_y',
                    'map_route'
                ],
                name='unique_positions_per_map_route'
            )
        ]

    def __str__(self):
        return self.label
    