from django.urls import path
from . import views
from django.views.generic import TemplateView
from .views import delete_job,AddNewJobsPage,SearchForTasksPage
urlpatterns = [
    path('', views.HomePageView, name='home'),

    path('signup.html/', views.SignUpPage, name='signup'),
    
    path('login.html/', views.LogInPage, name='login'),
    
    path('AddNewJobs.html/', views.AddNewJobsPage, name='add_new_jobs'),
    
    path('appliedjobs.html/', views.AppliedJobsPage, name='applied_jobs'),
    
    path('apply.html/', views.ApplyPage, name='apply'),
    
    path('CreatedJobs.html/', views.created_jobs_view, name='created_jobs'),
    
    # path('EditJob.html/', views.EditJobPage, name='edit_job'),
    path('EditJob.html/<job_id>', views.edit_job, name='edit_job'),
    
    path('JobDetails.html/', views.JobDetailsPage, name='job_details'),
    
    path('JobList.html/', views.JobListPage, name='job_list'),
    
    path('navbar.html/', views.NavBarPage, name='navbar'),

    path('adminNav.html/', views.AdminNavPage, name='adminNav'),

    path('userbase.html/', views.UserBasePage, name='userbase'),

    path('footer.html/', views.FooterPage, name='footer'),
    
    path('searchfortasks.html/', views.SearchForTasksPage, name='searchfortasks'),

    path('job/<int:job_id>/', views.job_detail, name='job_detail'),
    
    path('delete_job/<int:job_id>/', views.delete_job, name='delete_job'),
    
    path('get_job_details/', views.get_job_details, name='get_job_details'),    

]