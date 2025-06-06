const linkedIn = require('linkedin-jobs-api');

const queryOptions = {
    keyword: 'Mern stack developer',
    location: 'India',
    dateSincePosted: 'past Week',
    jobType: 'full time',
    remoteFilter: 'full time',
    salary: '100000',
    experienceLevel: 'entry level',
    limit: '10',
    page: "0",
};

linkedIn.query(queryOptions).then(response => {
    console.log(response);
});