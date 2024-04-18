function validateForm() {

    var form = document.getElementById("my-form");
    const errorMessages = document.querySelectorAll(".error-message");

    var jobID = document.getElementById("Job_ID").value;
    var jobTitle = document.getElementById("job_title").value;
    var salary = document.getElementById("salary").value;
    var companyName = document.getElementById("company_name").value;
    var jobStatus = document.getElementsByName("job_status");
    var user = document.getElementById("user").value;
    var location = document.getElementById("location").value;
    var workType = document.getElementById("WorkType").value;
    var description = document.getElementById("description").value;
    var yearsOfExperience = document.getElementById("years_of_experience").value;
    var isvalid = true;

     // Validate job ID
  const jobIdInput = document.getElementById("ID");
  if (jobIdInput.value.trim() === "") {
    const jobIdMessage = document.querySelector(
      '[name="ID"] + .error-message'
    );
    jobIdMessage.textContent = "Please enter the Job ID.";
    jobIdMessage.classList.add("active");
    isValid = false;
  }

  if (typeof jobIdInput != "number") {
    const jobIdMessage = document.querySelector(
      '[name="ID"] + .error-message'
    );
    jobIdMessage.textContent = "Please enter a valid Job ID.";
    jobIdMessage.classList.add("active");
    isValid = false;
  }

  // Validate job title
  const jobTitleInput = document.getElementById("job_title");
  if (jobTitleInput.value.trim() === "") {
    const jobTitleMessage = document.querySelector(
      '[name="job_title"] + .error-message'
    );
    jobTitleMessage.textContent = "Please enter the Job Title.";
    jobTitleMessage.classList.add("active");
    isValid = false;
  }

  // Validate salary
  const salaryInput = document.getElementById("salary");
  
  if (salaryInput.value.trim() === "") {
    const salaryMessage = document.querySelector(
      '[name="salary"] + .error-message'
    );
    salaryMessage.textContent =
      //"Please enter a valid salary format (e.g., 12345.67).";
      "Please enter the Salary.";
    salaryMessage.classList.add("active");
    isValid = false;
  }

  // Validate company name
  const companyNameInput = document.getElementById("company_name");
  if (companyNameInput.value.trim() === "") {
    const companyNameMessage = document.querySelector(
      '[name="company_name"] + .error-message'
    );
    companyNameMessage.textContent = "Please enter the Company Name.";
    companyNameMessage.classList.add("active");
    isValid = false;
  }

  // Check if a job status is selected 
  const jobStatusRadio = document.querySelector(
    'input[name="job_status"]:checked'
  );
  if (!jobStatusRadio) {
    const jobStatusMessage = document.querySelector(
      '[name="job_status"] + .error-message'
    );
    jobStatusMessage.textContent = "Please select a Job Status.";
    jobStatusMessage.classList.add("active");
    isValid = false;
  }

  const createdInput = document.getElementById("user");
  if (createdInput.value.trim() === "") {
    const createdMessage = document.querySelector(
      '[name="user"] + .error-message'
    );
    createdMessage.textContent =
      "Please enter the Created date in the required format (e.g., YYYY-MM-DD).";
    createdMessage.classList.add("active");
    isValid = false;
  }

  const yearsOfExperienceInput = document.getElementById("years_of_experience");
  if (yearsOfExperienceInput.value.trim() === "") {
    const yearsOfExperienceMessage = document.querySelector(
      '[name="years_of_experience"] + .error-message'
    );
    yearsOfExperienceMessage.textContent =
      "Please enter a valid number for Years of Experience.";
    yearsOfExperienceMessage.classList.add("active");
    isValid = false;
  }

  const locationInput = document.getElementById("location");
  if (locationInput.value.trim() === "") {
    const locationMessage = document.querySelector(
      '[name="location"] + .error-message'
    );
    locationMessage.textContent = "Please enter the Location.";
    locationMessage.classList.add("active");
    isValid = false;
  }
  const JobDescription = document.getElementById("description");
  if (JobDescription.value.trim() === "") {
    const locationMessage = document.querySelector(
      '[name="description"] + .error-message'
    );
    locationMessage.textContent = "Please enter the Job description.";
    locationMessage.classList.add("active");
    isValid = false;
  }

  return isValid;

}


const submitInput = document.getElementById("submit");
function handleFormSubmit(event) {
  if (!validateForm()) {
    event.preventDefault();
    return false;
  }
}

