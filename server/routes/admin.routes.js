const AdminController = require('../controllers/admin.controller');
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {
    // app.get('/api/user', authenticate, AdminController.findAll);
    app.post('/api/register', AdminController.register);
    app.post('/api/login', AdminController.login);
    app.get('/api/logout', AdminController.logout);
    app.get('/api/user/:id', AdminController.getOne);
    // app.put('/api/user/:id', AdminController.update);
    // app.delete('/api/user/:id', AdminController.delete)
}