const AdoptController = require('../controllers/adopt.controller');
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {
    app.get('/api/adopt', AdoptController.getAll);
    app.get('/api/admin/adopt', authenticate, AdoptController.getAll); // auth required
    app.post('/api/adopt', AdoptController.create);
    app.get('/api/admin/adopt/:id', authenticate, AdoptController.getOne);  // auth required
    app.get('/api/adopt/:id', AdoptController.getOne);
    app.delete('/api/adopt/:id', AdoptController.delete);
    // app.put('/api/adopt/:id', AdoptController.update); // just in case!
    // app.get('/api/adopt/sort/:type', AdoptController.sorter); // just in case!
}