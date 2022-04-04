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

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/login' },
  "/login": { view: 'pages/login' },



  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/

  'GET /student': { action: 'student/find-all' },
  "GET /student/add": { action: 'student/add' },
  "POST /student/add-process": { action: 'student/add-process' },
  "GET /student/edit/:id": { action: 'student/edit' },
  "POST /student/edit-process/:id": { action: 'student/edit-process' },
  "GET /student/destroy/:id": { action: 'student/destroy' },
  "POST /login-process": { action: 'authenticated/login' },
  "GET /logout": { action: 'authenticated/logout' },
};
