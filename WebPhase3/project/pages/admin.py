from django.contrib import admin
from .models import Job
from .models import application
from .models import User
# Register your models here.

admin.site.register(Job)
admin.site.register(application)
admin.site.register(User)

