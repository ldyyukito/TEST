function test() {
  var tempform= document.getElementById('test-container');
  var form = tempform.getElementsByTagName("input");
  var result = 0;
  var formserilizer = new FormSerilizer();
  var answer = formserilizer.scan(form);
  var score = new GetScore();
  var trueAnswer = loadTrueAnswer();
  result = score.getResult(answer, trueAnswer);

  document.getElementById('SCORE').value = result;
}

document.getElementById('SNO').addEventListener('keydown', function(evt) {
  console.log(String.fromCharCode(evt.keyCode));
  if (((evt.keyCode < 49) || (evt.keyCode > 59)) && (evt.keyCode !== 8)) {
    evt.preventDefault();
  }
});

var submitBut = document.getElementById('Submit');
submitBut.addEventListener('click',function() {
  test();
});


function showChoiceAnswer(name,id) {
  var choiceQuestion= document.getElementsByName(name);

function getResult() {
  var result = [].filter.call(choiceQuestion, function(elem) {
    return elem.checked;
  }).map(function(elem) {
    return elem.value;
  });
  return result.join("-");
}

[].forEach.call(choiceQuestion, function(element) {
  element.addEventListener('click', function() {
    document.getElementById(id).value = getResult();
  });
});
}

showChoiceAnswer('singleChoice1','Q2-1');
showChoiceAnswer('singleChoice2','Q2-2');
showChoiceAnswer('multiple1','Q3-1');
showChoiceAnswer('multiple2','Q3-2');
showChoiceAnswer('judge1','Q4-1');
showChoiceAnswer('judge2','Q4-2');
