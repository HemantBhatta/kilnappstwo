# Generated by Django 3.0.7 on 2020-07-31 09:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('myapiapp', '0005_auto_20200731_0854'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workers',
            name='kiln',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='myapiapp.Kiln'),
        ),
    ]
