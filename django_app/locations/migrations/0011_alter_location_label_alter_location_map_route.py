# Generated by Django 4.2.5 on 2023-09-27 14:11

from django.db import migrations, models
import django.db.models.deletion
import map_routes.models


class Migration(migrations.Migration):

    dependencies = [
        ('map_routes', '0008_alter_maproute_name_alter_maproute_slug'),
        ('locations', '0010_alter_location_label_alter_location_map_route_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='location',
            name='label',
            field=models.CharField(default='8a2a52f8a5644a0f90e6', max_length=20),
        ),
        migrations.AlterField(
            model_name='location',
            name='map_route',
            field=models.ForeignKey(default=map_routes.models.MapRoute.get_default_pk, on_delete=django.db.models.deletion.CASCADE, related_name='locations', to='map_routes.maproute'),
        ),
    ]