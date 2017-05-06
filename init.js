const natural = require('natural');
const fs = require('fs');
const StemmerEs = require('./node_modules/natural/lib/natural/stemmers/porter_stemmer_es');
// var classifier = new natural.LogisticRegressionClassifier(StemmerEs);
var classifier = new natural.BayesClassifier(StemmerEs);

fs.readFile('training_posts.json', 'utf-8', function (err, data) {
    if (err) {
      console.log(err);
    } else {
      var trainingData = JSON.parse(data);
      train(trainingData);
    }
});

function train(trainingData) {
  console.log("Empieza el entrenamiento");
  trainingData.forEach(function(item) {
    classifier.addDocument(item.text,item.label);
  })
  var startTime = new Date();
  classifier.train();
  var endTime = new Date();
  var trainingTime = (endTime-startTime)/1000.0;
  console.log("Tiempo de entrenamiento", trainingTime, "seconds");
  loadTestData();
}

function loadTestData() {
  console.log("Loading test data");
  fs.readFile('test_posts.json', 'utf-8', function (err, data) {
    if (err) {
      console.log(err);
    } else {
      var testData = JSON.parse(data);
      testClassifier(testData);
    }

  })
}

function testClassifier(testData) {
  console.log("Testing classifier");
  var numCorrect = 0;
  testData.forEach(function(item) {
    var labelGuess = classifier.classify(item.text);
    if (labelGuess === item.label) {
      numCorrect++;
    }
  });
  console.log("Correct %:", numCorrect/testData.length);
  saveClassifier(classifier);
}

function saveClassifier(classifier) {
  classifier.save('classifier.json', function (err, classifier) {
    if (err) {
      console.log(err);
    } else {
      console.log("Classifier saved!");
    }
  })
}
