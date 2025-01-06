const userCheckbox = document.getElementById("is_User");
const companyAdminCheckbox = document.getElementById("is_Company_admin");

userCheckbox.addEventListener("change", function () {
  handleCheckboxChange(this);
});
companyAdminCheckbox.addEventListener("change", function () {
  handleCheckboxChange(this);
});

function handleCheckboxChange(clickedCheckbox) {
  const otherCheckbox = document.getElementById(
    clickedCheckbox.id === "is_User" ? "is_Company_admin" : "is_User"
  );
  otherCheckbox.checked = false;
}
const forgotPasswordElement = document.querySelector(".forgot-password");

forgotPasswordElement.addEventListener("click", handleForgotPasswordClick);

function handleForgotPasswordClick() {
  // Create the modal container
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("forgot-password-modal");

  // Create the modal content
  const modalContent = document.createElement("form");
  modalContent.classList.add("forgot-password-modal-content");

  // Create the modal header
  const modalHeader = document.createElement("h3");
  modalHeader.textContent = "Reset Your Password";
  modalContent.appendChild(modalHeader);

  // Create the form for email input
  const form = document.createElement("form");
  form.method = "POST";

  // Create the email input field
  const emailField = document.createElement("input");
  emailField.type = "email";
  emailField.name = "email";
  emailField.placeholder = "Enter your email address";
  emailField.required = true;

  // Create a success message element
  const successMessage = document.createElement("p");
  successMessage.classList.add("success-message");
  successMessage.textContent =
    "Success,A password reset link has been sent to your email.";
  successMessage.style.fontSize = "1rem";
  successMessage.style.color = "#00BFFF";
  successMessage.style.display = "none";
  successMessage.style.margin = "-10px 0 5px";
  modalContent.appendChild(successMessage);

  // Create a submit button
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Send Reset Link";

  // Append elements to form
  form.appendChild(emailField);
  form.appendChild(submitButton);

  // Append form to modal content
  modalContent.appendChild(form);

  // Create a close button
  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.classList.add("close-button");
  closeButton.addEventListener("click", () => {
    modalContainer.remove();
  });

  // Append close button to modal content
  modalContent.appendChild(closeButton);

  // Append modal content to modal container
  modalContainer.appendChild(modalContent);

  // Add a modal overlay effect
  const modalOverlay = document.createElement("div");
  modalOverlay.addEventListener("click", () => {
    modalContainer.remove();
  });
  document.body.appendChild(modalOverlay);

  // Append modal container to body
  document.body.appendChild(modalContainer);

  // Handle form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    const email = emailField.value;
    console.log(`Sending password reset email to: ${email}`);

    // Simulate successful email sending
    successMessage.style.display = "block";
    submitButton.disabled = true;
    setTimeout(() => {
      modalContainer.remove();
    }, 3000);
  });
}

const signInForm = document.getElementById("signIn-form");

signInForm.addEventListener("submit", (e) => {
  var isUser = document.getElementById("is_User").checked;
  var isCompanyAdmin = document.getElementById("is_Company_admin").checked;

  if (!isUser && !isCompanyAdmin) {
    alert('Please select either "User" or "Company Admin".');
    e.preventDefault();
    return;
  }
  

  
});
