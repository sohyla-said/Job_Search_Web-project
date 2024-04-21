
const Jobs = JSON.parse(localStorage.getItem("AllJobs"));

document.addEventListener("DOMContentLoaded", function () {
  // Getting the needed job from the URL search parameters we passed in the JobList.js
  function getJobIDfromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
  }

  const JobID = parseInt(getJobIDfromURL());
  var selectedJob = Jobs.find((job) => {
    console.log("Comparing job ID:", job.job_id);
    console.log("With:", JobID);
    return job.job_id === JobID;
  });

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
                        <button class="apply-button"><a href="apply.html">Apply</a></button>
                    </div>
                </div>
            `;
    } else {
      const jobDetailsDiv =
        document.getElementsByClassName("main-details-box")[0];
      jobDetailsDiv.innerHTML = "<p>Sorry, job not found.</p>";
    }
  }

  displayJobDetails();
});