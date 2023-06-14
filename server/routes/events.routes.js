const EventsController = require('../controllers/events.controller');

module.exports = (app) => {
    app.get('/api/pets/event', EventsController.getAll);
    app.get('/api/pets/event/:id', EventsController.getOne);
    app.post('/api/pets/event', EventsController.create);
    app.put('/api/pets/event/:id', EventsController.update);
    app.delete('/api/pets/event/:id', EventsController.delete);
}