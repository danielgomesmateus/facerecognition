function ImagesModel() {

}

ImagesModel.prototype.add = (app, request, response) => {

  console.log('Model criado!');
};

module.exports = function() {

  return ImagesModel;
};
