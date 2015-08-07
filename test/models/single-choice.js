function SingleChoice(name, value) {
  this.name = name;
  this.value = value;
}

SingleChoice.prototype.mark = function(trueAnswer) {
  var that = this;
  var keyItem = trueAnswer.filter(function(val) {
    return (that.name === val.name);
  });
  if (this.value[0] === keyItem[0].value[0]) {
    return keyItem[0].point;
  }
};
 
