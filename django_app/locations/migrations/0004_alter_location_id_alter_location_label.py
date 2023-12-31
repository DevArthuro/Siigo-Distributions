# Generated by Django 4.2.5 on 2023-09-26 20:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('locations', '0003_alter_location_label'),
    ]

    operations = [
        migrations.AlterField(
            model_name='location',
            name='id',
            field=models.UUIDField(default='<function uuid4 at 0x00000115249B7BA0>', editable=False, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='location',
            name='label',
            field=models.CharField(default='7875ce75e33d469c847d', max_length=20, unique=True),
        ),
    ]
