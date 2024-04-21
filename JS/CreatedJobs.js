

// This file is used to display the job data as job objects

class Job {
    constructor(
      div_id,
      job_id,
      job_title,
      salary,
      company_name,
      job_status,
      job_description,
      location,
      years_of_experience,
      WorkType,
      created,
      imagePath
    ) {
      this.div_id=div_id;
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
      this.imagePath = imagePath;
    }
    displayJob() {
      let job = `<div class="job"> 
            <img src="/Images/${this.imagePath}" alt="${this.job_id}" class="jobdisplayedimg">
            <h2>${this.job_title}</h2>
            <h3>${this.company_name}</h3>
            <ul>
                <li><span class="bold">Job ID: </span><span>${this.job_id}</span></li>
                <li><i class="fa-solid fa-location-dot"></i><span class="bold">Location: </span><span>${this.location}</span></li>
                <li><span class="bold">Work Type: </span><span>${this.WorkType}</span></li>
                <li><span class="bold">Created: </span><span>${this.created}</span></li>
                <li><i class="fa-solid fa-sack-dollar"></i><span class="bold">Xalary: </span><span>${this.salary}</span></li>
                <li><span class="bold">Years of Experiance: </span><span>${this.years_of_experience}</span></li>
                <li><span class="bold">Job Status: </span><span>${this.job_status}</span></li>
                <li><span class="bold">About the Job: </span><span>${this.job_description}</span></li>
            </ul>
            <button class="job-btn" onclick="editJob(${this.job_id})"><a href=""# >Edit job<i class="fa-regular fa-pen-to-square"></i></a></button>
            <button class="job-btn" onclick="deleteJob(${this.job_id})">Delete Job</button>
            </div>`;
      document.getElementById("created-jobs").innerHTML+=job;
      console.log(this.div_id)
    }
  }

  let job1 = new Job(
    1,
    1,
    "DevOps Engineer",
    25000,
    "Metachain Technologies inc.",
    "Open",
    "As a DevOps engineer, you'll play a crucial role in optimizing software delivery processes. Working within our team, you'll streamline operations, implement automation, and ensure seamless collaboration between development and operations.",
    " Cairo, Egypt",
    3,
    "On-site",
    "2 Weeks ago",
    "../Images/Metachain.webp"
  );
  let job2 = new Job(
    2,
    2,
    "DevOps Consultant",
    40000,
    "IBM Cloud pak",
    "Open",
    "In this role, you'll work in one of our IBM Consulting Client Innovation Centers (Delivery Centers), where we deliver deep technical and industry expertise to a wide range of public and private sector clients around the world. Our delivery centers offer our clients locally based skills and technical expertise to drive innovation and adoption of new technology.",
    "Giza, Egypt",
    5,
    "Hybrid",
    "2 Weeks ago",
    "../Images/IBM.jpeg"
  );
  let job3 = new Job(
    3,
    3,
    "Software Testing Engineer",
    35000,
    "Valeo",
    "Open",
    "As a Software Testing Engineer, you'll play a pivotal role in ensuring the quality and reliability of our software products. You'll design and execute test cases, perform thorough analysis, and report any issues or defects to the development team.",
    "Cairo, Egypt",
    3,
    "Hybrid",
    "6 Weeks ago",
    "../Images/valeo.png"
  );
  let job4 = new Job(
    4,
    4,
    "Full Stack Developer",
    25000,
    "ELSEWEDY ELECTRIC.",
    "Open",
    "As a Fullstack Developer, you'll be at the forefront of building dynamic web applications from start to finish. Your role involves both front-end and back-end development, crafting intuitive user interfaces and robust server-side logic.",
    "Cairo, Egypt",
    3,
    "Hybrid",
    "6 Weeks ago",
    "../Images/ElSewedy.jpeg"
  );
  let job5 = new Job(
    5,
    5,
    "Principal Software Engineer",
    35000,
    "Sumerge.",
    "Open",
    "As a Principal Software Engineer, you'll be a key leader in driving technical excellence and innovation within our organization. Your role involves providing strategic direction, architectural guidance, and mentorship to the development team.",
    "Zayed, Egypt",
    5,
    "Remote",
    "5 Weeks ago",
    "../Images/smurge.jpeg"
  );
  
  localStorage.setItem("job1", JSON.stringify(job1));
  localStorage.setItem("job2", JSON.stringify(job2));
  localStorage.setItem("job3", JSON.stringify(job3));
  localStorage.setItem("job4", JSON.stringify(job4));
  localStorage.setItem("job5", JSON.stringify(job5));
  
  const Jobs = [job1, job2, job3, job4, job5];
  localStorage.setItem("AllJobs", JSON.stringify(Jobs));
  function displayAllJobs() {
    // document.getElementById("Jobs").innerHTML="";
    Jobs.forEach((job) => {
      job.displayJob();
    });
  }
  displayAllJobs();
  

function deleteJob(jobid){

    // Remove the job from localStorage
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if(key[key.length-1] == jobid){
            localStorage.removeItem(key);
        }
    }

    // Remove the job from the AllJobs array
    let allJobsArray = JSON.parse(localStorage.getItem("AllJobs"));
    for (var i = 0; i < allJobsArray.length; i++) {
        if(allJobsArray[i].job_id == jobid){
            allJobsArray.splice(i,1);
        }
    }
    
    // Update the AllJobs array in localStorage
    localStorage.setItem("AllJobs", JSON.stringify(allJobsArray));

    // Remove the job from the displayed jobs on the page if needed
    // var elementToDelete = document.getElementById(jobid);
    // elementToDelete.remove();
    // var jobElement = document.getElementById(allJobsArray.find(job => job.job_id === jobid).div_id); // Find the job element by div_id
    // if (jobElement) {
    //     jobElement.remove();
    // }
var jobElement = document.getElementById(jobid);
    if (jobElement) {
        jobElement.remove();
    }
}

function editJob(jobid){
  
}