module.exports.index = (app, request, response) => {

    let model = new app.src.models.ImagesModel();
    model.index(app, request, response);
};

module.exports.add = (app, request, response) => {

  let model = new app.src.models.ImagesModel();
  model.add(app, request, response);
};
