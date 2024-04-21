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

  // Display function Customize it as you like this is just the layout
  function displayJobDetails() {
    if (selectedJob) {
      document.getElementsByClassName("job-displayed-image")[0].innerHTML = `
      <img class="job-image" alt="${selectedJob.job_title}" src="${selectedJob.imagePath}">`;
      const jobDetailsDiv =
        document.getElementsByClassName("main-details-box")[0];
      jobDetailsDiv.innerHTML = `
                <div class="job-details-container">
                    <h2>${selectedJob.job_title}</h2>
                    <img src="/imgs/${selectedJob.imagePath}" alt="${selectedJob.company_name}" class="job-details-img">
                    <div class="job-details">
                        <h2>Job Details</h2>
                        <p>Location: ${selectedJob.location}</p>
                        <p>Company: ${selectedJob.company_name}</p>
                        <p>Salary: $${selectedJob.salary}</p>
                        <p>Job Status: ${selectedJob.job_status}</p>
                        <p>Years of Experience: ${selectedJob.years_of_experience}</p>
                        <p>Work Type: ${selectedJob.WorkType}</p>
                        <p>Created: ${selectedJob.created}</p>
                        <p>Description: ${selectedJob.job_description}</p>
                        <button class="apply-button">Apply</button>
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
