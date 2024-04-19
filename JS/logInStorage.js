document.addEventListener("DOMContentLoaded", function () {
const signInForm = document.querySelector('.form-container.sign-in-container form');
signInForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
});

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Search for the email in the local storage to confirm user identity
        const currentUser = getUserByEmail(email);
        const isCompanyAdmin = document.getElementById("is_Company_admin").value;
        if (currentUser && currentUser.password === password) {
              if (!isCompanyAdmin) {
                  document.location.href = "availablejobs.html"; 
              } 
              else {
                  document.location.href = "createdJobs.html"; 
              }  
          currentUser = userEmail;
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          signInForm.reset();
        } 
        else {
          alert("Invalid email or password."); // Inform user of invalid credentials
        }
      });

    function getUserByEmail(email) {
      var userString = localStorage.getItem(email);
      if (userString) {
        return JSON.parse(userString);
      } else {
        return null;
      }
    }
