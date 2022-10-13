const express = require('express');

const routes = express.Router({
    mergeParams: true
});


routes.get('/', (req, res) => {
    res.status(200).json({status: 'Request accepted!', generalSkills: ['Front End Development', 'Web Design', 'UI/UX Design', 'Object Oriented Programming']});
});

routes.get('/coding', (req, res) => {
    res.status(200).json({status: 'Request accepted!', languages: ['JavaScript', 'React', 'React Native', 'CSS', 'Java', 'Node', 'MySQL', 'C', 'BootStrap']});
});

routes.get('/certifications', (req, res) => {
    res.status(200).json({status: 'Request accepted!', certs: 
        [
            {img: 'https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png', link: 'https://www.freecodecamp.org/certification/zachrussell/responsive-web-design', title: 'Responsive Web Design Developer Certification'},
            {img: 'https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png', link: 'https://www.freecodecamp.org/certification/zachrussell/javascript-algorithms-and-data-structures', title: 'JavaScript Algorithms and Data Structures Certification'},
            {img: 'https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png', link: 'https://www.freecodecamp.org/certification/zachrussell/front-end-development-libraries', title: 'Front End Development Libraries'},
            {img: '0', link: 'https://verification.testout.com/verifycert/6-1C6-74E9V', title: 'TestOut IT Fundamentals Pro Certification'}
        ]
    });
});

routes.get('/linkedinAssessments', (req, res) => {
    res.status(200).json({status: 'Request accepted!', assessments: ['IT Operations', 'Front-End Development', 'JavaScript', 'HTML', 'CSS', 'Adobe Premiere Pro']});
});

module.exports = {routes};