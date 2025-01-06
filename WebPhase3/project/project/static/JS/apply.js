function validateForm() {
  const form = document.getElementById("apply-form");

  const fieldMappings = {
    id_firstname: "Please enter your First Name.",
    id_lastname: "Please enter your Last Name.",
    id_email: "Please enter a valid Email Address.",
    id_phone: "Phone Number has to be 11 digits only.",
    id_YearOfExperience: "Please enter a valid Years of Experience.",
    id_CompanyName: "Please enter the Company Name.",
    id_jobID: "Please enter the Job ID.",
    id_Date: "Please enter the Date.",
    id_resume: "Please upload your Resume (PDF only).",
    id_coverletter: "Please enter your Cover Letter (minimum 100 characters).",
  };

  let isValid = true;

  [...form.elements].forEach((element) => {
    const errorMessage = document.getElementById(`${element.id}-error`);
    if (element.id in fieldMappings && errorMessage) {
      let error = "";

      if (element.value.trim() === "") {
        error = fieldMappings[element.id];
      } else {
        switch (element.id) {
          case "id_email":
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(element.value.trim())) {
              error = "Please enter a valid Email Address.";
            }
            break;
          case "id_phone":
            const phoneRegex = /^\d{11}$/;
            if (!phoneRegex.test(element.value.trim())) {
              error = "Phone Number has to be 11 digits only.";
            }
            break;
          case "id_YearOfExperience":
            const experienceValue = parseInt(element.value.trim(), 10);
            if (isNaN(experienceValue) || experienceValue <= 0) {
              error = "Please enter a valid positive number for Years of Experience.";
            }
            break;
          case "id_resume":
            const file = element.files[0];
            if (file && file.type !== "application/pdf") {
              error = "Please upload your Resume (PDF only).";
            }
            break;
             case "id_coverletter":
               const charCount = element.value.trim().length;
               if (charCount < 100) {
                 error = "Cover Letter must be at least 100 characters.";
               }
             break;
          default:
            break;
        }
      }

      if (error) {
        errorMessage.textContent = error;
        errorMessage.classList.add("active");
        isValid = false;
      } else {
        errorMessage.textContent = "";
        errorMessage.classList.remove("active");
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
  const form = document.getElementById("apply-form");
  form.addEventListener("submit", handleFormSubmit);

  const ValidationButton = document.getElementById("submit-button");
  ValidationButton.addEventListener("click", validateForm);
});