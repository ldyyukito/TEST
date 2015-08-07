describe("", function() {
  describe("", function() {

      var answer = [{
        name: 'singleChoice1',
        type: 'radio',
        value: ['A']
      }, {
        name: 'multiple1',
        type: 'checkbox',
        value: ['A', 'B']
      }, {
        name: 'blank1',
        type: 'text',
        value: ['统一建模语言']
      }, {
        name: 'blank2',
        type: 'text',
        value: ['多态性', '封装性', '不知道']
      }];

    var trueAnswer = [{
      name: 'singleChoice1',
      value: ['A'],
      point: 2
    }, {
      name: 'multiple1',
      value: ['A', 'B'],
      point: 5
    }, {
      name: 'blank1',
      value: ['统一建模语言'],
      point: 1
    }, {
      name: 'blank2',
      value: ['多态性', '封装性', '继承性'],
      point: 3
    }];

    it(" get  score", function() {
      var score = new GetScore();
      var result = score.getResult(answer,trueAnswer);
      expect(result).toEqual(10);
    });
  });
});
