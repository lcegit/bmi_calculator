describe("BMICalculator", function() {
  var calculator;
  var person;

  beforeEach(function() {
    person_metric = new Person({weight: 90, height: 186});
    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using metric method", function() {
    calculator.metric_bmi(person_metric);
    expect(person.bmiValue).toEqual(26.01);
  });

  xit("calculates BMI for a person using Imperial method", function() {
    calculator.imperial_bmi(person);
    expect(person.bmiValue).toEqual(26.01);
  });

});
