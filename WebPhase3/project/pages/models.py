from django.db import models
from django.shortcuts import render
from django.core.validators import FileExtensionValidator
from django.urls import reverse
from django.contrib.auth.hashers import check_password


class Job(models.Model):
    ID = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=100)
    salary = models.DecimalField(max_digits=10, decimal_places=0)
    CompanyName = models.CharField(max_length=100)
    JobStatus = models.BooleanField(default=True)  
    created_at = models.DateField(auto_now_add=True,null=True, blank=True)
    YearsOfExperience = models.IntegerField()
    Location = models.CharField(max_length=100)
    description = models.TextField()
    WorkType = models.CharField(max_length=100)
    image = models.ImageField(upload_to='Photos/%y/%m/%d')
    def __str__(self):
        return self.title
    



# def validate_phone(value):
#     if len(str(value)) != 11:

#         raise ValidationError("Phone number must be exactly 11 digits.")

# def validate_experience(value):
#     if value < 0 or not isinstance(value, int):
#         raise ValidationError("Years of work experience must be a positive integer.")

class application(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email =models.EmailField(max_length=250 )
    phone =models.DecimalField(max_digits=11 ,decimal_places=0)
    YearOfExperience =models.IntegerField()
    jobID = models.ForeignKey(Job, on_delete=models.CASCADE)
    CompanyName =models.CharField(max_length=100)
    Date =models.DateTimeField(auto_now_add=True)
    resume =models.FileField(upload_to='resumes/',validators=[FileExtensionValidator(['pdf'])])
    coverletter = models.CharField(max_length=250)
 
    def __str__(self):
        return self.firstname

    

class JobSearchModel(models.Model):
    title = models.CharField(max_length=100)
    YearsOfExperience = models.IntegerField()

    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse('job_detail', kwargs={'job_id': self.id})

class User(models.Model):
    username = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128) 
    is_company_admin = models.BooleanField(default=False)
    company_name = models.CharField(max_length=20, blank=True, default='')
    def __str__(self):
        return self.username
    
    def check_password(self, raw_password):
        return check_password(raw_password, self.password)