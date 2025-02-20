const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

function toggleCompanyField(checkbox) {
  const companyNameField = document.getElementById("company_name");
  companyNameField.disabled = !checkbox.checked;

  if (!checkbox.checked) {
    companyNameField.value = "";
  }
}

const userCheckbox = document.getElementById("is_user");
const companyAdminCheckbox = document.getElementById("is_company_admin");

userCheckbox.addEventListener("change", function () {
  handleCheckboxChange(this);
});
companyAdminCheckbox.addEventListener("change", function () {
  handleCheckboxChange(this);
});

function handleCheckboxChange(clickedCheckbox) {
  const otherCheckbox = document.getElementById(
    clickedCheckbox.id === "is_user" ? "is_company_admin" : "is_user"
  );
  otherCheckbox.checked = false;
}

const user_Checkbox = document.getElementById("is_User");
const companyAdmin_Checkbox = document.getElementById("is_Company_admin");

user_Checkbox.addEventListener("change", function () {
  handlecheckboxChange(this);
});
companyAdmin_Checkbox.addEventListener("change", function () {
  handlecheckboxChange(this);
});

function handlecheckboxChange(clicked_Checkbox) {
  const othercheckbox = document.getElementById(
    clicked_Checkbox.id === "is_User" ? "is_Company_admin" : "is_User"
  );
  othercheckbox.checked = false;
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

function comparePasswords() {
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm_password");
  const confirmPasswordMessage = document.getElementById(
    "company_name_message"
  );
  confirmPasswordMessage.textContent = "";
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordInput.classList.add("error");
    confirmPasswordMessage.textContent = " Passwords do not match.";
    confirmPasswordMessage.style.color = "red";
    confirmPasswordMessage.style.fontSize = "1rem";
    return false;
  } else {
    confirmPasswordInput.classList.remove("error");
    return true;
  }
}

function submitForm(event) {
  event.preventDefault();
  var isUser = document.getElementById("is_user").checked;
  var isCompanyAdmin = document.getElementById("is_company_admin").checked;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm_password").value;
  var email = document.getElementById("email").value;
  var companyName = document.getElementById("company_name").value;

  // Check if all required fields are filled
  if (!username) {
    alert("Please fill out this field Username.");
    return;
  } else if (!password) {
    alert("Please fill out this field Password.");
    return;
  } else if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  } else if (!confirmPassword) {
    alert("Please fill out this field confirm password.");
    return;
  } else if (!email) {
    alert("Please fill out this field Email.");
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please include an "@" in the email address.');
    return;
  } else if (!isUser && !isCompanyAdmin) {
    alert('Please select either "User" or "Company Admin".');
    return;
  } else if (!comparePasswords()) {
    return;
  }
  //   else if (isUser) {
  //   document.location.href = "availablejobs.html";
  //  }
  else if (isCompanyAdmin) {
    if (!companyName) {
      alert("Please fill out this field company name.");
      return;
    }
    // document.location.href = "createdJobs.html";
  }

  // Create new user and store data in local storage
  username = document.getElementById("username").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  isCompanyAdmin = document.getElementById("is_company_admin").checked;

  // Check if username already exists in localStorage
  // if (getUserByUsername(username)) {
  //   alert(
  //     "An account with this username already exists. Please Login instead."
  //   );
  //   return;
  // }

  // var newUser = new User(username, email, password, isCompanyAdmin);
  // currentUser = newUser;
  // localStorage.setItem("currentUser", JSON.stringify(currentUser));
  // localStorage.setItem(username, JSON.stringify(newUser));

  if (isCompanyAdmin) {
    alert("Company Admin account created successfully!");
    var createdJobsUrl = "{% url 'created_jobs' %}";
    document.location.href = createdJobsUrl;
  } else {
    alert("User account created successfully!");
    document.location.href = "JobList.html";
  }

  signupForm.reset();
}
const signupForm = document.querySelector(
  ".form-container.sign-up-container form"
);
signupForm.addEventListener("submit", submitForm);

function submiForm(event) {
  event.preventDefault();
  var isuser = document.getElementById("is_User").checked;
  var iscompanyAdmin = document.getElementById("is_Company_admin").checked;
  if (!isuser && !iscompanyAdmin) {
    alert('Please select either "User" or "Company Admin".');
    return;
  }
  //  else if (isuser) {
  //   document.location.href = "availablejobs.html";
  //  }
  //  else if (iscompanyAdmin) {
  //   document.location.href = "createdJobs.html";
  //  }

  // Fetch username and password when the form is submitted
  var username = document.getElementById("usernames").value;
  var password = document.getElementById("passwords").value;

  // Search for the username in the local storage to confirm user identity
  // var userData = getUserByUsername(username);
  var isCompanyAdmin = document.getElementById("is_Company_admin").checked;
  // if (!username || !password || !userData || userData.password !== password) {
  //   alert("Invalid username or password."); // Inform user of invalid credentials
  // } else if (userData && userData.password === password)
  // {
  // currentUser = userData;
  // localStorage.setItem("currentUser", JSON.stringify(currentUser));
  if (isCompanyAdmin) {
    alert("Company Admin account created successfully!");
    var createdJobsUrl = "{% url 'created_jobs' %}";
    document.location.href = createdJobsUrl;
  } else {
    document.location.href = "JobList.html";
  }
  // }
  signInForm.reset();
}
const signInForm = document.querySelector(
  ".form-container.sign-in-container form"
);
signInForm.addEventListener("submit", submiForm);

// function getUserByUsername(username) {
//   var userUsername = localStorage.getItem(username);
//   // if there is a key with this username we parse it so the data is not stored as string anymore but as a user object again.
//   if (userUsername !== null && userUsername !== "") {
//     return JSON.parse(userUsername);
//   } else {
//     return null;
//   }
// }
