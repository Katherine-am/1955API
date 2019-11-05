const controller = require('../controllers/controller');

module.exports = app => {

    app.get('/', controller.index);
    app.get('/new/:name/', controller.newName);
    app.get('/remove/:name/', controller.removeName);
    app.get('/:name', controller.viewName)
    
}