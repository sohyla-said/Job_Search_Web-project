class Job {
    constructor(job_id, job_title, salary, company_name, job_status, job_description, location,years_of_experience,WorkType,created,imagePath) {
      this.job_id = job_id;
      this.job_title = job_title;
      this.salary = salary;
      this.company_name = company_name;
      this.job_status = job_status;
      this.job_description = job_description;
      this.location = location;
      this.years_of_experience = years_of_experience;
      this.WorkType = WorkType;
      this.created = created;
      this.imagePath = this.imagePath;
    }
  

    displayJob() {
        let job = `<div class="job-container"> 
        <div class="jobimg"><a href="JobDetails.html?id=${this.job_id}">
           <img src="${this.imagePath}" alt="${this.job_id}" class="jobdisplayedimg"></a>
         </div>
        <div class="jobdetails">
             <p class="displayed-job-name">${this.job_title}</p>
             <p class="displayed-company-name">By ${this.company_name}</p>
             <p class="displayed-salary">$${this.salary}</p>
        </div>
      </div>`;
        document.getElementById("main-job-container").innerHTML += job;
    }
}
