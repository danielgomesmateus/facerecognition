module.exports.index = (app, request, response) => {

    let model = new app.src.models.ImagesModel(app, request, response);
    model.index();
};

module.exports.add = (app, request, response) => {

  let model = new app.src.models.ImagesModel(app, request, response);
  model.add();
};
