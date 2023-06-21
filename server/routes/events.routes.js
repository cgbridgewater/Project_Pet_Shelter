const EventsController = require('../controllers/events.controller');

module.exports = (app) => {
    app.get('/api/events/:today', EventsController.sorter);
    app.get('/api/events', EventsController.getAll);
    app.get('/api/oneEvent/:id', EventsController.getOne);
    app.post('/api/events', EventsController.create);
    app.put('/api/events/:id', EventsController.update);
    app.delete('/api/events/:id', EventsController.delete);
}