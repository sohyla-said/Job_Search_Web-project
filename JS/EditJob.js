function validateForm() {
  var form = document.getElementById("my-form");
  const errorMessages = document.querySelectorAll(".error-message");


  let isValid = true;

  // Validate job ID
  const jobIdInput = document.getElementById("job_id");
  if (jobIdInput.value.trim() === "") {
    const jobIdMessage = document.querySelector(
      '[name="job_id"] + .error-message'
    );
    jobIdMessage.textContent = "Please enter the Job ID.";
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

  const createdInput = document.getElementById("created");
  if (createdInput.value.trim() === "") {
    const createdMessage = document.querySelector(
      '[name="created"] + .error-message'
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
  const JobDescription = document.getElementById("job_description");
  if (JobDescription.value.trim() === "") {
    const locationMessage = document.querySelector(
      '[name="job_description"] + .error-message'
    );
    locationMessage.textContent = "Please enter the Job description.";
    locationMessage.classList.add("active");
    isValid = false;
  }

  return isValid;
}

const submitInput = document.getElementById("submit-button");
function handleFormSubmit(event) {
  if (!validateForm()) {
    event.preventDefault();
    return false;
  }
}

document.addEventListener('DOMContentLoaded', function() {
    
  var form = document.querySelector('form');
  
  form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      
      if (validateForm()) {
          
          var EditFormData = {
              job_id: document.getElementById("job_id").value,
              job_title: document.getElementById("job_title").value,
              salary: document.getElementById("salary").value,
              company_name: document.getElementById("company_name").value,
              job_status: document.querySelector('input[name="job_status"]:checked').value,
              created: document.getElementById("created").value,
              years_of_experience: document.getElementById("years_of_experience").value,
              location: document.getElementById("location").value,
              job_description: document.getElementById("job_description").value,
              WorkType: document.getElementById("WorkType").value
          };

          localStorage.setItem('EditFormData', JSON.stringify(EditFormData));
          window.location.href = 'CreatedJobs.html';
      }
  });
});