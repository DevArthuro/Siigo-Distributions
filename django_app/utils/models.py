from django.db import models
from django.conf import settings

from uuid import uuid4


class BaseModel(models.Model):

    id = models.UUIDField(
        editable=False,
        default=uuid4,
        primary_key=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL, 
        related_name='created_by_%(class)s_related', 
        on_delete=models.CASCADE,
        null=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    
    class Meta:
        abstract = True
