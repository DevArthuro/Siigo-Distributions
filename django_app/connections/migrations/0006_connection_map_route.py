# Generated by Django 4.2.5 on 2023-09-27 13:28

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('map_routes', '0006_alter_maproute_name_alter_maproute_slug'),
        ('connections', '0005_alter_connection_created_by'),
    ]

    operations = [
        migrations.AddField(
            model_name='connection',
            name='map_route',
            field=models.ForeignKey(default=uuid.UUID('4bb94c41-6065-43d5-9d74-e7c0237a59cc'), on_delete=django.db.models.deletion.CASCADE, related_name='connections', to='map_routes.maproute'),
        ),
    ]
