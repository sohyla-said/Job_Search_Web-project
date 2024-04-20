class job{
    constructor(jobTitle, company, jobID, location, workType,created, salary, yearsEXP, jobStatus, desc){
        this.jobTitle = jobTitle;
        this.company = company;
        this.jobID = jobID;
        this.salary = salary;
        this.yearsEXP = yearsEXP;
        this.desc = desc;
        this.location = location;
        this.workType = workType;
        this.created = created;
        this.jobStatus = jobStatus;
    }
}
// var radioInputs1 = document.querySelectorAll('input[name="jobstatus"]');

// var selectedValue = null;

// // Loop through the radio input elements
// radioInputs1.forEach(function(radio) {
//     if (radio.checked) {
//         // Retrieve the value of the selected radio button
//         selectedValue = radio.value;
//     }
// });
//first job
let job1 = new job("DevOps Engineer","Metachain Technologies inc.",1,"Egypt","Remote","2 weeks ago","25 000 EGP","2+","opened","As a DevOps engineer, you'll play a crucial role in optimizing software delivery processes. Working within our team, you'll streamline operations,implement automation, and ensure seamless collaboration between development and operations.");
localStorage.setItem("job1", JSON.stringify(job1));
let parsedJob1 = JSON.parse(localStorage.getItem("job1"));
var radioButtons = document.getElementsByName('input[name="jobstatus"]');
var desiredValue = parsedJob1.jobStatus; // Specify the value you want to set
// Loop through the radio buttons
for (var i = 0; i < radioButtons.length; i++) {
    // Check if the radio button's value matches the desired value
    if (radioButtons[i].value === desiredValue) {
        // Set the checked property of the matching radio button to true
        radioButtons[i].checked = true;
        break; // Exit the loop once the radio button is set
    }
}
let title = parsedJob1.jobTitle;
let company = parsedJob1.company;
let ID = parsedJob1.jobID;
let loc = parsedJob1.location;
let workType = parsedJob1.workType;
let created = parsedJob1.created;
let salary = parsedJob1.salary;
let years_of_experience = parsedJob1.yearsEXP;
let description = parsedJob1.desc;
document.getElementById("job-title").innerHTML=title;
document.getElementById("company").innerHTML=company;
document.getElementById("job-id").innerHTML=ID;
document.getElementById("location").innerHTML=loc;
document.getElementById("work-type").innerHTML=workType;
document.getElementById("created").innerHTML=created;
document.getElementById("salary").innerHTML=salary;
document.getElementById("years-exp").innerHTML=years_of_experience;
document.getElementById("desc").innerHTML=description;

//second job
let job2 = new job("DevOps Consultant - IBM Cloud pak","IBM",2,"Cairo Egypt","on-site","3 weeks ago","30 000 EGP","4+","closed","About the job :</span> this role, you'll work in one of our IBM Consulting Client Innovation Centers (Delivery Centers), where we deliver deep technical and industry expertise to a wide range of public and private sector clients around the world.");
localStorage.setItem("job2", JSON.stringify(job2));
let parsedJob2 = JSON.parse(localStorage.getItem("job2"));
var radioButtons = document.getElementsByName('input[name="jobstatus2"]');
var desiredValue = parsedJob2.jobStatus; // Specify the value you want to set
// Loop through the radio buttons
for (var i = 0; i < radioButtons.length; i++) {
    // Check if the radio button's value matches the desired value
    if (radioButtons[i].value === desiredValue) {
        // Set the checked property of the matching radio button to true
        radioButtons[i].checked = true;
        break; // Exit the loop once the radio button is set
    }
}
let title2 = parsedJob2.jobTitle;
let company2 = parsedJob2.company;
let ID2 = parsedJob2.jobID;
let loc2 = parsedJob2.location;
let workType2 = parsedJob2.workType;
let created2 = parsedJob2.created;
let salary2 = parsedJob2.salary;
let years_of_experience2 = parsedJob2.yearsEXP;
let description2 = parsedJob2.desc;
document.getElementById("job-title2").innerHTML=title2;
document.getElementById("company2").innerHTML=company2;
document.getElementById("job-id2").innerHTML=ID2;
document.getElementById("location2").innerHTML=loc2;
document.getElementById("work-type2").innerHTML=workType2;
document.getElementById("created2").innerHTML=created2;
document.getElementById("salary2").innerHTML=salary2;
document.getElementById("years-exp2").innerHTML=years_of_experience2;
document.getElementById("desc2").innerHTML=description2;

//third job
let job3 = new job("Software Testing Engineer","Valeo",3,"Zayed Egypt","on-site","2 weeks ago","20 000 EGP","2+","opened","As a Software Testing Engineer, you'll play a pivotal role in ensuring the quality and reliability of our software products.You'll design and execute test cases, perform thorough analysis, and report any issues or defects to the development team.");
localStorage.setItem("job3", JSON.stringify(job3));
let parsedJob3 = JSON.parse(localStorage.getItem("job3"));
var radioButtons = document.getElementsByName('input[name="jobstatus3"]');
var desiredValue = parsedJob3.jobStatus; // Specify the value you want to set
// Loop through the radio buttons
for (var i = 0; i < radioButtons.length; i++) {
    // Check if the radio button's value matches the desired value
    if (radioButtons[i].value === desiredValue) {
        // Set the checked property of the matching radio button to true
        radioButtons[i].checked = true;
        break; // Exit the loop once the radio button is set
    }
}
let title3 = parsedJob3.jobTitle;
let company3 = parsedJob3.company;
let ID3 = parsedJob3.jobID;
let loc3 = parsedJob3.location;
let workType3 = parsedJob3.workType;
let created3 = parsedJob3.created;
let salary3 = parsedJob3.salary;
let years_of_experience3 = parsedJob3.yearsEXP;
let description3 = parsedJob3.desc;
document.getElementById("job-title3").innerHTML=title3;
document.getElementById("company3").innerHTML=company3;
document.getElementById("job-id3").innerHTML=ID3;
document.getElementById("location3").innerHTML=loc3;
document.getElementById("work-type3").innerHTML=workType3;
document.getElementById("created3").innerHTML=created3;
document.getElementById("salary3").innerHTML=salary3;
document.getElementById("years-exp3").innerHTML=years_of_experience3;
document.getElementById("desc3").innerHTML=description3;

//fourth job
let job4 = new job("principal Software Engineer","Sumerge",4,"Cairo Egypt","hybrid","2 weeks ago","40 000 EGP","3+","opened","As a Principal Software Engineer, you'll be a key leader in driving technical excellence and innovation within our organization.Your role involves providing strategic direction, architectural guidance, and mentorship to the development team.");
localStorage.setItem("job4", JSON.stringify(job4));
let parsedJob4 = JSON.parse(localStorage.getItem("job4"));
var radioButtons = document.getElementsByName('input[name="jobstatus4"]');
var desiredValue = parsedJob4.jobStatus; // Specify the value you want to set
// Loop through the radio buttons
for (var i = 0; i < radioButtons.length; i++) {
    // Check if the radio button's value matches the desired value
    if (radioButtons[i].value === desiredValue) {
        // Set the checked property of the matching radio button to true
        radioButtons[i].checked = true;
        break; // Exit the loop once the radio button is set
    }
}
let title4 = parsedJob4.jobTitle;
let company4 = parsedJob4.company;
let ID4 = parsedJob4.jobID;
let loc4 = parsedJob4.location;
let workType4 = parsedJob4.workType;
let created4 = parsedJob4.created;
let salary4 = parsedJob4.salary;
let years_of_experience4 = parsedJob4.yearsEXP;
let description4 = parsedJob4.desc;
document.getElementById("job-title4").innerHTML=title4;
document.getElementById("company4").innerHTML=company4;
document.getElementById("job-id4").innerHTML=ID4;
document.getElementById("location4").innerHTML=loc4;
document.getElementById("work-type4").innerHTML=workType4;
document.getElementById("created4").innerHTML=created4;
document.getElementById("salary4").innerHTML=salary4;
document.getElementById("years-exp4").innerHTML=years_of_experience4;
document.getElementById("desc4").innerHTML=description4;

//fifth job
let job5 = new job("Full Stack Developer","Sumerge",5,"Cairo Egypt","hybrid","2 weeks ago","40 000 EGP","3+","opened","As a Principal Software Engineer, you'll be a key leader in driving technical excellence and innovation within our organization.Your role involves providing strategic direction, architectural guidance, and mentorship to the development team.");
localStorage.setItem("job5", JSON.stringify(job5));
let parsedJob5 = JSON.parse(localStorage.getItem("job5"));
var radioButtons = document.getElementsByName('input[name="jobstatus5"]');
var desiredValue = parsedJob4.jobStatus; // Specify the value you want to set
// Loop through the radio buttons
for (var i = 0; i < radioButtons.length; i++) {
    // Check if the radio button's value matches the desired value
    if (radioButtons[i].value === desiredValue) {
        // Set the checked property of the matching radio button to true
        radioButtons[i].checked = true;
        break; // Exit the loop once the radio button is set
    }
}
let title5 = parsedJob5.jobTitle;
let company5 = parsedJob5.company;
let ID5 = parsedJob5.jobID;
let loc5 = parsedJob5.location;
let workType5 = parsedJob5.workType;
let created5 = parsedJob5.created;
let salary5 = parsedJob5.salary;
let years_of_experience5 = parsedJob5.yearsEXP;
let description5 = parsedJob5.desc;
document.getElementById("job-title5").innerHTML=title5;
document.getElementById("company5").innerHTML=company5;
document.getElementById("job-id5").innerHTML=ID5;
document.getElementById("location5").innerHTML=loc5;
document.getElementById("work-type5").innerHTML=workType5;
document.getElementById("created5").innerHTML=created5;
document.getElementById("salary5").innerHTML=salary5;
document.getElementById("years-exp5").innerHTML=years_of_experience5;
document.getElementById("desc5").innerHTML=description5;

//sixth job
let job6 = new job("Full Stack Developer","Sumerge",6,"Cairo Egypt","hybrid","2 weeks ago","40 000 EGP","3+","opened","As a Principal Software Engineer, you'll be a key leader in driving technical excellence and innovation within our organization.Your role involves providing strategic direction, architectural guidance, and mentorship to the development team.");
localStorage.setItem("job6", JSON.stringify(job6));
let parsedJob6 = JSON.parse(localStorage.getItem("job6"));
var radioButtons = document.getElementsByName('input[name="jobstatus5"]');
var desiredValue = parsedJob4.jobStatus; // Specify the value you want to set
// Loop through the radio buttons
for (var i = 0; i < radioButtons.length; i++) {
    // Check if the radio button's value matches the desired value
    if (radioButtons[i].value === desiredValue) {
        // Set the checked property of the matching radio button to true
        radioButtons[i].checked = true;
        break; // Exit the loop once the radio button is set
    }
}
let title6 = parsedJob6.jobTitle;
let company6 = parsedJob6.company;
let ID6 = parsedJob6.jobID;
let loc6 = parsedJob6.location;
let workType6 = parsedJob6.workType;
let created6 = parsedJob6.created;
let salary6 = parsedJob6.salary;
let years_of_experience6 = parsedJob6.yearsEXP;
let description6 = parsedJob6.desc;
document.getElementById("job-title6").innerHTML=title6;
document.getElementById("company6").innerHTML=company6;
document.getElementById("job-id6").innerHTML=ID6;
document.getElementById("location6").innerHTML=loc6;
document.getElementById("work-type6").innerHTML=workType6;
document.getElementById("created6").innerHTML=created6;
document.getElementById("salary6").innerHTML=salary6;
document.getElementById("years-exp6").innerHTML=years_of_experience6;
document.getElementById("desc6").innerHTML=description6;

function deleteJob(jobid){

    // Loop through each item in local storage
    for (var i = 0; i < localStorage.length; i++) {
        // Get the key for each item
        var key = localStorage.key(i);
        if(key[key.length-1] == jobid){
            localStorage.removeItem(key);
    }
}
    var elementToDelete = document.getElementById(jobid);
    // Delete the element using the remove() method
    elementToDelete.remove();
}
