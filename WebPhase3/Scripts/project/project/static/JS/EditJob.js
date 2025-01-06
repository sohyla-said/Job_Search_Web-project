function validateForm() {
  const form = document.getElementById("my-form");
  const errorMessages = document.querySelectorAll(".error-message");

  const fieldMappings = {
    job_id: "Please enter the Job ID.",
    job_title: "Please enter the Job Title.",
    salary: "Please enter the Salary.",
    company_name: "Please enter the Company Name.",
    created:
      "Please enter the Created date in the correct format (YYYY-MM-DD).",
    years_of_experience: "Please enter a valid number for Years of Experience.",
    location: "Please enter the Location.",
    job_description: "Please enter the Job description.",
    WorkType: "Please select the Work Type.",
  };

  let isValid = true;

  [...form.elements].forEach((element) => {
    if (element.name in fieldMappings) {
      const errorMessage = document.querySelector(
        `[name="${element.id}"] + .error-message`
      );
      if (errorMessage) {
        if (element.value.trim() === "") {
          errorMessage.textContent = fieldMappings[element.name];
          errorMessage.classList.add("active");
          isValid = false;
        } else {
          errorMessage.textContent = "";
          errorMessage.classList.remove("active");
        }
      } else {
        console.error("Error message element not found for", element.name);
      }
    }
  });

  return isValid;
}

function handleFormSubmit(event) {
  event.preventDefault();
  if (validateForm()) {
    event.target.submit();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", handleFormSubmit);
});
