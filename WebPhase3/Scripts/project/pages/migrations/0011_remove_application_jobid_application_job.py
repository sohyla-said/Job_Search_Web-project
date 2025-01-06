# Generated by Django 5.0.6 on 2024-05-14 09:26

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0010_application_id_alter_application_email'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='application',
            name='jobID',
        ),
        migrations.AddField(
            model_name='application',
            name='job',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='pages.job'),
            preserve_default=False,
        ),
    ]
