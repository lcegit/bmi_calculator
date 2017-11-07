
describe("Person", function() {
  var person;

  describe("Metric method", function() {
    beforeEach(function() {
      person = new Person({weight: 90, height: 186});
    });

    it("should have weight of 90", function() {
      expect(person.weight).toEqual(90);
    });

    it("should have height of 186", function() {
      expect(person.height).toEqual(186);
    });

    it("should calculate BMI value", function() {
      person.calculate_bmi();
      expect(person.bmiValue).toEqual(26.01)
    });

    it("should have a BMI Message", function() {
      person.calculate_bmi();
      expect(person.bmiMessage).toEqual("Overweight")
    });
  });


  describe("Imperial method", function() {
    beforeEach(function() {
      person = new Person({weight: 198.41, height: 73.22});
    });

    it("should have weight of 90", function() {
      expect(person.weight).toEqual(198.41);
    });

    it("should have height of 186", function() {
      expect(person.height).toEqual(73.22);
    });

    it("should calculate BMI value", function() {
      person.calculate_bmi_imperial();
      expect(person.bmiValue).toEqual(26.02)
    });

    it("should have a BMI Message", function() {
      person.calculate_bmi_imperial();
      expect(person.bmiMessage).toEqual("Overweight")
    });

  });
});
