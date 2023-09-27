# Generated by Django 4.2.5 on 2023-09-27 12:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('connections', '0004_alter_connection_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='connection',
            name='created_by',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='created_by_%(class)s_related', to=settings.AUTH_USER_MODEL),
        ),
    ]
