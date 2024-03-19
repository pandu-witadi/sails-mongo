/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

    'GET /api/test' : 'test/server-check',
    'GET /api/tutorial': 'tutorial/index',
    'GET /api/tutorial/:id': 'tutorial/show',
    'POST /api/tutorial': 'tutorial/create',
    'DELETE /api/tutorial/:id': 'tutorial/delete'
    
}
