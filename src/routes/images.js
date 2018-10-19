module.exports = function(app) {

  app.get('/images/add', function(request, response) {

    app.src.controllers.ImagesController.add(app, request, response);
  });
};
