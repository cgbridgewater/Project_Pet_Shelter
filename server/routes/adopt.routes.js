const AdoptController = require('../controllers/adopt.controller');

module.exports = (app) => {
    // app.get('/api', AdoptController.index);
    // app.get('/api/pets', AdoptController.getAll);
    // app.get('/api/pets/:id', AdoptController.getOne);
    // app.get('/api/pets/sort/:type', AdoptController.sorter);
    app.post('/api/pets/adopt', AdoptController.create);
    // app.put('/api/pets/:id', AdoptController.update);
    // app.delete('/api/pets/:id', AdoptController.delete);
}