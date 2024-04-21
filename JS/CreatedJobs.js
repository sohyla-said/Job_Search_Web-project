

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
    this.div_id = div_id;
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
    let job = `<div class="job" id="${this.div_id}"> 
            <img src="${this.imagePath}" alt="${this.company_name}" class="jobdisplayedimg">
            <h2>${this.job_title}</h2>
            <h3>${this.company_name}</h3>
            <ul>
                <li><span class="bold">Job ID: </span><span>${this.job_id}</span></li>
                <li><i class="fa-solid fa-location-dot"></i><span class="bold">Location: </span><span>${this.location}</span></li>
                <li><span class="bold">Work Type: </span><span>${this.WorkType}</span></li>
                <li><span class="bold">Created: </span><span>${this.created}</span></li>
                <li><i class="fa-solid fa-sack-dollar"></i><span class="bold">Salary: </span><span>${this.salary}</span></li>
                <li><span class="bold">Years of Experiance: </span><span>${this.years_of_experience}</span></li>
                <li><span class="bold">Job Status: </span><span>${this.job_status}</span></li>
                <li><span class="bold">About the Job: </span><span>${this.job_description}</span></li>
            </ul>
            <p class="editP"><i class="fa-solid fa-triangle-exclamation"></i>Please click on <span class="bold">Edit Job</span> to show the edits</p>
            <button class="job-btn" class="goToEdit"><a href="EditJob.html">Go to Edit job<i class="fa-solid fa-arrow-up-right-from-square"></i></a></button>
            <button class="job-btn" onclick="editJob(${this.job_id})">Edit job<i class="fa-regular fa-pen-to-square"></i></button>
            <button class="job-btn" onclick="deleteJob(${this.job_id})">Delete Job<i class="fa-regular fa-trash-can"></i></button>
            </div>`;
    document.getElementById("created-jobs").innerHTML += job;
    console.log(this.div_id);
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
  "../Images/Metachain.jpeg"
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
  "../Images/IBM2.png"
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
  let addedJobs = JSON.parse(localStorage.getItem("addformData")) || [];
  addedJobs.forEach((jobData) => {
    let job = new Job(jobData); 
    job.displayJob();
  });
}

displayAllJobs();

//Delete a job
function deleteJob(jobid) {
  // Remove the job from local storage
  localStorage.removeItem(`job${jobid}`);

  // Remove the job from the AllJobs array
  let allJobsArray = JSON.parse(localStorage.getItem("AllJobs"));
  let updatedJobsArray = allJobsArray.filter((job) => job.job_id !== jobid);

  // Update the AllJobs array in local storage
  localStorage.setItem("AllJobs", JSON.stringify(updatedJobsArray));

  // If needed, remove the job from the displayed jobs on the page
  let jobElement = document.getElementById(jobid);
  if (jobElement) {
    jobElement.remove();
  }
}

//Edit a job
function updateObject(objToUpdate, newObj) {
  for (let key in newObj) {
    if (newObj.hasOwnProperty(key)) {
      objToUpdate[key] = newObj[key];
    }
  }
}
function editJob(jobid) {
  let editedData = JSON.parse(localStorage.getItem("EditFormData"));
  let allJobsArray = JSON.parse(localStorage.getItem("AllJobs"));

  // Find the job to be edited in the AllJobs array
  let jobToBeEdited = allJobsArray.find((job) => job.job_id === jobid);

  if (jobToBeEdited && editedData) {
    // Update the job object with the edited data
    updateObject(jobToBeEdited, editedData);

    // Update the job in local storage
    localStorage.setItem(`job${jobid}`, JSON.stringify(jobToBeEdited));

    // Update the AllJobs array in local storage
    localStorage.setItem("AllJobs", JSON.stringify(allJobsArray));

  

    // Find the job element by its div_id and update its inner HTML
    let jobElement = document.getElementById(jobToBeEdited.div_id);
    if (jobElement) {
      jobElement.innerHTML = `
              <img src="/Images/${jobToBeEdited.imagePath}" alt="${jobToBeEdited.company_name}" class="jobdisplayedimg">
              <h2>${jobToBeEdited.job_title}</h2>
              <h3>${jobToBeEdited.company_name}</h3>
              <ul>
                  <li><span class="bold">Job ID: </span><span>${jobToBeEdited.job_id}</span></li>
                  <li><i class="fa-solid fa-location-dot"></i><span class="bold">Location: </span><span>${jobToBeEdited.location}</span></li>
                  <li><span class="bold">Work Type: </span><span>${jobToBeEdited.WorkType}</span></li>
                  <li><span class="bold">Created: </span><span>${jobToBeEdited.created}</span></li>
                  <li><i class="fa-solid fa-sack-dollar"></i><span class="bold">Salary: </span><span>${jobToBeEdited.salary}</span></li>
                  <li><span class="bold">Years of Experience: </span><span>${jobToBeEdited.years_of_experience}</span></li>
                  <li><span class="bold">Job Status: </span><span>${jobToBeEdited.job_status}</span></li>
                  <li><span class="bold">About the Job: </span><span>${jobToBeEdited.job_description}</span></li>
              </ul>
              <p class="editP"><i class="fa-solid fa-triangle-exclamation"></i>Please click on <span class="bold">Edit Job</span> to show the edits</p>
              <button class="job-btn" class="goToEdit"><a href="EditJob.html">Go to Edit job<i class="fa-solid fa-arrow-up-right-from-square"></i></a></button>
              <button class="job-btn" onclick="editJob(${jobToBeEdited.job_id})">Edit job<i class="fa-regular fa-pen-to-square"></i></button>
              <button class="job-btn" onclick="deleteJob(${jobToBeEdited.job_id})">Delete Job<i class="fa-regular fa-trash-can"></i></button>
          `;
    }
  }
}