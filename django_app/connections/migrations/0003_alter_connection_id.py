# Generated by Django 4.2.5 on 2023-09-26 20:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('connections', '0002_alter_connection_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='connection',
            name='id',
            field=models.UUIDField(default='<function uuid4 at 0x00000115249B7BA0>', editable=False, primary_key=True, serialize=False),
        ),
    ]
