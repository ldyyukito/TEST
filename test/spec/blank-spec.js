describe("blank", function() {
  describe("", function() {
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

    it("get blank score", function() {
      var blankScore = new Blank('blank2', ['多态性', '统一性', '继承性']);
      var result = blankScore.mark(trueAnswer);
      expect(result).toEqual(2);
    });

    it("get blank score", function() {
      var blankScore = new Blank('blank2', ['多态性', '封装性', '继承性']);
      var result = blankScore.mark(trueAnswer);
      expect(result).toEqual(3);
    });
    it("get blank score", function() {
      var blankScore = new Blank('blank2', ['多态性', '多态性', '继承性']);
      var result = blankScore.mark(trueAnswer);
      expect(result).toEqual(2);
    });


  });
});
