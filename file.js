'use strict';
const responseFactory = require('common-tools').responseFactory;
const resultFactory = require('common-tools').resultFactory;
var fs = require('fs');

const routes = [
    {
        name: 'getPeriod',
        description: '',
        route: '/getPeriod',
        method: 'get',
        callback: async (req, res, next) => {
          try {
            fs.readFile('student.json', (err, data) => {
                if (err) throw err;
                let student = JSON.parse(data);
                console.log(student);
                responseFactory(res, student);
            });
            
          } catch (e) {
            console.log('ERROR');
            console.log(e);
            return next(e);
          }
        },
        protected: false,
        restricted: false
      },
   
];

module.exports = {
  routes: routes,
  router: router(routes),
  domain: '/api/file',
};
