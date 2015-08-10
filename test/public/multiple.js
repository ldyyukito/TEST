function Multiple(name, value) {
  this.name = name;
  this.value = value;
}

Multiple.prototype.mark = function(trueAnswer) {
  var that = this;
  var finalScore;
  var keyItem = trueAnswer.filter(function(val) {
    return (that.name === val.name);
  });
  var standardAnswer = keyItem[0].value;
  for (var i = 0; i < that.value.length; i++) {
    if (standardAnswer.indexOf(that.value[i]) === -1) {
      finalScore = 0;
      return finalScore;
    }
  }

  if (that.value.length === keyItem[0].value.length) {
    finalScore = 5;
  } else {
    finalScore = 2;
  }
  return finalScore;
};
