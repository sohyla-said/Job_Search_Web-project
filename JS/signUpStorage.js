// Assume user is not admin at first
const currentUser = new User("", "", "", false);

document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.querySelector(
    ".form-container.sign-up-container form"
  );

  signupForm.addEventListener("submit", function submitForm(event) {
    event.preventDefault();

    if (getUserByEmail(email)) {
      alert("An account with this email already exists. Please Login instead.");
      return;
    }

    // Create new user and store data in local storage
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const isCompanyAdmin = document.getElementById("is_Company_admin").value;
    var newUser = new User(username, email, password, isCompanyAdmin);
    currentUser = newUser;
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    localStorage.setItem(email, JSON.stringify(newUser)); // Optional: Store user data by email

    if (isCompanyAdmin) {
      document.location.href = "createdJobs.html";
    } else {
      document.location.href = "availablejobs.html";
    }
    signupForm.reset();
  });
});

function getUserByEmail(email) {
  var userEmail = localStorage.getItem(email);
  // if there is a key with this email we parse it so the data is not stored as string anymore but as a user object again.
  if (userEmail) {
    return JSON.parse(userData);
  } else {
    return null;
  }
}
