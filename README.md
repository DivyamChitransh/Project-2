# Project-2
Job Board

Tech-Stack Used: i) Node.js ii) Express.js iii) MongoDB iv) mongoose v) npm

Description: Make a Job Board system using Node Express MongoDB as a BackEnd project to store the values of users and courses on database.

Features: 
i) For Job Seekers: 
Create New Jobseekers profile. ('/post/jobseekers')
Retreive a particular job seeker profile. ('/get/jobseekers/:id')
update a particular jobseeker. ('/put/jobseekers/:id')
delete a particular jobseeker. ('/delete/jobseekers/:id')

ii) For Employers: 
Create New Employers profile. ('/post/Employers')
Retreive a particular Employer profile. ('/get/Employer/:id')
update a particular Employer. ('/put/Employer/:id')
delete a particular Employer. ('/delete/Employer/:id')

iii) For Job Postings: 
Create New Job posting. post('/jobs')
Retreive a particular job post. get('/jobs/:id')
update a particular Job posting. put('jobs/:id')
delete a particular job posting. ('/delete/jobs/:id')
Get all jobs. get('/jobs)

iv) For job applications:
post('/applications') - Submit job application
get('/applications/:jobseekerid) - Retrieve applications send by jobseekers
get('applications/:jobid) - Retrieve applications submit to particular job.

v) Analytics: get('/analytics)



Installation process:

i) Install node . ii) Install mongoDB and connect it with the url to store the data in Database. iii) Use npm init -y to initialise the project. iv) use express to install express dependency. v) use mongoose to install mongoose.
