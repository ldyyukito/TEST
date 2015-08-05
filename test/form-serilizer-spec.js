describe("scanner", function() {
  var testContainer = document.getElementById("test-container");
  var form;
  beforeEach(function() {
    testContainer.innerHTML = "<form>" +
      "<input type='radio' name='singleChoice1' value='A' checked/>"+
      "<input type='radio' name='singleChoice1' value='B' />" +
      "<input type='radio' name='singleChoice1' value='C' />" +
      "<input type='radio' name='singleChoice1' value='D' />" +
      "<input type='checkbox' name='multiple1' value='A' checked/>" +
      "<input type='checkbox' name='multiple1' value='B' checked/>" +
      "<input type='checkbox' name='multiple1' value='C' />" +
      "<input type='checkbox' name='multiple1' value='D' />" +
      "<input type='text' name='blank1' value='统一建模语言' />" +
      "<input type='text' name='blank2' value='多态性' />" +
      "<input type='text' name='blank2' value='统一性' />" +
      "<input type='text' name='blank2' value='不知道' />" +
      "</form>";
      form = testContainer.getElementsByTagName("form")[0];
  });
  afterEach(function() {
    testContainer.innerHTML = "";
  });

  describe("", function() {

    it("get name,type and value", function() {
      var scanner = new FormSerilizer();
      var result = scanner.scan(form);

      expect(result).toEqual([{
        name: 'singleChoice1',
        type: 'radio',
        value: ['A']
      }, {
        name: 'multiple1',
        type: 'checkbox',
        value: ['A','B']
      }, {
        name: 'blank1',
        type: 'text',
        value: ['统一建模语言']
      }, {
        name: 'blank2',
        type: 'text',
        value: ['多态性', '统一性', '不知道']
      }]);
    });
  });
});
