# Generated by Django 3.0.7 on 2020-08-11 08:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapiapp', '0002_auto_20200811_0344'),
    ]

    operations = [
        migrations.AddField(
            model_name='workers',
            name='children',
            field=models.CharField(blank=True, max_length=2000, null=True),
        ),
        migrations.AddField(
            model_name='workers',
            name='extra',
            field=models.CharField(blank=True, max_length=2000, null=True),
        ),
    ]
