const availableJobs = ["DevOps Engineer", "DevOps Consultant - IBM Cloud pak", "Software Testing Engineer", "Full Stack Developer", "Principal Software Engineer"];
    const jobTitleInput = document.getElementById("jobTitle");
    const jobSearchForm = document.getElementById("jobSearchForm");
    const jobTitleError = document.getElementById("jobTitleError");

    jobSearchForm.addEventListener("submit", function(event) {
      const enteredJobTitle = jobTitleInput.value.trim();
      if (!availableJobs.includes(enteredJobTitle)) {
        jobTitleError.textContent = "Please enter a job title from the available jobs list.";
        event.preventDefault(); 
      } else {
        jobTitleError.textContent = ""; 
      }
    });
