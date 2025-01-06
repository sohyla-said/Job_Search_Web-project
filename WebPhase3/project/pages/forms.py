from django import forms
from .models import application,Job,JobSearchModel


class appForm(forms.ModelForm):
    class Meta:
        model = application
        fields = ['firstname' ,'lastname' ,'email', 'phone' ,'YearOfExperience' ,'jobID' ,'CompanyName' ,'resume','coverletter']
        exclude = ['Date']

class RadioInputWidget(forms.RadioSelect):
    input_type = 'radio'

class JobForm(forms.ModelForm):
    JobStatus = forms.BooleanField(label="Opened", required=False)
    class Meta:
        model = Job
        fields = '__all__'
        
class JobEditForm(forms.ModelForm):
    JobStatus = forms.BooleanField(widget=forms.CheckboxInput(), required=False, label="Opened")
    
    class Meta:
        model = Job
        fields = ['ID', 'title', 'salary', 'CompanyName', 'JobStatus', 'YearsOfExperience', 'Location', 'description', 'WorkType']
        exclude = ['created_at']
    
    def __init__(self, *args, **kwargs):
        super(JobEditForm, self).__init__(*args, **kwargs)
        self.fields['ID'].widget.attrs['readonly'] = True






class JobSearchForm(forms.ModelForm):
    class Meta:
        model = JobSearchModel  
        fields = ['title', 'YearsOfExperience']

