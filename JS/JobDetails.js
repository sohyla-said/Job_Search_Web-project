const Jobs = JSON.parse(localStorage.getItem("AllJobs"));

document.addEventListener("DOMContentLoaded", function () {
  // Getting the needed job from the URL search parameters we passed in the JobList.js
  function getJobIDfromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
  }

  // then we get the job with the required id from the jobs array and store it in another variable to easily access and use it
  const JobID = parseInt(getJobIDfromURL());
  var selectedJob = Jobs.find((job) => {
    console.log("Comparing job ID:", job.job_id);
    console.log("With:", JobID);
    return job.job_id === JobID;
  });
  let addedJobs = JSON.parse(localStorage.getItem("addformData")) || [];

  function displayJobDetails() {
    if (selectedJob) {
      document.getElementsByClassName("job-displayed-image")[0].innerHTML = `
      <img class="job-image" alt="${selectedJob.job_title}" src="${selectedJob.imagePath}">`;
      const jobDetailsDiv =
        document.getElementsByClassName("main-details-box")[0];
      jobDetailsDiv.innerHTML = `
                <div class="job-details-container">
                    <h2>${selectedJob.job_title}</h2>
                  
                    <div class="job-details">
                        <h2>Job Details</h2>
                        <p><span>Location: </span> ${selectedJob.location}</p>
                        <p><span>Company: </span> ${selectedJob.company_name}</p>
                        <p><span>Salary: </span> $${selectedJob.salary}</p>
                        <p><span>Job Status: </span> ${selectedJob.job_status}</p>
                        <p><span>Years of Experience: </span> ${selectedJob.years_of_experience}</p>
                        <p><span>Work Type: </span>${selectedJob.WorkType}</p>
                        <p><span>Created: </span>${selectedJob.created}</p>
                        <p id="job-description"><span>Description: </span>${selectedJob.job_description}</p>
                        <button class="apply-button">Apply</button>
                    </div>
                </div>
            `;
    } else if (addedJobs.length === 0) {
      const jobDetailsDiv =
        document.getElementsByClassName("main-details-box")[0];
      jobDetailsDiv.innerHTML = "<p>Sorry, job not found.</p>";
    }
    addedJobs.forEach((addedJob) => {
      const addedJobDiv = document.createElement("div");
      addedJobDiv.classList.add("added-job");
      addedJobDiv.innerHTML = `
      <img src="${addedJob.imagePath}" alt="${addedJob.jobTitle}" class="job-image">
      <h2>${addedJob.jobTitle}</h2>
      <p><span>Location: </span> ${addedJob.location}</p>
      <p><span>Company: </span> ${addedJob.companyName}</p>
      <p><span>Salary: </span> $${addedJob.salary}</p>
      <p><span>Job Status: </span> ${addedJob.jobStatus}</p>
      <p><span>Years of Experience: </span> ${addedJob.yearsOfExperience}</p>
      <p><span>Work Type: </span>${addedJob.workType}</p>
      <p><span>Created: </span>${addedJob.user}</p>
      <p id="job-description"><span>Description: </span>${addedJob.description}</p>
      <button class="apply-button">Apply</button>
    `;
      document
        .getElementsByClassName("main-details-box")[0]
        .appendChild(addedJobDiv);
    });
  }

  displayJobDetails();
});
