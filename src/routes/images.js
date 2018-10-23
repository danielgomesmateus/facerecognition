module.exports = function(app) {

  app.get('/images', function(request, response) {

    app.src.controllers.ImagesController.index(app, request, response);
  });

  app.get('/images/extract', function(request, response) {

    app.src.controllers.ImagesController.extract(app, request, response);
  });

  app.get('/images/train', function(request, response) {

    app.src.controllers.ImagesController.train(app, request, response);
  });
};
