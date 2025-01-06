
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
const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", (e) => {
  var isUser = document.getElementById("is_user").checked;
  var isCompanyAdmin = document.getElementById("is_company_admin").checked;
  var companyName = document.getElementById("company_name").value;

  if (!isUser && !isCompanyAdmin) {
    alert('Please select either "User" or "Company Admin".');
    e.preventDefault();
    return;
  }
  if (isCompanyAdmin && !companyName) {
    alert("Please fill out the company name field.");
    e.preventDefault();
    return;
  }

  
});
