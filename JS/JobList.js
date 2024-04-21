class Job {
  constructor(
    job_id,
    job_title,
    salary,
    company_name,
    job_status,
    job_description,
    location,
    years_of_experience,
    WorkType,
    created,
    imagePath
  ) {
    this.job_id = job_id;
    this.job_title = job_title;
    this.salary = salary;
    this.company_name = company_name;
    this.job_status = job_status;
    this.job_description = job_description;
    this.location = location;
    this.years_of_experience = years_of_experience;
    this.WorkType = WorkType;
    this.created = created;
    this.imagePath = imagePath;
  }

  displayJob() {
    return `<div class="job"> 
    <img src="${this.imagePath}" alt="${this.company_name}" class="jobdisplayedimg">
        <div class="job-details">
        <h3>${this.job_title}</h3>
        <h5>${this.company_name}</h5>
        <span class="span">
        <img src="../Images/location.jpg" class="location">
        ${this.location}
        <img src="../Images/time.jpg" class="time">
        Full Time
        <img src="../Images/pound.jpg" class="pound">
        ${this.salary}</span>
        <button class="job-btn"><a href="JobDetails.html?id=${this.job_id}">Details</a></button>
        </div>
          </div>`;

  }
}


let Jobs = JSON.parse(localStorage.getItem("AllJobs")) || [];

function addJobToLocalStorage(job) {
  Jobs.push(job);
  localStorage.setItem("AllJobs", JSON.stringify(Jobs));
}

let job1 = new Job(
  1,
  "DevOps Engineer",
  25000,
  "Metachain Technologies inc.",
  "Open",
  "As a DevOps engineer, you'll play a crucial role in optimizing software delivery processes. Working within our team, you'll streamline operations, implement automation, and ensure seamless collaboration between development and operations. Your efforts will drive innovation and efficiency, delivering impactful solutions to a diverse range of clients globally.",
  "Cairo, Egypt",
  3,
  "On-site",
  "2 Weeks ago",
  "../Images/Metachain.jpeg"
);
let job2 = new Job(
  2,
  "DevOps Consultant",
  40000,
  "IBM Cloud pak",
  "Open",
  "In this role, you'll work in one of our IBM Consulting Client Innovation Centers (Delivery Centers), where we deliver deep technical and industry expertise to a wide range of public and private sector clients around the world. Our delivery centers offer our clients locally based skills and technical expertise to drive innovation and adoption of new technology. IBM Application Consultants work directly with our clients on key initiatives. You will have the opportunity to build an in-depth understanding of their business issues and implement organizational strategies that drive adoption of change. We are looking for experts who can build credibility and trust with our clients and provide knowledge that addresses individual and unique business needs",
  "Giza, Egypt",
  5,
  "Hybrid",
  "2 Weeks ago",
  "../Images/IBM2.png"
);
let job3 = new Job(
  3,
  "Software Testing Engineer",
  35000,
  "Valeo",
  "Open",
  "As a Software Testing Engineer, you'll play a pivotal role in ensuring the quality and reliability of our software products. You'll design and execute test cases, perform thorough analysis, and report any issues or defects to the development team. With a meticulous approach, you'll contribute to the continuous improvement of our software by identifying bugs and enhancing user experience, ultimately delivering high-quality solutions to our clients.",
  "Cairo, Egypt",
  3,
  "Hybrid",
  "6 Weeks ago",
  "../Images/valeo.png"
);
let job4 = new Job(
  4,
  "Full Stack Developer",
  25000,
  "ELSEWEDY ELECTRIC.",
  "Open",
  "As a Fullstack Developer, you'll be at the forefront of building dynamic web applications from start to finish. Your role involves both front-end and back-end development, crafting intuitive user interfaces and robust server-side logic. With a focus on delivering comprehensive solutions, you'll leverage your skills to create engaging digital experiences that meet the needs of our clients and users.",
  "Cairo, Egypt",
  3,
  "Hybrid",
  "6 Weeks ago",
  "../Images/ElSewedy.jpeg"
);
let job5 = new Job(
  5,
  "Principal Software Engineer",
  35000,
  "Sumerge.",
  "Open",
  "As a Principal Software Engineer, you'll be a key leader in driving technical excellence and innovation within our organization. Your role involves providing strategic direction, architectural guidance, and mentorship to the development team. Leveraging your deep expertise in software engineering, you'll design and implement complex systems, solve challenging technical problems, and set high standards for code quality and scalability. With a focus on driving forward-thinking solutions, you'll play a critical role in shaping the future of our software products and technologies.",
  "Zayed, Egypt",
  5,
  "Remote",
  "5 Weeks ago",
  "../Images/smurge.jpeg"
);
if (Jobs.length === 0) {
  addJobToLocalStorage(job1);
  addJobToLocalStorage(job2);
  addJobToLocalStorage(job3);
  addJobToLocalStorage(job4);
  addJobToLocalStorage(job5);
}
function displayAllJobs() {
  // document.getElementById("Jobs").innerHTML = "";
  let jobsHtml = "";
  Jobs.forEach((jobData) => {
    let job = new Job(
      jobData.job_id,
      jobData.job_title,
      jobData.salary,
      jobData.company_name,
      jobData.job_status,
      jobData.job_description,
      jobData.location,
      jobData.years_of_experience,
      jobData.WorkType,
      jobData.created,
      jobData.imagePath
    );
    jobsHtml += job.displayJob();
  });
  let addedJobs = JSON.parse(localStorage.getItem("addformData")) || [];
  addedJobs.forEach((jobData) => {
    let job = new Job(
      jobData.jobId,
      jobData.jobTitle,
      jobData.salary,
      jobData.companyName,
      jobData.jobStatus,
      jobData.description,
      jobData.location,
      jobData.yearsOfExperience,
      jobData.WorkType,
      jobData.user,
      jobData.imagePath
    );
    jobsHtml += job.displayJob();
  });

  document.getElementById("job-container").innerHTML = jobsHtml;
}

displayAllJobs(); 
