from django import forms
from .models import application,Job


class appForm(forms.ModelForm):
    class Meta:
        model = application
        fields = '__all__'


class JobForm(forms.ModelForm):
    class Meta:
        model = Job
        fields = '__all__'
        
class JobEditForm(forms.ModelForm):
    class Meta:
        model = Job
        fields = ['title', 'salary', 'CompanyName', 'JobStatus', 'created_at', 'YearsOfExperience', 'Location', 'description', 'WorkType']
        exclude = ['created_at']