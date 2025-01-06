from django.shortcuts import render, get_object_or_404 , redirect
from django.http import  JsonResponse, HttpResponseRedirect
from django.views.generic import TemplateView
from .models import Job
from .models import application
from .models import User
from .forms  import appForm,JobForm, JobEditForm, JobSearchForm
from django.urls import reverse
from django.http import HttpResponse
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt
from django.template.loader import render_to_string
import logging
from django.contrib.auth import login, authenticate 
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.hashers import make_password

logger = logging.getLogger(__name__)

def HomePageView(request):
    return render(request, 'home.html')
def SignUpPage(request):
    if request.method == 'POST':
        # Get the data from form
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm-password')
        is_company_admin = request.POST.get('is_company_admin') == 'on'
        company_name = request.POST.get('company_name')
        # for testing is user admin or not
        print(f"isAdmin value: {is_company_admin}")
   
        # some validations
        if not username or not email or not password or not confirm_password:
            messages.error(request, 'All fields are required.')
            return render(request, 'signup.html')

        if password != confirm_password:
            messages.error(request, 'Passwords do not match.')
            return render(request, 'signup.html')
         # Username length validation
        if len(username) < 6:
            messages.error(request, f'Please username this text to 6 characters or more (you are currently using {len(username)} characters).')
            return render(request, 'signup.html')

        # Password length validation
        if len(password) < 8:
            messages.error(request, f'Please password this text to 8 characters or more (you are currently using {len(password)} characters).')
            return render(request, 'signup.html', {'form_data': request.POST})
        # Password commonality check
        common_passwords = ['password', '12345678', '123456789', 'qwerty', 'abc123']
        if password in common_passwords:
            messages.error(request, 'This password is too common.')
            return render(request, 'signup.html')

        # Password numeric check
        if password.isdigit():
            messages.error(request, 'This password is entirely numeric.')
            return render(request, 'signup.html', {'form_data': request.POST})

        if User.objects.filter(username=username).exists():
            messages.error(request, 'Username already exists.')
            return render(request, 'signup.html')

        if User.objects.filter(email=email).exists():
            messages.error(request, 'Email already exists.')
            return render(request, 'signup.html')
        # hash password
        hashed_password = make_password(password)
        # create new user with form data
        user = User(username=username, email=email, password=hashed_password, is_company_admin=is_company_admin,company_name ='')
        if company_name:
            user.company_name = company_name
        user.save()
        # make this user the active one this session
        # request.session['user_id'] = user.id
        if user.is_company_admin:
                return redirect('created_jobs')
        else:
                return redirect('job_list')
    return render(request, 'signup.html')
def LogInPage(request):
    if request.method == 'POST': 
        username = request.POST.get('username')
        password = request.POST.get('password')
        print("Received username:", username)
        print("Received password:", password)           
        try:
            user = User.objects.get(username=username)
            print("Username exists in the database")
        except User.DoesNotExist:
            print("User with username does not exist.")
            messages.error(request,"User with username does not exist.")
            return render(request, 'login.html')
        # checking if password matches the password associated with that user
        if user.check_password(password):
            print("Password matches")
            # make that user the active one for the session
            request.session['user_id'] = user.id
            is_company_admin = request.POST.get('is_company_admin')=='on'
            if user.is_company_admin:
                return redirect('created_jobs')
            else:
                return redirect('job_list')             
        else:
                messages.info(request, 'Credentials error')
    
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
    if request.method == 'GET' and request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest':
        form = JobSearchForm(request.GET)
        if form.is_valid():
            title = form.cleaned_data.get('title')
            YearsOfExperience = form.cleaned_data.get('YearsOfExperience')
            jobs = Job.objects.all()
            if title:
                jobs = jobs.filter(title__icontains=title)
            if YearsOfExperience:
                jobs = jobs.filter(YearsOfExperience__lte=YearsOfExperience)
            
            jobs_list = []
            for job in jobs:
                jobs_list.append({
                    'title': job.title,
                    'YearsOfExperience': job.YearsOfExperience,
                    'salary': job.salary,
                    'CompanyName': job.CompanyName,
                    'Location': job.Location,
                    'description': job.description,
                    'WorkType': job.WorkType,
                    'JobStatus': job.JobStatus,
                    'created_at': job.created_at,
                    'image_url': job.image.url if job.image else None,
                })

            return JsonResponse({'jobs': jobs_list})
    else:
        form = JobSearchForm()
    return render(request, 'searchfortasks.html', {'form': form})
     



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
            'ID': job.ID,
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


def edit_job(request, job_id):
    job = Job.objects.get(ID = job_id)
    form = JobEditForm(request.POST or None, instance=job)
    if form.is_valid():
        title = form.cleaned_data['title']
        form.save()
        return redirect('created_jobs')
    return render(request, 'EditJob.html', {'job':job,'form':form})



