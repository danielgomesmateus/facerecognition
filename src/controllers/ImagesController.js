module.exports.index = (app, request, response) => {

    let model = new app.src.models.ImagesModel(app, request, response);
    model.index();
};

module.exports.extract = (app, request, response) => {

  let model = new app.src.models.ImagesModel(app, request, response);
  model.extract();
};

module.exports.train = (app, request, response) => {

  let model = new app.src.models.ImagesModel(app, request, response);
  model.train();
};
