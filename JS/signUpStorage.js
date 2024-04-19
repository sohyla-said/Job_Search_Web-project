var currentUser = new User("", "", "", false);
document.addEventListener("DOMContentLoaded", function () {
  var signupForm = document.querySelector(
    ".form-container.sign-up-container form"
  );

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Create new user and store data in local storage
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var isCompanyAdmin = document.getElementById("is_company_admin").checked;

    // Check if username already exists in localStorage
    if (getUserByUsername(username)) {
      alert(
        "An account with this username already exists. Please Login instead."
      );
      return;
    }

    var newUser = new User(username, email, password, isCompanyAdmin);
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    localStorage.setItem(username, JSON.stringify(newUser));

    if (isCompanyAdmin) {
      alert("Company Admin account created successfully!");
    } else {
      alert("User account created successfully!");
    }
    document.location.href = "Home.html";
    signupForm.reset();
  });
});

function getUserByUsername(username) {
  var userUsername = localStorage.getItem(username);
  // if there is a key with this username we parse it so the data is not stored as string anymore but as a user object again.
  if (userUsername !== null && userUsername !== "") {
    return JSON.parse(userUsername);
  } else {
    return null;
  }
}
