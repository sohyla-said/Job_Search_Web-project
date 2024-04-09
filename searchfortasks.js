const availableJobs = {
  "DevOps Engineer": "devopseng.html",
  "DevOps Consultant - IBM Cloud pak": "devopscon.html",
  "Software Testing Engineer": "softwaretesting.html",
  "Full Stack Developer": "fullstack.html",
  "Principal Software Engineer": "principal.html"
};
const jobTitleInput = document.getElementById("jobTitle");
const jobSearchForm = document.getElementById("jobSearchForm");
const jobTitleError = document.getElementById("jobTitleError");

jobSearchForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const enteredJobTitle = jobTitleInput.value.trim();
  const redirectUrl = availableJobs[enteredJobTitle];
  
  if (redirectUrl) {
    window.location.href = redirectUrl; // Redirect the user to the details page
  } else {
    jobTitleError.textContent = "Please enter a job title from the available jobs list.";
  }
});
