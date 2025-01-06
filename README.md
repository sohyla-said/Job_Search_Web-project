<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Search Web Application</title>
</head>
<body>
    <h1>Job Search Web Application</h1>
    <p>A dynamic web platform facilitating connections between companies and job seekers. This Django-powered application streamlines the job posting and application process with role-based access control, enabling companies to manage opportunities while providing job seekers with powerful search capabilities.</p>
    <h2>Project Overview</h2>
    <p>The Job Search Web Application serves as a centralized platform where companies can post and manage job opportunities, while job seekers can search, view, and apply for positions matching their criteria. The system features a dual-role user system, distinguishing between company administrators and general users, each with tailored functionalities and interfaces.</p>
    <h2>Key Features</h2>
    <h3>For Company Administrators</h3>
    <ul>
        <li><strong>Account Management</strong>: Secure signup and login system with company-specific profile creation.</li>
        <li><strong>Job Management Dashboard</strong>:
            <ul>
                <li>Create and publish new job listings.</li>
                <li>Edit existing job postings.</li>
                <li>Remove outdated positions.</li>
                <li>Track posting status (open/closed).</li>
                <li>View company-specific job listings.</li>
            </ul>
        </li>
    </ul>
    <h3>For Job Seekers</h3>
    <ul>
        <li><strong>User Account System</strong>: Personalized account creation and authentication.</li>
        <li><strong>Job Discovery</strong>:
            <ul>
                <li>Advanced search functionality by job title and experience requirements.</li>
                <li>Comprehensive job listing views.</li>
                <li>Detailed job description pages.</li>
            </ul>
        </li>
        <li><strong>Application Management</strong>:
            <ul>
                <li>Streamlined application process.</li>
                <li>Personal application tracking dashboard.</li>
            </ul>
        </li>
    </ul>
    <h3>General Features</h3>
    <ul>
        <li><strong>Dynamic Navigation</strong>: Context-aware navigation bar adapting to user roles.</li>
        <li><strong>Responsive Interface</strong>: Consistent experience across all pages.</li>
        <li><strong>Secure Authentication</strong>: Role-based access control system.</li>
    </ul>
    <h2>Tech Stack</h2>
    <h3>Backend</h3>
    <ul>
        <li><strong>Framework</strong>: Django</li>
        <li><strong>Database</strong>: Django ORM with configurable database backend</li>
        <li><strong>Authentication</strong>: Django's built-in authentication system</li>
    </ul>
    <h3>Frontend</h3>
    <ul>
        <li><strong>Template Engine</strong>: Django Templates</li>
        <li><strong>Interactive Features</strong>: AJAX for dynamic content loading</li>
        <li><strong>Styling</strong>: Modern CSS for responsive design</li>
    </ul>
    <h3>Security</h3>
    <ul>
        <li>Password hashing and validation</li>
        <li>CSRF protection</li>
        <li>Secure session management</li>
    </ul>
    <h2>Models</h2>
    <h3>User Model</h3>
    <ul>
        <li>Username</li>
        <li>Email</li>
        <li>Password (hashed)</li>
        <li>Role flag (company_admin/user)</li>
        <li>Company name (for admin accounts)</li>
    </ul>
    <h3>Job Model</h3>
    <ul>
        <li>Unique identifier</li>
        <li>Title</li>
        <li>Company details</li>
        <li>Salary information</li>
        <li>Status (open/closed)</li>
        <li>Description</li>
        <li>Experience requirements</li>
        <li>Creation timestamp</li>
        <li>Admin reference</li>
    </ul>
    <h3>Application Model</h3>
    <ul>
        <li>Job reference</li>
        <li>User reference</li>
        <li>Application timestamp</li>
        <li>Status tracking</li>
    </ul>
    <p>This project was developed as part of a university web development course, demonstrating the practical implementation of full-stack web development concepts using the Django framework.</p>
</body>
</html>
