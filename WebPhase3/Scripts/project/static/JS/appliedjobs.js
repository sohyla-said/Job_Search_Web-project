// // Retrieve applied jobs from local storage


// const appliedJobs = JSON.parse(localStorage.getItem("appliedFormDataArray"));

// class Job {
//   constructor(position, CompanyName, date) {
//     this.position = position;
//     this.CompanyName = CompanyName;
//     this.date = date;
//   }

//   displayJob() {
//     const { position, CompanyName, date } = this;
//     const jobContainer = document.createElement("div");
//     jobContainer.classList.add("job-container");
//     jobContainer.innerHTML = `
//       <div class="jobdetails">
//         <p>Job Details:</p>
//         <ul>
//           <li>Title: <span>${position}</span></li>
//           <li>Company: <span>${CompanyName}</span></li>
//           <li>Date: <span>${date}</span></li>
//         </ul>
//       </div>
//     `;
//     document.getElementById("applied-jobs-container").appendChild(jobContainer);
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   function displayAllJobs() {
//     const jobsContainer = document.getElementById("applied-jobs-container");
//     if (appliedJobs && appliedJobs.length > 0) {
//       appliedJobs.forEach((job) => {
//         const jobInstance = new Job(job.position, job.CompanyName, job.date);
//         jobInstance.displayJob();
//       });
//     } else {
//       jobsContainer.innerHTML = "<p>No applied jobs found.</p>";
//     }
//   }

//   displayAllJobs();
// });
