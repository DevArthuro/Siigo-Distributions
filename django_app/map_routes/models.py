from django.db import models
from utils.models import BaseModel
from uuid import uuid4
from django.template.defaultfilters import slugify


class MapRoute(BaseModel):

    name = models.CharField(
        max_length=120,
        unique=True,
        null=False,
        blank=False,
        default=uuid4()
    )

    slug = models.SlugField(
        unique=True, 
        default=str(uuid4()),
        max_length=100,
        db_index=True
    )

    """starts_at = models.ForeignKey(
        Location,
        related_name='connections_starts_at',
        on_delete=models.CASCADE,
        null=True
    )"""

    """connections = models.ManyToManyField(
        Connection,
        related_name='map_route',
        null=True
    )

    locations = models.ManyToManyField(
        Location,
        related_name='map_route',
        null=True
    )"""

    def __str__(self):
        return self.slug
    
    def save(self, *args, **kwargs):
        name_slug = slugify(f'{self.name}-{str(uuid4().hex[:10])}')
        self.slug = name_slug
        return super().save(*args, **kwargs)
    
    @classmethod
    def get_default_pk(cls):
        map_route, created = cls.objects.get_or_create(
            name='default map_route'
        )
        return map_route.pk
    