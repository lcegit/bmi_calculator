describe('BMICalculator', function() {
  var calculator;
  var person;

  describe('Metric method', function() {
    beforeEach(function() {
      person = new Person({ weight: 90, height: 186 });
      calculator = new BMICalculator();
    });

    it('calculates BMI for a person using metric method', function() {
      calculator.metric_bmi(person);
      expect(person.bmiValue).toEqual(26.01);
    });
  });

  describe('Imperial method', function() {
    beforeEach(function() {
      person = new Person({ weight: 198.41, height: 73.22 });
      calculator = new BMICalculator();
    });

    it('calculates BMI for a person using Imperial method', function() {
      calculator.imperial_bmi(person);
      expect(person.bmiValue).toEqual(26.02);
    });
  });
});
