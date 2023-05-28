const PetsController = require('../controllers/pets.controller');

module.exports = (app) => {
    app.get('/api', PetsController.index);
    app.get('/api/pets', PetsController.getAll);
    app.get('/api/pets/:id', PetsController.getOne);
    app.get('/api/pets/sort/:type', PetsController.sorter);
    app.post('/api/pets', PetsController.create);
    app.put('/api/pets/:id', PetsController.update);
    app.delete('/api/pets/:id', PetsController.delete);
}