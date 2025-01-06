from django.db import models
from django.shortcuts import render
from django.core.validators import FileExtensionValidator, MinLengthValidator

# Create your models here.


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
    



class application(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email =models.EmailField(max_length=250 )
    phone =models.DecimalField(max_digits=11 ,decimal_places=0)
    YearOfExperience =models.CharField(max_length=100)
    jobID = models.ForeignKey(Job, on_delete=models.CASCADE)
    CompanyName =models.CharField(max_length=100)
    Date =models.DateTimeField(auto_now_add=True)
    resume =models.FileField(upload_to='resumes/' , validators=[FileExtensionValidator(['pdf'])])
    coverletter = models.CharField(max_length=250)
    def __str__(self):
        return self.firstname