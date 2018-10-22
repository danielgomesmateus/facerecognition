module.exports = function(app) {

  app.get('/images', function(request, response) {

    app.src.controllers.ImagesController.index(app, request, response);
  });

  app.get('/images/add', function(request, response) {

    app.src.controllers.ImagesController.add(app, request, response);
  });
};
