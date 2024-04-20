// This file is used to display the job data as job objects

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
    let job = `<div class="job-container"> 
        <div class="jobdetails">
            <p>Job Details:</p>
             <ul>
                <li>ID: ${this.job_id}</li>
                <li>Title: ${this.job_title}</li>
                <li>Company: ${this.company_name}</li>
                <li>Status: ${this.job_status}</li>
                <li>Description: ${this.job_description}</li>
                <li>Location: ${this.location}</li>
            </ul>
        </div>
           <div class="jobimg">Image: <br><a href="JobDetails.html?id=${this.job_id}">
           <img src="/Images/${this.imagePath}" alt="${this.job_id}" class="jobdisplayedimg"></a>
           </div>
          </div>`;
    document.getElementById("Jobs").innerHTML += job;
  }
}
let job1 = new Job(
  1,
  "DevOps Engineer",
  25000,
  "Metachain Technologies inc.",
  "Open",
  "As a DevOps engineer, you'll play a crucial role in optimizing software delivery processes. Working within our team, you'll streamline operations, implement automation, and ensure seamless collaboration between development and operations. Your efforts will drive innovation and efficiency, delivering impactful solutions to a diverse range of clients globally.",
  " Cairo, Egypt",
  3,
  "On-site",
  "2 Weeks ago",
  "../Images/Metachain.webp"
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
  "../Images/IBM.jpeg"
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

localStorage.setItem("job1", JSON.stringify(job1));
localStorage.setItem("job2", JSON.stringify(job2));
localStorage.setItem("job3", JSON.stringify(job3));
localStorage.setItem("job4", JSON.stringify(job4));
localStorage.setItem("job5", JSON.stringify(job5));

const Jobs = [job1, job2, job3, job4, job5];
localStorage.setItem("AllJobs", JSON.stringify(Jobs));
function displayAllJobs() {
  document.getElementById("Jobs").innerHTML = "";
  Jobs.forEach((job) => {
    job.displayJob();
  });
}
displayAllJobs();
