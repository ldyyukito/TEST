describe("scanner", function() {
  describe("", function() {
    var trueAnswer = [{
      name: 'singleChoice1',
      value: ['A'],
      point: 2
    }, {
      name: 'multiple1',
      value: ['A','B','C'],
      point: 5
    }, {
      name: 'blank1',
      value: ['统一建模语言'],
      point: 2
    }, {
      name: 'judge1',
      value: ['T'],
      point: 1
    }];

    it("mark", function() {
      var checkboxScore = new Multiple('multiple1', ['A','B','D']);
      var result = checkboxScore.judgeMark(trueAnswer);
      expect(result).toEqual(0);
    });

  });
});
