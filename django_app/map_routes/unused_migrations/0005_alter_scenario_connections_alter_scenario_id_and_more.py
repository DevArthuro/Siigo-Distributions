# Generated by Django 4.2.5 on 2023-09-26 20:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('connections', '0003_alter_connection_id'),
        ('scenarios', '0004_remove_scenario_route_scenario_connections_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='scenario',
            name='connections',
            field=models.ManyToManyField(related_name='scenario', to='connections.connection'),
        ),
        migrations.AlterField(
            model_name='scenario',
            name='id',
            field=models.UUIDField(default='<function uuid4 at 0x00000115249B7BA0>', editable=False, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='scenario',
            name='slug',
            field=models.SlugField(default='64dca813-aff5-4d1a-86fe-d0431268e618', max_length=100, unique=True),
        ),
    ]