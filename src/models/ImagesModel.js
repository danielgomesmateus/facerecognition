function ImagesModel() {
}

ImagesModel.prototype.index = (app, request, response) => {

  const fs   = require('fs');
  const path = require('path');
  const face = require('face-recognition');

  const dataPath   = path.resolve('src/public/images/');
  const classNames = ['sheldon', 'lennard', 'raj', 'howard', 'stuart'];

  const allFiles      = fs.readdirSync(dataPath);
  const imagesByClass = classNames.map(
    name =>
      allFiles
      .filter(file => name.includes(name))
      .map(file => path.join(dataPath, file))
      .map(end => face.loadImage(end))
  );

  const numTrainingFaces = 10;
  const trainDataByClass = imagesByClass.map(imgs => imgs.slice(0, numTrainingFaces));
  const testeDataByClass = imagesByClass.map(imgs => imgs.slice(numTrainingFaces));
};

ImagesModel.prototype.add = (app, request, response) => {

  response.send('Envio de imagens para reconhecimento.');
};

module.exports = function() {

  return ImagesModel;
};
