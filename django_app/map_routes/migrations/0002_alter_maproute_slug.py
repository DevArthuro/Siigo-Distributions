# Generated by Django 4.2.5 on 2023-09-26 22:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('map_routes', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='maproute',
            name='slug',
            field=models.SlugField(default='da69372c-9187-45a4-b60a-3f2738f18567', max_length=100, unique=True),
        ),
    ]
