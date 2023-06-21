const AdoptController = require('../controllers/adopt.controller');

module.exports = (app) => {
    app.get('/api/adopt', AdoptController.getAll);
    app.get('/api/adopt/:id', AdoptController.getOne);
    app.post('/api/adopt/adopt', AdoptController.create);
    app.delete('/api/adopt/:id', AdoptController.delete);
    // app.put('/api/adopt/:id', AdoptController.update); // just in case!
    // app.get('/api/adopt/sort/:type', AdoptController.sorter); // just in case!
}