class ImagesModel {

  constructor(app, request, response) {

    this.app      = app;
    this.request  = request;
    this.response = response;
  }

  index() {

    const fs   = require('fs');
    const path = require('path');
    const face = require('face-recognition');

    const dataPath   = path.resolve('src/public/images/pattern/');
    const classNames = ['sheldon', 'lennard', 'raj', 'howard', 'stuart'];

    const allFiles      = fs.readdirSync(dataPath);
    const imagesByClass = classNames.map(
      name =>
        allFiles
        .filter(file => name.includes(name))  // Verifica se existe alguma imagem com o mesmo nome do array
        .map(file => path.join(dataPath, file)) // Cria o caminho com os delimitadores
        .map(end => face.loadImage(end)) // Carrega a imagem
    );

    const numTrainingFaces = 10;
    const trainDataByClass = imagesByClass.map(imgs => imgs.slice(0, numTrainingFaces));
    const testeDataByClass = imagesByClass.map(imgs => imgs.slice(numTrainingFaces));
  };

  extract() {

    const face       = require('face-recognition');
    const path       = require('path');

    const image      = face.loadImage(path.resolve('src/public/images/pattern/users.jpeg'));
    const detector   = face.FaceDetector();
    const targetSize = 150;
    const faceImages = detector.detectFaces(image, targetSize);

    faceImages.forEach((picture, i) => {

      face.saveImage(path.resolve(`src/public/images/updated/face_${i}.png`), picture);
    });
  };

  train() {

    const face = require('face-recognition');

    const recognizer = face.FaceRecognizer();

    trainDataByClass.forEach((faces, labe) => {

      const name = classNames[label];
      recognizer.addFaces(faces, name);
    });
  };
}

module.exports = function() {

  return ImagesModel;
};
