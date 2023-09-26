from django.db import models
from utils.models import BaseModel
from locations.models import Location


class Connection(BaseModel):

    first_location = models.ForeignKey(
        Location,
        related_name='connections_first_location',
        on_delete=models.CASCADE
    )

    second_location = models.ForeignKey(
        Location,
        related_name='connections_second_location',
        on_delete=models.CASCADE
    )

    weight = models.IntegerField(
        default=0
    )

    bidirectional = models.BooleanField(
        default=True,
        null=False,
        blank=False
    )

    def __str__(self):
        return f'{self.first_location}-{self.second_location}'