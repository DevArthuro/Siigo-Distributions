from django.db import models
from utils.models import BaseModel
from uuid import uuid4
from django.template.defaultfilters import slugify


class Location(BaseModel):

    label = models.CharField(
        max_length=20,
        null=False,
        blank=False,
        default=str(uuid4().hex[:20]),
        unique=True
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


    class Meta:
        unique_together = [
            'position_x', 
            'position_y'
        ]

    def __str__(self):
        return self.label
    