# Generated by Django 5.0.6 on 2024-05-14 09:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0011_remove_application_jobid_application_job'),
    ]

    operations = [
        migrations.RenameField(
            model_name='application',
            old_name='job',
            new_name='jobID',
        ),
    ]
