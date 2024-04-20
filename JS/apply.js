//validates the form fields before submission
function validateForm() {
    // Retrieving form field values
    var fn = document.getElementById("firstname").value;
    var ln = document.getElementById("lastname").value;
    var e = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var exp = document.getElementById("experience").value;
    var position = document.getElementById("position").value;
    var JobID = document.getElementById("jobID").value;
    var Date = document.getElementById("Date").value;
    var resume = document.getElementById("resume").files;
    var coverletter = document.getElementById("coverletter").value;
    var words = coverletter.split(/\s+/);
    var wordcount = words.length;
    var isvalid = true;

    // Validation checks for each field
    // If any validation fails, an error message is displayed
    // and the function returns false, preventing form submission
    if (fn.trim() === "") {
        document.getElementById("fn-error").innerText = "First name can't be blank";
       
        return false;
    } else {
        document.getElementById("fn-error").innerText = "";
    }

    if (ln.trim() === "") {
        document.getElementById("ln-error").innerText = "Last name can't be blank";
       
        return false;
    } else {
        document.getElementById("ln-error").innerText = "";
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(e)) {
        document.getElementById("email-error").innerText = "Please enter a valid email address";
       
        return false;
    } else {
        document.getElementById("email-error").innerText = "";
    }
    if (phone.trim() === "") {
        document.getElementById("phone-error").innerText = "Phone number can't be blank";
       
        return false;
    }

    if (isNaN(phone)) {
        document.getElementById("phone-error").innerText = "Phone number must be numeric";
        
        return false;
    } else if (phone.length != 11) {
        document.getElementById("phone-error").innerText = "Phone number must be 11 digits";
        
        return false;
    } else {
        document.getElementById("phone-error").innerText = "";
    }
    if (exp.trim() === "") {
        document.getElementById("exp-error").innerText = "Years of work experience can't be blank";
        
        return false;
    } else {
        document.getElementById("exp-error").innerText = "";
    }

    if (position.trim() === "") {
        document.getElementById("position-error").innerText = "Position field can't be empty";
       
        return false;
    } else {
        document.getElementById("position-error").innerText = "";
    }

    if (JobID.trim() === "") {
        document.getElementById("jobID-error").innerText = "Job ID field can't be empty";
       
        return false;
    } else {
        document.getElementById("jobID-error").innerText = "";
    }

    if (Date.trim() === "") {
        document.getElementById("Date-error").innerText = "Date field can't be empty";
       
        return false;
    } else {
        document.getElementById("Date-error").innerText = "";
    }


    if (resume.length === 0) {
        document.getElementById("resume-error").innerText = "Your Resume must be added";
        
        return false;
    } else {
        document.getElementById("resume-error").innerText = "";
    }
    if (coverletter.trim() === "") {
        document.getElementById("coverletter-error").innerText = "Cover letter field can't be empty";
       
        return false;
    } else if (wordcount < 100) {
        document.getElementById("coverletter-error").innerText = "Cover letter must be more than 100 words";
        
        return false;
    } else {
        document.getElementById("coverletter-error").innerText = "";
    }

    return true;
}

//confirm on the user before submitting
function confirmation() {
    return confirm("Are you sure You want to submit ");
}

// Wait for the DOM content to be loaded before executing script
document.addEventListener('DOMContentLoaded', function() {
    // Select the form element
   
    var form = document.querySelector('form');
    // Add event listener for form submission (event lisntener wait for an event to occur then do  a function)
    form.addEventListener('submit', function(event) {
        event.preventDefault();// Prevent default form submission behavior
        
         // Check if form validation and confirmation are successful
        if (validateForm() && confirmation()) {
            form.submit();// Submit the form

                 // Capture form data
                 var formData = {
                    firstname: document.getElementById("firstname").value,
                    lastname: document.getElementById("lastname").value,
                    email: document.getElementById("email").value,
                    phone: document.getElementById("phone").value,
                    experience: document.getElementById("experience").value,
                    position: document.getElementById("position").value,
                    jobID: document.getElementById("jobID").value,
                    Date: document.getElementById("Date").value,
                    resume: document.getElementById("resume").files,
                    coverletter: document.getElementById("coverletter").value
                };
   
                 // Fetch job details associated with Job ID
                //  var jobDetails = getJobDetails(formData.jobID);

                 // Store application details in local storage
                var appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
                 appliedJobs.push({
                // jobDetails: jobDetails,
                formData: formData,
                appliedDate: new Date().toISOString()


            });
            localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));

            // Redirect to the home page after submission
            window.location.href = 'Home.html';


        }
    });
});
