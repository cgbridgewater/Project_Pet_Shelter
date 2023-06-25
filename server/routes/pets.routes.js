const PetsController = require('../controllers/pets.controller');
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {
    app.get('/api', PetsController.index);
    app.get('/api/pets', PetsController.getAll);
    app.get('/api/admin/pets', authenticate, PetsController.getAll);  // auth required
    app.get('/api/pets/:id', PetsController.getOne);
    app.get('/api/admin/pets/:id', authenticate, PetsController.getOne);  // auth required
    app.get('/api/pets/sort/:type', PetsController.sorter);
    app.post('/api/pets', PetsController.create);
    app.put('/api/pets/:id', PetsController.update);
    app.delete('/api/pets/:id', PetsController.delete);
}