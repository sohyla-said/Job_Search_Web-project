document.addEventListener("DOMContentLoaded", function () {
  var signInForm = document.querySelector(
    ".form-container.sign-in-container form"
  );

  signInForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Fetch username and password when the form is submitted
    var username = document.getElementById("usernames").value;
    var password = document.getElementById("passwords").value;

    // Search for the username in the local storage to confirm user identity
    var userData = getUserByUsername(username);
    var isCompanyAdmin = document.getElementById("is_Company_admin").checked;
    console.log(password);
    console.log(userData.password);
    if (userData && userData.password === password) {
      currentUser = userData;
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      if (isCompanyAdmin) {
        document.location.href = "createdJobs.html";
      } else {
        document.location.href = "availablejobs.html";
      }
    } else {
      alert("Invalid email or password."); // Inform user of invalid credentials
    }

    // Reset the form after submission
    signInForm.reset();
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
