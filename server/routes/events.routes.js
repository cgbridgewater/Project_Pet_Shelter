const EventsController = require('../controllers/events.controller');

module.exports = (app) => {
    app.get('/api/events/:today', EventsController.sorter);
    app.get('/api/events', EventsController.getAll);
    // app.get('/api/pets/event/:id', EventsController.getOne);
    app.post('/api/event', EventsController.create);
    // app.put('/api/event/:id', EventsController.update);
    // app.delete('/api/pets/event/:id', EventsController.delete);
}