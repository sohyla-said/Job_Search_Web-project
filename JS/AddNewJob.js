function validateForm() {
  var form = document.getElementById("my-form");

  let isValid = true;

  // Validate job ID
  const jobIdInput = document.getElementById("Job_ID");
  const jobIdError = document.getElementById("jobIdError");
  if (jobIdInput.value.trim() === "") {
    jobIdError.textContent = "Please enter the Job ID.";
    jobIdError.classList.add("active");
    isValid = false;
  } else {
    jobIdError.textContent = "";
    jobIdError.classList.remove("active");
  }

  // Validate job title
  const jobTitleInput = document.getElementById("job_title");
  const jobTitleError = document.getElementById("jobTitleError");
  if (jobTitleInput.value.trim() === "") {
    jobTitleError.textContent = "Please enter the Job Title.";
    jobTitleError.classList.add("active");
    isValid = false;
  } else {
    jobTitleError.textContent = "";
    jobTitleError.classList.remove("active");
  }

  // Validate salary
  const salaryInput = document.getElementById("salary");
  const salaryError = document.getElementById("salaryError");
  if (salaryInput.value.trim() === "") {
    salaryError.textContent = "Please enter the Salary.";
    salaryError.classList.add("active");
    isValid = false;
  } else {
    salaryError.textContent = "";
    salaryError.classList.remove("active");
  }

  // Validate company name
  const companyNameInput = document.getElementById("company_name");
  const companyNameError = document.getElementById("companyNameError");
  if (companyNameInput.value.trim() === "") {
    companyNameError.textContent = "Please enter the Company Name.";
    companyNameError.classList.add("active");
    isValid = false;
  } else {
    companyNameError.textContent = "";
    companyNameError.classList.remove("active");
  }

  // Validate job status
  const openRadio = document.getElementById("open");
  const closeRadio = document.getElementById("close");
  const jobStatusError = document.getElementById("jobStatusError");
  if (!openRadio.checked && !closeRadio.checked) {
    jobStatusError.textContent = "Please select a Job Status.";
    jobStatusError.classList.add("active");
    isValid = false;
  } else {
    jobStatusError.textContent = "";
    jobStatusError.classList.remove("active");
  }

  // Validate created date
  const createdInput = document.getElementById("user");
  const createdError = document.getElementById("createdError");
  if (createdInput.value.trim() === "") {
    createdError.textContent = "Please enter the Created date.";
    createdError.classList.add("active");
    isValid = false;
  } else {
    createdError.textContent = "";
    createdError.classList.remove("active");
  }

  // Validate years of experience
  const yearsOfExperienceInput = document.getElementById("years_of_experience");
  const yearsOfExperienceError = document.getElementById(
    "yearsOfExperienceError"
  );
  if (yearsOfExperienceInput.value.trim() === "") {
    yearsOfExperienceError.textContent = "Please enter Years of Experience.";
    yearsOfExperienceError.classList.add("active");
    isValid = false;
  } else {
    yearsOfExperienceError.textContent = "";
    yearsOfExperienceError.classList.remove("active");
  }

  // Validate location
  const locationInput = document.getElementById("location");
  const locationError = document.getElementById("locationError");
  if (locationInput.value.trim() === "") {
    locationError.textContent = "Please enter the Location.";
    locationError.classList.add("active");
    isValid = false;
  } else {
    locationError.textContent = "";
    locationError.classList.remove("active");
  }

  // Validate job description
  const descriptionInput = document.getElementById("description");
  const descriptionError = document.getElementById("descriptionError");
  if (descriptionInput.value.trim() === "") {
    descriptionError.textContent = "Please enter the Job Description.";
    descriptionError.classList.add("active");

    isValid = false;
  } else {
    descriptionError.textContent = "";
    descriptionError.classList.remove("active");
  }

  return isValid;
}

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
      let addformData = JSON.parse(localStorage.getItem("addformData")) || [];

      const newFormData = {
        jobId: document.getElementById("Job_ID").value,
        jobTitle: document.getElementById("job_title").value,
        salary: document.getElementById("salary").value,
        companyName: document.getElementById("company_name").value,
        jobStatus: document.querySelector('input[name="job_status"]:checked')
          .value,
        user: document.getElementById("user").value,
        yearsOfExperience: document.getElementById("years_of_experience").value,
        location: document.getElementById("location").value,
        description: document.getElementById("description").value,
        workType: document.getElementById("WorkType").value,
      };

      addformData.push(newFormData);

      localStorage.setItem("addformData", JSON.stringify(addformData));
    }
  });
});
