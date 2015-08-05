document.getElementById('SNO').addEventListener('keydown', function(evt) {
  console.log(String.fromCharCode(evt.keyCode));
  if (((evt.keyCode < 49) || (evt.keyCode > 59)) && (evt.keyCode !== 8)) {
    evt.preventDefault();
  }
});


 var information = document.getElementsByName('info');
function vertify() {
var result = '';
  [].forEach.call(information, function(element) {
      if (element.value === '') {
        //alert(element.id + "不能为空");
        result = element.id ;
        alert(result+"不能为空");
      }
    });
  }

//之后将它改为一个函数，让每个函数调用
var radio = document.getElementsByName('singleChoice1');
function getResult() {
  var result = [].filter.call(radio, function(elem) {
    return elem.checked;
  }).map(function(elem) {
    return elem.value;
  });
  return result.join("-");

}
[].forEach.call(radio, function(element) {
  element.addEventListener('click', function() {
    document.getElementById('DXDA1').value = getResult();
  });
});


























// function vertify(){
//     var n= document.getElementById("SNO").value;
//     if(n === ''){
//         alert("学号不能为空");
//         return;
//     }
// }
















//
//
//
//
//
//
//
//
//
//     expect().toBe();
//   });
// })
