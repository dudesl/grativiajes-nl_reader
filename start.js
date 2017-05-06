const natural = require('natural');
const fs = require('fs');
const StemmerEs = require('./node_modules/natural/lib/natural/stemmers/porter_stemmer_es');
let dumpData = []

// natural.LogisticRegressionClassifier.load('classifier.json', null, function(err,_classifier){
natural.BayesClassifier.load('classifier.json', null, function(err,_classifier){
  if (err) {
    console.log(err);
  } else {
    console.log("Classifier Cargado: ", _classifier);
    fs.readFile('dump_posts.json', 'utf-8', function (err, data) {
        if (err) {
          console.log(err);
        } else {
          var returnedData = []
          dumpData = JSON.parse(data);
          dumpData.forEach(function(item) {
            // Nice Output
            console.log(`( * ${_classifier.classify(item)} *), ${item}`);

            // CSV Output
            // console.log(`${item}, ${_classifier.classify(item)}`);
          })

          console.log(returnedData);


        }
    });
  }
});
