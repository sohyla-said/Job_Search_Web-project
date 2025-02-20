# Generated by Django 5.0.6 on 2024-05-11 18:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Job',
            fields=[
                ('ID', models.IntegerField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100)),
                ('salary', models.DecimalField(decimal_places=3, max_digits=10)),
                ('CompanyName', models.CharField(max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('YearsOfExperience', models.IntegerField()),
                ('Location', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('WorkType', models.CharField(max_length=100)),
                ('image', models.ImageField(upload_to='Photos/%y/%m/%d')),
            ],
        ),
    ]
