from django.db import models
from utils.models import BaseModel
from uuid import uuid4
from django.template.defaultfilters import slugify
from locations.models import Location
from connections.models import Connection


class Scenario(BaseModel):

    name = models.CharField(
        max_length=120,
        unique=False,
        null=False,
        blank=False
    )

    description = models.TextField(
        max_length=700,
        null=True,
        blank=True
    )

    slug = models.SlugField(
        unique=True, 
        default=str(uuid4()),
        max_length=100,
        db_index=True
    )

    starts_at = models.ForeignKey(
        Location,
        related_name='connections_starts_at',
        on_delete=models.CASCADE
    )

    ends_at = models.ForeignKey(
        Location,
        related_name='connections_ends_at',
        on_delete=models.CASCADE
    )

    connections = models.ManyToManyField(
        Connection,
        related_name='scenario'
    )

    locations = models.ManyToManyField(
        Location,
        related_name='scenario'
    )

    def __str__(self):
        return self.slug
    
    def save(self, *args, **kwargs):
        name_slug = slugify(f'{self.name}-{str(uuid4().hex[:10])}')
        self.slug = name_slug
        return super().save(*args, **kwargs)
    