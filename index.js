const natural = require('natural');

exports.promise = () => {
  return new Promise((resolve, reject) => {
    natural.BayesClassifier.load(`${__dirname}/classifier.json`, null, function(err,_classifier){
      if (err)
        reject(err);
      else
        resolve(_classifier);
    });
  })
}
