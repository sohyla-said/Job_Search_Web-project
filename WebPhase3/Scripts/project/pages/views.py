from django.shortcuts import render, get_object_or_404 , redirect
from django.http import  JsonResponse, HttpResponseRedirect
from django.views.generic import TemplateView
from .models import Job
from .models import application
from .forms  import appForm,JobForm, JobEditForm
from django.urls import reverse
from django.http import HttpResponse
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

def HomePageView(request):
    return render(request, 'home.html')
def SignUpPage(request):
      return render(request, 'signup.html')
def LogInPage(request):
    return render(request, 'login.html')

def AddNewJobsPage(request):
    if request.method == 'POST':
        form = JobForm(request.POST, request.FILES)
        if form.is_valid():
            form.save() 
            return redirect('created_jobs')  
    else:
        form = JobForm()
    return render(request, 'AddNewJobs.html', {'form': form})
    
def AppliedJobsPage(request):
    applications = application.objects.all()
    print("applications :", [(
       
        application.CompanyName,
        application.jobID,
        application.Date
    ) for application in applications])
    return render(request, 'appliedjobs.html', {'applications': applications})

def ApplyPage(request):
  if request.method == 'POST':  
      appdata= appForm(request.POST , request.FILES)
      if appdata.is_valid():
          appdata.save()
          return redirect('applied_jobs')
  else:
        appdata = appForm()
  return render(request, 'apply.html', {'af':appdata})

def CreatedJobsPage(request):
    return render(request, 'CreatedJobs.html')

def EditJobPage(request):
    return render(request, 'EditJob.html')

def JobDetailsPage(request):
    return render(request, 'JobDetails.html')

def JobListPage(request):
    jobs = Job.objects.all()
    print("Job IDs:", [job.ID for job in jobs]) 
    return render(request, 'JobList.html', {'jobs': jobs})

def NavBarPage(request):
    return render(request, 'navbar.html')
def AdminNavPage(request):
    return render(request, 'adminNav.html')
def UserBasePage(request):
    return render(request, 'userbase.html')

def FooterPage(request):
    return render(request, 'footer.html')

def SearchForTasksPage(request):
    return render(request, 'searchfortasks.html')

def created_jobs_view(request):
    jobs = Job.objects.all()
    context = {'jobs': jobs}
    return render(request, 'CreatedJobs.html', context)

def job_detail(request, job_id):
    job = get_object_or_404(Job, ID=job_id)
    return render(request, 'JobDetails.html', {'job': job})

def delete_job(request, job_id):
    job = get_object_or_404(Job, ID=job_id)
    job.delete()
    return JsonResponse({'message': 'Job deleted successfully.'})

#This is used to show details in the edit job page  
def get_job_details(request):
    job_id = request.GET.get('job_id')
    try:
        job = Job.objects.get(ID=job_id)
        data = {
            'title': job.title,
            'salary': job.salary,
            'CompanyName': job.CompanyName,
            'JobStatus': job.JobStatus,
            'created_at': job.created_at,
            'YearsOfExperience': job.YearsOfExperience,
            'Location': job.Location,
            'description': job.description,
            'WorkType': job.WorkType
        }
        return JsonResponse(data)
    except Job.DoesNotExist:
        return JsonResponse({'error': 'Job does not exist'}, status=404)
    
    
def get_available_job_ids(request):
    job_ids = Job.objects.values_list('ID', flat=True)
    return JsonResponse(list(job_ids), safe=False)

#def edit_job(request, job_id):
    job = Job.objects.get(ID=job_id)
    form = JobEditForm(instance=job)
    return render(request, 'EditJob.html', {'form': form, 'job_id': job_id})

