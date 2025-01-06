function validateForm() {
  const form = document.getElementById("my-form");

  const fieldMappings = {
    id_title: "Please enter the Job Title.",
    id_salary: "Please enter the Salary.",
    id_CompanyName: "Please enter the Company Name.",
    id_YearsOfExperience:
      "Please enter a valid number for Years of Experience.",
    id_Location: "Please enter the Location.",
    id_description: "Please enter the Job description.",
    id_WorkType: "Please enter the Work Type.",
  };
  let isValid = true;

  [...form.elements].forEach((element) => {
    if (element.id in fieldMappings) {
      console.log(`Checking element with id: ${element.id}`);
      const errorMessage = document.getElementById(`${element.id}-error`);
      if (errorMessage) {
        console.log(`Found error message element for ${element.id}`);
        if (element.value.trim() === "") {
          console.log(`Validation failed for ${element.id}`);
          errorMessage.textContent = fieldMappings[element.id];
          errorMessage.classList.add("active");
          isValid = false;
        } else {
          errorMessage.textContent = "";
          errorMessage.classList.remove("active");
        }
      } else {
        console.error("Error message element not found for", element.id);
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

  const resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", function (event) {
    event.preventDefault();
    form.reset();
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((errorMessage) => {
      errorMessage.textContent = "";
      errorMessage.classList.remove("active");
    });
  });

  const ValidationButton = document.getElementById("submit-button");
  ValidationButton.addEventListener("click", validateForm);
});