const EventsController = require('../controllers/events.controller');
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {
    app.get('/api/events/:today', EventsController.sorter);
    app.get('/api/events', EventsController.getAll);
    app.get('/api/admin/events', authenticate, EventsController.getAll);  // auth required
    app.get('/api/oneEvent/:id', EventsController.getOne);
    app.get('/api/admin/oneEvent/:id', authenticate, EventsController.getOne);  // auth required
    app.post('/api/events', EventsController.create);
    // app.put('/api/events/:id', EventsController.update);  // created for expansion
    // app.delete('/api/events/:id', EventsController.delete);  // created for expansion
}