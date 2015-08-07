describe("singleChoice", function() {
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
          point: 2
        }, {
          name: 'judge1',
          value: ['T'],
          point: 1
        }];

        it("get SingleChoice score", function() {
          var radioScore = new SingleChoice('singleChoice1', ['A']);
          var result = radioScore.mark(trueAnswer);
          expect(result).toEqual(2);
        });

      });
    });
